import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projects from '../data'

import { motion } from 'framer-motion'

import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react'

export default function Home() {
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
					transition={{ duration: 0.75 }}
					className='flex flex-col bg-blue-100 border-b border-black sm:shadow-lg sm:flex-row sm:border sm:m-4'
				>
					<img
						className='object-cover transition-all border-r border-black sm:w-44 saturate-150'
						src='/QS25_Plate1.png'
						alt='map'
					/>
					<div className='mx-4 my-4'>
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
					transition={{ duration: 0.75 }}
					className='flex flex-col max-w-4xl mt-12 sm:mx-auto'
				>
					<div className='flex flex-col p-2 border-black bg-gradient-to-r from-blue-200 via-violet-200 to-red-200 sm:border border-y sm:mx-4 last:shadow-md'>
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
					{projects.map((project) => (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							className='flex flex-row border-black bg-gradient-to-r from-blue-200 via-violet-200 to-red-200 sm:mx-4 last:shadow-md first:border-t'
							key={project.title}
						>
							<div
								className='w-[35px] sm:w-[50px] border-black border-b border-l-0 sm:border-l border-x sm:border-r-0'
								style={{ backgroundImage: `url(${project.sidebar})` }}
							></div>
							<div className='flex flex-col w-full px-2 pt-2 pl-2 border-b border-black sm:border-x'>
								<div>
									<h2 className='text-3xl font-bold text-blue-900 align-baseline'>
										{project.title}
										{project.live ? (
											<Link
												href={project.live}
												className='inline ml-2 w-36 hover:text-blue-600'
												target='_blank'
											>
												<IconExternalLink className='inline' />
											</Link>
										) : null}
										{project.github.length > 0
											? project.github.map((link) => (
													<Link
														key={link}
														href={link}
														className='inline p-1 ml-2 hover:text-blue-600'
														target='_blank'
													>
														<IconBrandGithub
															className='inline'
															width={20}
															height={20}
														/>
													</Link>
											  ))
											: null}
									</h2>
									<div className='text-md'>{project.description}</div>
								</div>
								<div className='flex flex-wrap p-2 pl-0'>
									{project.stack.map((item) => (
										<span
											key={item}
											className='px-1 mb-1 mr-1 text-white bg-blue-800 border border-blue-900'
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</main>
		</>
	)
}
