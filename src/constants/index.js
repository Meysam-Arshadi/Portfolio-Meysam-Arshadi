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
	HotelBooking,
	work,
	educationIcon,
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
		title: 'Python & Data Analysis ',
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
		title: 'Full-Stack Software Engineer',
		company_name: 'Code Your Future',
		location: 'London - UK',
		icon: work,
		iconBg: '#333333',
		date: 'Aug 2022 - Present',
	},
	{
		title: 'Senior Producer & Post-production Supervisor ',
		company_name: 'Off Centre Productions',
		location: 'London - UK',
		icon: work,
		iconBg: '#333333',
		date: 'Nov 2015 - Present',
	},
	{
		title: 'Machine Learning in Python and Data Analysis ',
		company_name: 'Code Your Future',
		location: 'London - UK',
		icon: work,
		iconBg: '#333333',
		date: 'Sep - Oct 2023',
	},
	{
		title: 'IT Product Management',
		company_name: 'Code Your Future',
		location: 'London UK',
		icon: work,
		iconBg: '#333333',
		date: 'JUn - Aug 2023',
	},
	{
		title: 'TV Production Manager',
		company_name: 'Femescope TV',
		location: 'London - UK',
		icon: work,
		iconBg: '#333333',
		date: '2011 - 2015',
	},
	{
		title: 'Journalist & Media Producer',
		company_name: 'Diverse Companies',
		location: 'Diverse Locations',
		icon: work,
		iconBg: '#333333',
		date: '2007 - 2010',
	},
]

const projects = [
	{
		id: 'project-1',
		name: 'Data Analysis',
		description:
			'A data analysis solo project on UNICEF Activity File - Albania, ensuring compliance with IATI standards, utilizing Python for testing and validation in Jupyter Notebook within VSCode.',
		image: UNISEFAnalysis,
		repo:
			'https://github.com/Meysam-Arshadi/UNICEF-activity-file-Albania-analysis?tab=readme-ov-file',
		demo:
			'https://github.com/Meysam-Arshadi/UNICEF-activity-file-Albania-analysis/blob/main/feedback.md',
	},
	{
		id: 'project-2',
		name: 'Task Management',
		description:
			'MVP for a group project task management mobile app built with React, enabling users to manage tasks, track time, and view activity summaries. [UNDER CONSTRUCTION]',
		image: CYFTASMATE,
		repo: 'https://github.com/Farnooshmo/time-tracker',
		demo: 'https://time-tracker-team.vercel.app/',
	},
	{
		id: 'project-3',
		name: 'TV Show Hub',
		description:
			'MVP for a solo project TV show hub website, using Vanila JavaScript, CSS, and HTML, to showcase TV show episode details sourced from public APIs.',
		image: TVShowHub,
		repo: 'https://github.com/Meysam-Arshadi/tv-show-dom-project',
		demo: 'https://cyf-meysam-arshadi-tv.netlify.app/',
	},
	{
		id: 'project-4',
		name: 'M.Recycle',
		description: ` MVP for a group project mobile phone recycling website, using Vanila JavaScript, CSS, and HTML, designed in Figma, deployed on Netlify.`,
		image: MRecycle,
		repo: 'https://github.com/shaqdeff/Movie-Metro',
		demo: 'https://movie-metro.netlify.app/',
	},
	{
		id: 'project-5',
		name: 'Hotel Booking',
		description: `MVP for a solo project hotel booking application, using React, CSS, and HTML.`,
		image: HotelBooking,
		repo: 'https://github.com/Meysam-Arshadi/cyf-hotel-react/tree/master',
		demo: 'https://cyf-meysam-arshadi-hotel.netlify.app/',
	},
]

const educations = [
	{
		title: 'MA. International Journalism',
		institution: 'London Metropolitan University',
		location: 'London - UK',
		icon: educationIcon,
		iconBg: '#333333',
		date: '2012',
	},
	{
		title: 'MSc. Electronic Media',
		institution: 'Bangalore University',
		location: 'Bangalore - India',
		icon: educationIcon,
		iconBg: '#333333',
		date: '2007',
	},
	{
		title: 'BSc. Business Economics',
		institution: 'University of Tehran',
		location: 'Tehran - Iran',
		icon: educationIcon,
		iconBg: '#333333',
		date: '2001',
	},
]

export { services, technologies, experiences, projects, educations }
