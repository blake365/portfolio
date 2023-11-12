import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import type { InferGetStaticPropsType } from 'next'

import { motion } from 'framer-motion'

import {
	IconExternalLink,
	IconBrandGithub,
	IconBrandLinkedin,
	IconMail,
} from '@tabler/icons-react'

import albumAdmin from '../../public/albumsurvivor-admin.webp'
import albumHome from '../../public/albumsurvivor-home.webp'
import atlparksHome from '../../public/atlparks-home.webp'
import atlparksPage from '../../public/atlparks-page.webp'
import atlparksSearch from '../../public/atlparks-search.webp'
import promiDark from '../../public/promi-dark.webp'
import promiExplore from '../../public/promi-explore.webp'
import promiHome from '../../public/promi-home.webp'
import usgsQuakesHome from '../../public/usgs-quakes-home.webp'
import usgsQuakesPage from '../../public/usgs-quakes-page.webp'
import usgsQuakesDark from '../../public/usgs-quakes-dark.webp'

import { Octokit } from '@octokit/core'

const projects = [
	// {
	// 	repo: ['breed-suggest'],
	// 	title: 'Breed Suggester',
	// 	description:
	// 		'A quick toy site using GPT-3.5. The site suggests dog breeds based on the traits selected by the user. As a bonus there is a link to the AKC page for the breed. Future features may include an image of the dog breed next to the description. ',
	// 	type: 'Front End',
	// 	stack: ['Next.js', 'GPT-3', 'Material UI'],
	// 	live: 'http://breed-suggest.vercel.app',
	// 	github: ['https://github.com/blake365/breed-suggest'],
	// 	image: 'link to image',
	// 	sidebar: 'dots.svg',
	// 	firstCommit: '01/14/2023',
	// 	status: 'Paused',
	// 	statusColor: 'purple',
	// },

	{
		repo: ['promisance_front', 'typescript_promisance'],
		title: 'NeoPromisance',
		description:
			'A remake of a classic multiplayer turn based game translated from PHP to full stack javascript. While the game mechanic formulas are taken from the original PHP code, many systems were written from scratch or heavily modified. The game revolves around players building empires, managing resources, interacting with one another, and competing to achieve the highest net worth among all participants. /n The front end is built with React and Vite for the single page application experience. User and empire data is managed with Redux Toolkit. The back end is a Typescript Node.js Express server with a Postgres database. TypeORM is used to communicate with the database. The game is currently live and playable as the last few features and gameplay tweaks are worked on. The project is split into two repos, one for the front end and one for the back end.',
		type: 'Full Stack',
		stack: [
			'React',
			'Vite',
			'Typescript',
			'Mantine UI',
			'Redux Toolkit',
			'Postgres',
			'TypeORM',
			'Node',
			'Express',
		],
		live: 'https://www.neopromisance.com',
		github: [
			'https://github.com/blake365/promisance_front',
			'https://github.com/blake365/typescript_promisance',
		],
		image: 'link to image',
		sidebar: 'bigstripe.svg',
		firstCommit: '01/19/2022',
		status: 'Paused',
		statusColor: 'purple',
		screenshots: {
			small: [''],
			large: [
				{
					link: promiHome,
					height: 3668,
					width: 1210,
				},
				{
					link: promiExplore,
					height: 1832,
					width: 3068,
				},
				{
					link: promiDark,
					height: 3596,
					width: 6136,
				},
			],
		},
	},
	{
		repo: ['usgs_quakes'],
		title: 'USGS Quakes',
		description:
			'This site is built with Next.js and Tailwind CSS to display data from the USGS Earthquakes API. The site showcases a featured earthquake, displays the ten most recent earthquakes above a certain magnitude, and offers a search filter for exploring the entire earthquake catalog. SWR is used to check for new recent earthquakes without reloading the site. Each quake has a details page that shows either a shakemap or the location as well as recent nearby quakes. The event descriptions include human impact and a tectonic summary based on available data, providing users with comprehensive earthquake insights.',
		type: 'Front End',
		stack: ['Next.js', 'Server Side Rendering', 'Tailwind CSS'],
		live: 'http://usgs-quakes.netlify.app',
		github: ['https://github.com/blake365/usgs_quakes'],
		image: 'link to image',
		sidebar: 'dots.svg',
		firstCommit: '12/27/2021',
		status: 'Maintenance',
		statusColor: 'green',
		screenshots: {
			small: [''],
			large: [
				{
					link: usgsQuakesHome,
					width: 1721,
					height: 3652,
				},
				{
					link: usgsQuakesPage,
					width: 1721,
					height: 1927,
				},
				{
					link: usgsQuakesDark,
					width: 1140,
					height: 4145,
				},
			],
		},
	},
	{
		repo: ['atlparks'],
		title: 'Atlanta Parks',
		description:
			'A site built with Next.js, Supabase, and Mantine UI components. The site utilizes static site generation, loading data from the Supabase database during the build process. It includes an admin page feature enabling park management, including adding, editing, and deleting parks. The site has a search page that allows filtering from many different criteria, full text search of the park descriptions, and a location search to find parks near the user. I compiled the data to create a valuable resource for Atlanta residents, enhancing their access to park information. Users can also submit information about parks to add or correct any details.',
		type: 'Serverless',
		stack: [
			'Next.js',
			'Static Site Generation',
			'Supabase',
			'Postgres',
			'Mantine UI',
		],
		live: 'http://atlparks.vercel.app',
		github: ['https://github.com/blake365/atlparks'],
		image: 'link to image',
		sidebar: 'stripe2.svg',
		firstCommit: '12/24/2022',
		status: 'Final Touches',
		statusColor: 'pink',
		screenshots: {
			small: [''],
			large: [
				{
					link: atlparksHome,
					width: 1084,
					height: 1556,
				},
				{
					link: atlparksSearch,
					width: 2168,
					height: 2062,
				},
				{
					link: atlparksPage,
					width: 1084,
					height: 2923,
				},
			],
		},
	},
	{
		repo: ['albumSurvivor'],
		title: 'Album Survivor',
		description:
			'My first large original project (and it shows). On this site, visitors are presented with a series of albums and their tracks. Users vote each day for their least favorite track and the track with the highest number of votes is eliminated until the best song survives. Registered and non-registered users can participate, with registered users having access to their voting history. Steps are taken to try and prevent users from casting multiple votes each day and a daily vote archive is saved. Admins have the ability to manage albums and tracks by adding, deleting, and editing content. ',
		type: 'Full Stack',
		stack: [
			'React',
			'Class Components',
			'Material UI',
			'Redux',
			'Firebase',
			'Node',
			'Express',
			'Cron Jobs',
		],
		// live: 'http://album-survivor.web.app',
		github: ['https://github.com/blake365/albumSurvivor'],
		image: 'link to image',
		sidebar: 'bigstripe.svg',
		firstCommit: '11/01/2020',
		status: 'Complete',
		statusColor: 'green',
		screenshots: {
			small: [''],
			large: [
				{
					link: albumHome,
					width: 2596,
					height: 3164,
				},
				{
					link: albumAdmin,
					width: 1298,
					height: 1914,
				},
			],
		},
	},
]

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
			<main className='max-w-5xl font-sans mb-14 sm:mt-8 sm:p-6 sm:mx-auto '>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='flex flex-col border-b-2 border-black shadow-md bg-beige sm:flex-row sm:border-2'
				>
					<Image
						className='object-cover border-t-2 border-b-2 border-black shadow-md sm:border-r-2 sm:border-b-0 sm:shadow-transparent sm:w-1/4 saturate-150 h-80 sm:h-auto sm:border-t-0'
						src='/QS25_Plate1png.png'
						width={750}
						height={899}
						alt='map'
						priority={true}
					/>
					<div className='py-5 mx-6 my-auto sm:ml-8'>
						<h1 className='pb-3 text-5xl font-bold'>Blake Morgan</h1>
						<h2 className='py-1 text-2xl font-semibold'>
							Professional Geologist / Hobby Web Developer
						</h2>
						<h3 className='text-lg sm:w-4/5'>
							Exploring the southeast through{' '}
							<span className='font-semibold text-yellow-900'>
								geotechnical engineering
							</span>{' '}
							by day and coding side projects by night.
						</h3>
						<div className='flex flex-row mt-3 space-x-8'>
							{/* github, linkedin and email links */}
							<Link
								href='https://github.com/blake365'
								className='flex items-center p-2 transition-all rounded-md shadow-lg hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit drop-shadow-lg'
								target='_blank'
								aria-label='github'
							>
								<IconBrandGithub width={28} height={28} />
							</Link>
							<Link
								href='https://www.linkedin.com/in/blakeamorgan/'
								className='flex items-center p-2 transition-all rounded-md shadow-lg hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit drop-shadow-lg'
								target='_blank'
								aria-label='linkedin'
							>
								<IconBrandLinkedin width={28} height={28} />
							</Link>
							<Link
								href='mailto:blake365morgan@me.com'
								className='flex items-center p-2 transition-all rounded-md shadow-lg hover:scale-110 bg-emerald-700 text-beige hover:bg-emerald-500 w-fit drop-shadow-lg'
								target='_blank'
								aria-label='email me'
							>
								<IconMail width={28} height={28} />
							</Link>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className='flex flex-col mt-6 shadow-lg'
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
										className='backdrop-blur w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-lg drop-shadow-lg mb-1'
										style={{ backgroundImage: 'url(/dots.svg)' }}
									></div>
									<div>Front End</div>
								</div>
								<div className='flex flex-col'>
									<div
										className=' backdrop-blur w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-lg drop-shadow-lg mb-1'
										style={{ backgroundImage: 'url(/stripe2.svg)' }}
									></div>
									<div>Serverless</div>
								</div>
								<div className='flex flex-col'>
									<div
										className='backdrop-blur w-[40px] h-[40px] border-black border mx-auto bg-beige shadow-lg drop-shadow-lg mb-1'
										style={{ backgroundImage: 'url(/bigstripe.svg)' }}
									></div>
									<div>Full Stack</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<div className='flex flex-col mt-6 shadow-lg'>
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
								transition={{ duration: 1.5 }}
								className='flex flex-row border-black shadow-lg bg-beige first:border-t-2'
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

											{project.live ? (
												<Link
													href={project.live}
													className='inline ml-2 w-36 hover:text-emerald-500 text-emerald-700'
													target='_blank'
													aria-label='external website link'
												>
													<IconExternalLink
														className='inline mb-1 transition-all hover:scale-110 drop-shadow-lg'
														width={25}
														height={25}
													/>
												</Link>
											) : null}
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
									<div className='mt-1 sm:space-x-5 sm:flex'>
										{project.github.length === 1
											? project.github.map((link, index) => (
													<div
														className='flex flex-row items-center my-1'
														key={index}
													>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 transition-all rounded-md shadow-md bg-emerald-700 text-beige hover:scale-110 hover:bg-emerald-500 w-fit drop-shadow-md'
															target='_blank'
															aria-label='github link'
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
														className='flex flex-row items-center my-1 space-y-2 sm:space-y-0'
														key={index}
													>
														<Link
															key={link}
															href={link}
															className='flex items-center p-1 transition-all rounded-md shadow-md bg-emerald-700 text-beige hover:scale-110 hover:bg-emerald-500 w-fit drop-shadow-md'
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
									<div className='flex flex-wrap p-2 pl-0 mt-1'>
										{project.stack.map((item) => (
											<span
												key={item}
												className='px-1.5 mb-1.5 mr-1 transition-all border-[1.5px] border-yellow-950 hover:-translate-y-1 text-beige bg-yellow-700'
											>
												{item}
											</span>
										))}
									</div>
									<details className='mb-2.5 transition-all'>
										<summary className='text-lg font-semibold transition-all cursor-pointer text-emerald-700 hover:text-emerald-500 hover:font-bold w-fit'>
											Screenshots
										</summary>
										<div className=''>
											{project.screenshots.large.map((item, index) => (
												<Image
													key={index}
													src={item.link}
													width={item.width}
													height={item.height}
													alt='screenshot'
													className='m-3 ml-0 border-2 border-black shadow-md bg-emerald-700'
													loading='lazy'
													placeholder='blur'
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
