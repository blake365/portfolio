import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projects from '../data'
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react'

import { Octokit } from '@octokit/core'

export default function Home() {
	const [commits, setCommits] = useState<String[]>([])
	const [loading, setLoading] = useState(true)

	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

	let repos: string[] = []

	useEffect(() => {
		// setLoading(true)
		const owner = 'blake365'

		projects.forEach((project) => {
			project.repo.forEach((item) => repos.push(item))
		})

		// console.log(repos)

		const fetchCommits = async () => {
			const commitPromises = repos.map(async (repo) => {
				const MostRecentCommit = await octokit.request(
					`GET /repos/{owner}/{repo}/commits`,
					{ owner, repo: repo, per_page: 1 }
				)

				if (MostRecentCommit.data[0].commit.author?.date) {
					return MostRecentCommit.data[0].commit.author?.date
				}

				return ''
			})

			const commitList = await Promise.all(commitPromises)
			return commitList
		}
		fetchCommits()
			.then((commitList) => {
				setCommits(commitList)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}, [])

	// console.log(commits)

	return (
		<>
			<Head>
				<title>Blake Morgan</title>
				<meta
					name='description'
					content='Blake Morgan web development portfolio'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='max-w-4xl mb-10 font-sans sm:mt-12 sm:p-6 sm:mx-auto '>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col border-b-2 border-black shadow-md bg-beige sm:flex-row sm:border-2'
				>
					<img
						className='object-cover border-b-2 border-black shadow-md sm:border-r-2 sm:border-b-0 sm:shadow-transparent sm:w-44 saturate-150'
						src='/QS25_Plate1png.png'
						alt='map'
					/>
					<div className='mx-4 my-2'>
						<h1 className='py-3 text-5xl font-bold'>Blake Morgan</h1>
						<h2 className='py-1 text-2xl font-semibold'>
							Professional Geologist / Hobby Web Developer
						</h2>
						<h3 className='text-lg sm:w-3/4'>
							Exploring the Southeast through{' '}
							<span className='font-semibold text-emerald-600'>
								geotechnical
							</span>{' '}
							engineering by day and coding side projects by night.
						</h3>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col max-w-4xl mt-6 shadow-lg'
				>
					<div className='flex flex-col p-2 border-black bg-beige sm:border-2 border-y-2'>
						<h2 className='mx-auto text-3xl font-bold'>Selected Projects</h2>
						<div className='mt-1 w-2xl'>
							<div className='flex justify-center mx-auto mb-1 font-semibold'>
								Key to Symbols:
							</div>
							<div className='flex flex-row justify-evenly'>
								<div className='flex flex-col'>
									<div
										className='w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-md mb-1'
										style={{ backgroundImage: 'url(/dots.svg)' }}
									></div>
									<div>Front End</div>
								</div>
								<div className='flex flex-col'>
									<div
										className='w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-md mb-1'
										style={{ backgroundImage: 'url(/stripe2.svg)' }}
									></div>
									<div>Serverless</div>
								</div>
								<div className='flex flex-col'>
									<div
										className='w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-md mb-1'
										style={{ backgroundImage: 'url(/bigstripe.svg)' }}
									></div>
									<div>Full Stack</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className='flex flex-col max-w-4xl mt-6 shadow-lg'>
					{projects.map((project, index) => {
						if (index > 2) {
							index += 1
						}

						let formattedDateString = 'Loading'
						if (!loading) {
							const dateString = commits[index]

							const year = dateString.substring(0, 4)
							const month = dateString.substring(5, 7)
							const day = dateString.substring(8, 10)

							formattedDateString = [month, day, year].join('/')
						}

						return (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='flex flex-row transition-all border-black bg-beige last:shadow-lg first:border-t-2'
								key={project.title}
							>
								<div
									className='w-[40px] sm:w-[50px] border-black border-b-2 border-l-0 sm:border-l-2 border-x-2 sm:border-r-0 bg-beige shadow-md'
									style={{ backgroundImage: `url(${project.sidebar})` }}
								></div>
								<div className='flex flex-col w-full px-4 pt-2 border-b-2 border-black sm:border-x-2'>
									<div className='flex flex-row flex-wrap items-baseline justify-between mb-1'>
										<h2 className='text-3xl font-bold align-baseline'>
											{project.title}
											<span>
												{project.live ? (
													<Link
														href={project.live}
														className='inline ml-2 w-36 hover:text-emerald-600'
														target='_blank'
													>
														<IconExternalLink className='inline' />
													</Link>
												) : null}
											</span>
										</h2>
										<div className='inline-block h-full mr-1'>
											{project.firstCommit}
										</div>
									</div>
									<div className='text-md'>{project.description}</div>
									<div>
										{!loading && project.github.length > 0
											? project.github.map((link, index) => (
													<div
														className='flex flex-row items-center my-1'
														key={index}
													>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 rounded-md shadow-md bg-emerald-600 text-beige hover:bg-emerald-500 w-fit'
															target='_blank'
														>
															<IconBrandGithub
																className='inline'
																width={20}
																height={20}
															/>
														</Link>
														<span className='ml-1'>
															Last Commit: {formattedDateString}
														</span>
													</div>
											  ))
											: null}
									</div>
									<div className='flex flex-wrap p-2 pl-0'>
										{project.stack.map((item) => (
											<span
												key={item}
												className='px-1 mb-1 mr-1 transition-all border border-black shadow-md hover:-translate-y-1 text-beige bg-brown'
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						)
					})}
				</div>
			</main>
		</>
	)
}
