const projects = [
	{
		title: 'USGS Quakes',
		description:
			'This site is built with Next.js and Tailwind to display data from the USGS Earthquakes API. The site shows a featured earthquake, the ten most recent earthquakes over a certain magnitude, and has a search filter to search the entire catalog of earthquake records. Each quake has a details page that shows either a shakemap or the location on a map as well as recent nearby quakes. The description of the event on each page includes human impact and a tectonic summary depending on what data is available.',
		type: 'Front End',
		stack: ['Next.js', 'SSR', 'Tailwind'],
		live: 'http://usgs-quakes.netlify.app',
		github: ['https://github.com/blake365/usgs_quakes'],
		image: 'link to image',
		sidebar: 'dotgrid.svg',
	},
	{
		title: 'Atlanta Parks',
		description:
			'A site built with Next.js, Supabase, and Mantine UI components. The site uses static site generation and loads data from the Supabase database at build time. There is an admin page feature that allows adding, editing and deleting parks. The site has a search page that allows filtering from many different criteria, full text search of the park descriptions, and a location search to find parks near the user. The data has been compiled by me to create an useable resource for people in Atlanta.',
		type: 'Serverless',
		stack: ['Next.js', 'SSG', 'Supabase', 'Postgres', 'Mantine UI'],
		live: 'http://atlparks.vercel.app',
		github: ['https://github.com/blake365/atlparks'],
		image: 'link to image',
		sidebar: 'diags2.svg',
	},
	{
		title: 'Breed Suggester',
		description:
			'A quick toy site using GPT-3.5. The site suggests dog breeds based on the traits selected by the user. As a bonus there is a link to the AKC page for the breed. Future features may include an image of the dog breed next to the description. ',
		type: 'Front End',
		stack: ['Next.js', 'GPT-3', 'Material UI'],
		live: 'http://breed-suggest.vercel.app',
		github: ['https://github.com/blake365/breed-suggest'],
		image: 'link to image',
		sidebar: 'dotgrid.svg',
	},
	{
		title: 'Album Survivor',
		description:
			'An interactive website where users are presented with a series of albums and their tracks. Users vote each day for their least favorite track. The track with the highest number of votes is eliminated until the best song is left standing. Registered users can see their vote history but non-registered users can vote as well. Admins are able to add, delete, and edit albums and tracks. Each day an archive of the votes is saved. Steps are taken to try and prevent users from casting multiple votes each day.',
		type: 'Full Stack',
		stack: [
			'React',
			'Class Components',
			'Material UI',
			'Redux',
			'Firebase',
			'Node',
			'Express',
		],
		live: 'http://album-survivor.web.app',
		github: ['https://github.com/blake365/albumSurvivor'],
		image: 'link to image',
		sidebar: 'bigstripe.svg',
	},
	{
		title: 'Typescript Promisance',
		description:
			'A port of a classic multiplayer browser game from PHP to full stack typescript. The game involves building up an empire, managing resources, interacting with other players, and vying to have the highest networth of all the players. The front end is built with create-react-app for the single page application experience. User and empire data is managed with redux. The back end is a typescript node express server with a postgres database. TypeORM is used to communicate with the database. At this time many of the single player features are implemented but there are many multiplayer features that still need to be added.',
		type: 'Full Stack',
		stack: [
			'React',
			'Typescript',
			'Mantine UI',
			'Redux Toolkit',
			'Postgres',
			'TypeORM',
			'Node',
			'Express',
		],
		live: null,
		github: [
			'https://github.com/blake365/promisance_front',
			'https://github.com/blake365/typescript_promisance',
		],
		image: 'link to image',
		sidebar: 'bigstripe.svg',
	},
]

export default projects
