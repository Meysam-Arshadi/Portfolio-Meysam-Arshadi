import React from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const EducationCard = ({ education }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: '#eaeaec',
			color: '#292929',
			boxShadow:
				'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		}}
		contentArrowStyle={{
			borderRight: '7px solid  #232631',
		}}
		date={
			<div>
				<h3 className='text-dim text-[15px] font-bold font-beckman'>
					{education.date}
				</h3>
			</div>
		}
		iconStyle={{ background: education.iconBg }}
		icon={
			<div className='flex justify-center items-center w-full h-full'>
				<img
					src={education.icon}
					alt={education.institution}
					className='w-[60%] h-[60%] object-contain'
				/>
			</div>
		}
	>
		<div>
			<h3 className='text-jetLight text-[20px] font-bold font-beckman tracking-[2px]'>
				{education.title}
			</h3>
			<p
				className='text-taupe text-[18px] font-semibold font-overcameBold tracking-[1px]'
				style={{ margin: 0 }}
			>
				{education.institution}
			</p>
		</div>
		<div>
			<h3 className='text-taupe text-[12px] font-bold font-beckman tracking-[2px] mt-2'>
				{education.location}
			</h3>
		</div>
	</VerticalTimelineElement>
)

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
					My Educational Background
				</p>
				<h2
					className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}
					style={{ color: 'white' }}
				>
					Education.
				</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline className='vertical-timeline-custom-line'>
					{educations.map((education, index) => (
						<EducationCard key={index} education={education} />
					))}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default SectionWrapper(Education, 'education')
