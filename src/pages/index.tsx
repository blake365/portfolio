import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import projects from '../data'
import type { InferGetStaticPropsType } from 'next'

import { motion } from 'framer-motion'

import {
	IconExternalLink,
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
} from '@tabler/icons-react'

import { Octokit } from '@octokit/core'

export const getStaticProps = async () => {
	const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

	let repos: string[] = []
	const owner = 'blake365'

	projects.forEach((project) => {
		project.repo.forEach((item) => repos.push(item))
	})

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

	const commitList = await fetchCommits()

	return {
		props: {
			commitList,
			projects,
		},
		revalidate: 86400,
	}
}

export default function Home({
	commitList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Blake Morgan</title>
				<meta
					name='description'
					content="Blake Morgan's web development portfolio"
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
					<Image
						className='object-cover border-t-2 border-b-2 border-black shadow-md sm:border-r-2 sm:border-b-0 sm:shadow-transparent sm:w-48 saturate-150 h-80 sm:h-auto sm:border-t-0'
						src='/QS25_Plate1png.png'
						width={750}
						height={899}
						alt='map'
						priority={true}
					/>
					<div className='py-5 mx-4 my-2'>
						<h1 className='pb-3 text-5xl font-bold'>Blake Morgan</h1>
						<h2 className='py-1 text-2xl font-semibold'>
							Professional Geologist / Hobby Web Developer
						</h2>
						<h3 className='text-lg sm:w-4/5'>
							Exploring the southeast through{' '}
							<span className='font-semibold text-emerald-700'>
								geotechnical engineering
							</span>{' '}
							by day and coding side projects by night.
						</h3>
						<div className='flex flex-row mt-2 space-x-5 '>
							{/* github, linkedin and email links */}
							<Link
								href='https://github.com/blake365'
								className='flex items-center p-1 rounded-md shadow-md hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit'
								target='_blank'
								aria-label='github'
							>
								<IconBrandGithub />
							</Link>
							<Link
								href='https://www.linkedin.com/in/blakeamorgan/'
								className='flex items-center p-1 rounded-md shadow-md hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit'
								target='_blank'
								aria-label='linkedin'
							>
								<IconBrandLinkedin />
							</Link>
							<Link
								href='mailto:blake365morgan@me.com'
								className='flex items-center p-1 rounded-md shadow-md hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit'
								target='_blank'
								aria-label='email me'
							>
								<IconMail />
							</Link>
						</div>
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
						if (index > 0) {
							index += 1
						}
						let commitArray: string[] = []
						let formattedDateString = 'Loading'

						if (project.github.length > 1) {
							project.github.forEach((item, index) => {
								const dateString = commitList[index]

								const year = dateString.substring(0, 4)
								const month = dateString.substring(5, 7)
								const day = dateString.substring(8, 10)

								formattedDateString = [month, day, year].join('/')
								commitArray.push(formattedDateString)
							})
						} else {
							const dateString = commitList[index]

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
								<div className='flex flex-col w-full px-4 border-b-2 border-black sm:border-x-2'>
									<div className='flex flex-row flex-wrap items-baseline justify-between mb-2'>
										<h2 className='text-3xl font-bold align-baseline'>
											{project.title}
											<span>
												{project.live ? (
													<Link
														href={project.live}
														className='inline ml-2 w-36 hover:text-emerald-500 text-emerald-700'
														target='_blank'
													>
														<IconExternalLink
															className='inline hover:scale-110'
															width={25}
															height={25}
														/>
													</Link>
												) : null}
											</span>
										</h2>
										<div className='inline-block h-full mr-1'>
											{/* {project.firstCommit} */}
										</div>
									</div>
									<div className='space-y-2 text-md'>
										{project.description.split('/n').map((item, index) => (
											<div className='' key={index}>
												{item}
											</div>
										))}
									</div>
									<div className='sm:space-x-5 sm:flex'>
										{project.github.length === 1
											? project.github.map((link, index) => (
													<div
														className='flex flex-row items-center my-1'
														key={index}
													>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 rounded-md shadow-md bg-emerald-700 text-beige hover:scale-110 hover:bg-emerald-500 w-fit'
															target='_blank'
														>
															<IconBrandGithub
																className='inline'
																width={20}
																height={20}
															/>
														</Link>
														<span className='ml-1 font-semibold'>
															Last Commit: {formattedDateString}
														</span>
													</div>
											  ))
											: null}
										{project.github.length > 1
											? project.github.map((link, index) => (
													<div
														className='flex flex-row items-center my-1'
														key={index}
													>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 rounded-md shadow-md bg-emerald-700 text-beige hover:scale-110 hover:bg-emerald-500 w-fit'
															target='_blank'
														>
															<IconBrandGithub
																className='inline'
																width={20}
																height={20}
															/>
														</Link>
														<span className='ml-1 font-semibold'>
															Last Commit: {commitArray[index]}
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
									<details className='mb-2 transition-all duration-500 ease-in-out transform'>
										<summary className='text-lg font-semibold cursor-pointer text-emerald-700'>
											Screenshots
										</summary>
										<div className=''>
											{project.screenshots.large.map((item) => (
												<Image
													key={item.link}
													src={item.link}
													width={item.width}
													height={item.height}
													alt='screenshot'
													className='m-3 ml-0 border-2 border-black shadow-md '
													loading='lazy'
													placeholder='blur'
													blurDataURL={item.link}
												/>
											))}
										</div>
									</details>
								</div>
							</motion.div>
						)
					})}
				</div>
			</main>
		</>
	)
}
