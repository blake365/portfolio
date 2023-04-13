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
			<main className='max-w-4xl mb-4 font-sans sm:mt-12 sm:p-6 sm:mx-auto '>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col border-b border-black shadow-lg bg-gradient-to-r from-blue-200 to-sky-100 sm:flex-row sm:border sm:m-4'
				>
					<img
						className='object-cover transition-all border-r border-black sm:w-44 saturate-150'
						src='/QS25_Plate1.png'
						alt='map'
					/>
					<div className='mx-4 my-2'>
						<h1 className='py-3 text-5xl font-bold'>Blake Morgan</h1>
						<h2 className='py-1 text-2xl font-semibold'>
							Professional Geologist / Hobby Web Developer
						</h2>
						<h3 className='text-lg sm:w-3/4 '>
							Exploring the Southeast through{' '}
							<span className='font-semibold text-blue-700'>geotechnical</span>{' '}
							drilling by day and coding side projects by night.
						</h3>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col max-w-4xl mt-12 sm:mx-auto'
				>
					<div className='flex flex-col p-2 border-black bg-gradient-to-r from-blue-200 to-sky-100 sm:border border-y sm:mx-4 last:shadow-md'>
						<h2 className='mx-auto text-3xl font-bold'>Selected Projects</h2>
						<div className='mt-1 w-2xl'>
							<div className='flex justify-center mx-auto mb-1 font-semibold'>
								Key to Symbols:
							</div>
							<div className='flex flex-row justify-evenly'>
								<div className='flex flex-col'>
									<div
										className='w-[30px] h-[30px] border-black border mx-auto'
										style={{ backgroundImage: 'url(/dotgrid.svg)' }}
									></div>
									<div>Front End</div>
								</div>
								<div className='flex flex-col'>
									<div
										className='w-[30px] h-[30px] border-black border mx-auto'
										style={{ backgroundImage: 'url(/diags2.svg)' }}
									></div>
									<div>Serverless</div>
								</div>
								<div className='flex flex-col'>
									<div
										className='w-[30px] h-[30px] border-black border mx-auto'
										style={{ backgroundImage: 'url(/bigstripe.svg)' }}
									></div>
									<div>Full Stack</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className='flex flex-col max-w-4xl mt-6 sm:mx-auto'>
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
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='flex flex-row transition-all border-black bg-gradient-to-r from-blue-200 to-sky-100 sm:mx-4 last:shadow-md first:border-t hover:z-10 hover:shadow-lg child:hover:shadow-md '
								key={project.title}
							>
								<div
									className='w-[35px] sm:w-[50px] border-black border-b border-l-0 sm:border-l border-x sm:border-r-0'
									style={{ backgroundImage: `url(${project.sidebar})` }}
								></div>
								<div className='flex flex-col w-full px-2 pt-2 pl-2 border-b border-black sm:border-x'>
									<div className='flex flex-row flex-wrap items-baseline justify-between'>
										<h2 className='text-3xl font-bold text-blue-900 align-baseline'>
											{project.title}
											<span>
												{project.live ? (
													<Link
														href={project.live}
														className='inline ml-2 w-36 hover:text-blue-600'
														target='_blank'
													>
														<IconExternalLink className='inline' />
													</Link>
												) : null}
											</span>
										</h2>
										<div className='inline-block h-full text-blue-900'>
											{project.firstCommit}
										</div>
									</div>
									<div className='text-md'>{project.description}</div>
									<div>
										{!loading && project.github.length > 0
											? project.github.map((link) => (
													<div className='flex flex-row items-center my-1'>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 text-blue-100 bg-blue-800 rounded-md shadow-md hover:bg-blue-600 w-fit'
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
												className='px-1 mb-1 mr-1 text-blue-800 border border-blue-800 shadow-sm'
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
