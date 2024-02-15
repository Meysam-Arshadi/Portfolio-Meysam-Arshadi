import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
			className='xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-jetLight rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
			>
				<img src={icon} alt={title} className='w-16 h-16 object-contain' />
				<h3 className='text-taupe text-[18px] font-bold text-center'>{title}</h3>
			</div>
		</motion.div>
	)
}

const About = () => {
	return (
		<div className='-mt-[6rem]'>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]'
			>
				Swapping my reporter's hat for a coder's cap, I dove headfirst into the
				world of web development, all because I'm always super excited by the thrill
				of a new challenge and the promise of moving up in my career.
				<br />
				Picture this: nine months of hardcore full-stack development, followed by a
				three-month adventure in Product Management, and just for kicks, a two-month
				rollercoaster into Python and Data Analysis, all at the Code Your Future
				playground. <br />
				Oh, did I mention I'm also moonlighting as a senior media producer and
				post-production wizard? Yep, it's a double life that sharpens my tech skills
				while teaching me how to navigate the wild landscape of the professional
				world. Managing production and balancing pixels by day and code by night –
				that's my secret to thriving in the sweet spot where media and coding run
				into each other.
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	)
}

export default SectionWrapper(About, 'about')
