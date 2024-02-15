import {
	fullstackdeveloper,
	dataanalysis,
	productmanagement,
	ux,
	mediaproduction,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	express,
	tailwind,
	nodejs,
	git,
	figma,
	adobedesign,
	postgresql,
	python,
	anaconda,
	CYFTASMATE,
	UNISEFAnalysis,
	TVShowHub,
	MRecycle,
	coverhunt,
	dcc,
	kelhel,
	microverse,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Full-Stack Developer',
		icon: fullstackdeveloper,
	},
	{
		title: 'Machine Learning in Python & Data Analysis ',
		icon: dataanalysis,
	},
	{
		title: 'Product Management',
		icon: productmanagement,
	},
	{
		title: 'UI/UX Design',
		icon: ux,
	},
	{
		title: 'Media Production & Management',
		icon: mediaproduction,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Express',
		icon: express,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Python',
		icon: python,
	},
	{
		name: 'Anaconda',
		icon: anaconda,
	},
	{
		name: 'postgresql',
		icon: postgresql,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'Adobe Design',
		icon: adobedesign,
	},
]

const experiences = [
	{
		title: 'Front-End Developer',
		company_name: 'Cover Hunt',
		icon: coverhunt,
		iconBg: '#333333',
		date: 'Aug 2021 - Feb 2022',
	},
	{
		title: 'Mentor (Volunteer)',
		company_name: 'Microverse',
		icon: microverse,
		iconBg: '#333333',
		date: 'Mar 2022 - May 2022',
	},
	{
		title: 'Junior Software Engineer',
		company_name: 'Kelhel',
		icon: kelhel,
		iconBg: '#333333',
		date: 'May 2022 - Oct 2022',
	},
	{
		title: 'Full Stack Developer',
		company_name: 'Diversity Cyber Council',
		icon: dcc,
		iconBg: '#333333',
		date: 'Sep 2022 - Present',
	},
]

const projects = [
	{
		id: 'project-1',
		name: 'Task Management',
		description:
			'A group project task management mobile app built with React, enabling users to manage tasks, track time, and view activity summaries. [UNDER CONSTRUCTION]',
		image: CYFTASMATE,
		repo: 'https://github.com/Farnooshmo/time-tracker',
		demo: 'https://time-tracker-team.vercel.app/',
	},
	{
		id: 'project-2',
		name: 'Data Analysis',
		description:
			'A data analysis on UNICEF Activity File - Albania, ensuring compliance with IATI standards, utilizing Python for testing and validation in Jupyter Notebook within VSCode, as a solo project.',
		image: UNISEFAnalysis,
		repo:
			'https://github.com/Meysam-Arshadi/UNICEF-activity-file-Albania-analysis?tab=readme-ov-file',
		demo:
			'https://github.com/Meysam-Arshadi/UNICEF-activity-file-Albania-analysis/blob/main/feedback.md',
	},
	{
		id: 'project-3',
		name: 'TV Show Hub',
		description:
			'A solo project web app utilizing HTML, CSS, and Vanilla JavaScript to showcase TV show episode details sourced from public APIs.',
		image: TVShowHub,
		repo: 'https://github.com/Meysam-Arshadi/tv-show-dom-project',
		demo: 'https://cyf-meysam-arshadi-tv.netlify.app/',
	},
	{
		id: 'project-4',
		name: 'MRecycle',
		description: `A group project developing a mobile phone recycling website with HTML, CSS, and Vanilla JavaScript.`,
		image: MRecycle,
		repo: 'https://github.com/shaqdeff/Movie-Metro',
		demo: 'https://movie-metro.netlify.app/',
	},
]

export { services, technologies, experiences, projects }
