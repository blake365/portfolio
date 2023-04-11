import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import projects from '../data'

import { IconExternalLink } from '@tabler/icons-react'

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
			<main className='max-w-4xl font-sans sm:mt-12 sm:p-6 sm:mx-auto '>
				<div className='flex flex-col border-b border-black sm:shadow-md sm:flex-row sm:border sm:m-4 bg-blue-50'>
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
				</div>

				<div className='flex flex-col max-w-3xl mx-auto mt-6 shadow-md bg-blue-50'>
					{projects.map((project) => (
						<div className='flex flex-row border-black' key={project.title}>
							<div
								className='w-[30px] sm:w-[50px] border border-black'
								style={{ backgroundImage: `url(${project.sidebar})` }}
							></div>
							<div className='flex flex-col w-full px-2 pl-2 border border-black'>
								<h2 className='text-2xl font-bold text-blue-700'>
									{project.title}
								</h2>
								<div className='text-md'>{project.description}</div>
								{project.live ? (
									<Link
										href={project.live}
										className='flex flex-row justify-center font-semibold text-center align-middle bg-blue-300 border border-black w-36 hover:bg-blue-200'
										target='_blank'
									>
										<IconExternalLink className='inline mx-1' />
										<div className='mx-1'>Live Link</div>
									</Link>
								) : null}
								{/* {project.github ? <Link href={project.github} /> : null} */}
								<div className='flex flex-wrap p-2 pl-0'>
									{project.stack.map((item) => (
										<span
											key={item}
											className='px-1 mb-1 mr-1 text-white bg-blue-700 border border-blue-900'
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	)
}
