'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, staggerContainer } from '../lib/animations';

const experiences = [
	{
		role: 'Fullstack Software Engineer Intern',
		company: 'MLS - Saint Louis City SC',
		location: 'St. Louis County, MO, USA',
		period: '05/2025 – 08/2025',
		achievements: [
			'Delivered and deployed a RESTful API server built in Node.js, Express.js, and MongoDB on Microsoft Azure, integrated with Microsoft Graph API to automatically manage employee permissions across internal apps, eliminating 90% of manual onboarding input.',
			'Built and deployed a responsive employee directory web app using React.js, HTML, CSS, and Azure (via GitHub Actions CI/CD), which automatically updates and visualizes all departments and enables the creation of distinct permission systems for separate internal apps.',
			'Implemented centralized logging and automated notifications in Node.js, ensuring 100% audibility of permission requests and approvals to support compliance and accountability.',
		],
		technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Microsoft Azure', 'Microsoft Graph API', 'GitHub Actions', 'RESTful APIs', 'HTML', 'CSS'],
	},
	{
		role: 'Software Engineering Intern',
		company: 'Kai',
		location: 'Remote',
		period: '05/2024 – 08/2024',
		achievements: [
			'Built and deployed a conversational AI model in Python with Google Gemini API, integrated with user email accounts to generate context-aware, multi-turn replies, enabling automated handling of hundreds of daily messages.',
			'Built a Retrieval-Augmented Generation (RAG) system in Python using Google Generative AI for embeddings, ChromaDB for vector storage, and LangChain for orchestration - reducing response time from 3 minutes to 1 minute and increasing user satisfaction by 30%.',
			'Engineered RESTful API endpoints using Node.js, backed by a Google MySQL database, to serve summary data on email activity - including sender info, location insights, common inquiries, and flagged messages the AI lacked context to answer - giving users visibility and control over their communication flow.',
		],
		technologies: ['Python', 'Google Gemini API', 'Node.js', 'Google MySQL', 'ChromaDB', 'LangChain', 'RESTful APIs', 'AI/ML', 'RAG'],
	},
	{
		role: 'Student Web Developer',
		company: 'Washington University in St. Louis',
		location: 'St. Louis County, MO, USA',
		period: '02/2024 – 08/2024',
		achievements: [
			'Developed and launched 2 faculty and event websites using HTML and CSS, delivering responsive, accessible designs that supported departmental academic and outreach needs.',
			'Accelerated project delivery by 30% by collaborating directly with professors and staff to gather requirements, iterate on designs, and refine site features.',
		],
		technologies: ['HTML', 'CSS', 'Responsive Design', 'Accessibility', 'Client Collaboration'],
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="bg-muted py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-4">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-center space-y-2"
					>
						<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Where I&apos;ve gotten paid to ship — sports tech, an AI email startup, and campus sites. Numbers stay; I just tell the story less stiffly up here.
						</p>
						<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Work experience</h2>
						<div className="h-px w-full bg-border mt-2" />
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-8"
					>
						{experiences.map((exp, idx) => (
							<motion.div key={idx} variants={slideInLeft} className="relative">
								<div className="relative pl-4 border-l-2 border-border">
									<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-500" />

									<div className="space-y-3">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
											<h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white">{exp.role}</h3>
											<span className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</span>
										</div>

										<div className="space-y-1">
											<p className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.company}</p>
											<p className="text-xs text-gray-500 dark:text-gray-500">{exp.location}</p>
										</div>

										<div className="space-y-2">
											<h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">What I shipped</h4>
											<ul className="space-y-1">
												{exp.achievements.map((achievement, achievementIdx) => (
													<li key={achievementIdx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
														<span className="text-primary mr-2 mt-1">•</span>
														{achievement}
													</li>
												))}
											</ul>
										</div>

										<div className="flex flex-wrap gap-2 pt-2">
											{exp.technologies.map((tech) => (
												<span
													key={tech}
													className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
