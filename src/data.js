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
			'A remake of a classic multiplayer browser game translated from PHP to full stack javascript. While the game mechanic formulas are taken from the original PHP code, many systems were written from scratch or heavily modified. The game revolves around players building empires, managing resources, interacting with one another, and competing to achieve the highest net worth among all participants. /n The front end is built with Vite for the single page application experience. User and empire data is managed with Redux. The back end is a Typescript Node.js Express server with a Postgres database. TypeORM is used to communicate with the database. The game is currently live and playable as I add the last few features and make game play tweaks. The project is split into two repos, one for the front end and one for the back end.',
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
				{ link: '/promi-home.webp', height: 3668, width: 1210 },
				{ link: '/promi-explore.webp', height: 1832, width: 3068 },
				{ link: '/promi-dark.webp', height: 3596, width: 6136 },
			],
		},
	},
	{
		repo: ['usgs_quakes'],
		title: 'USGS Quakes',
		description:
			'This site is built with Next.js and Tailwind to display data from the USGS Earthquakes API. The site showcases a featured earthquake, displays the ten most recent earthquakes above a certain magnitude, and offers a search filter for exploring the entire earthquake catalog. SWR is used to check for new recent earthquakes without reloading the site. Each quake has a details page that shows either a shakemap or the location as well as recent nearby quakes. The event descriptions include human impact and a tectonic summary based on available data, providing users with comprehensive earthquake insights.',
		type: 'Front End',
		stack: ['Next.js', 'Server Side Rendering', 'Tailwind'],
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
				{ link: '/usgs-quakes-home.webp', width: 1721, height: 3652 },
				{ link: '/usgs-quakes-page.webp', width: 1721, height: 1927 },
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
				{ link: '/atlparks-home.webp', width: 1084, height: 1556 },
				{ link: '/atlparks-search.webp', width: 2168, height: 2062 },
				{ link: '/atlparks-page.webp', width: 1084, height: 2923 },
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
				{ link: '/albumsurvivor-home.webp', width: 2596, height: 3164 },
				{ link: '/albumsurvivor-admin.webp', width: 1298, height: 1914 },
			],
		},
	},
]

export default projects
