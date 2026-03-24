'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

interface Project {
	title: string;
	description: string;
	tech: string;
	image: string;
	link: string;
	buttonText?: string;
}

interface InProgressProject {
	title: string;
	description: string;
	tech: string;
	status: string;
	expectedCompletion: string;
	image: string;
	githubLink: string;
}

const projects: Project[] = [
	{
		title: 'State Smog 2',
		description:
			"Marketing site for a real smog-check shop in LA: responsive layout, embedded map, and straight-to-the-point service + contact info. Pure HTML/CSS — sometimes that's exactly enough.",
		tech: 'HTML, CSS',
		image: '/Smog.png',
		link: 'https://statesmogtwo.com/',
		buttonText: 'View Site',
	},
	{
		title: 'DanteDrop',
		description:
			'A small PHP file-sharing app I called DanteDrop: login, uploads, logout — nothing fancy, but it works end-to-end and was a good sandbox for auth and file handling.',
		tech: 'PHP',
		image: '/FileShare.png',
		link: 'https://github.com/Kidus-Bezuayeho/FileSharing',
	},
	{
		title: 'LifeQR',
		description:
			'LifeQR (repo: medicalQR) is a lightweight app for tracking patient info in a clinic-style workflow — built to be simpler than wrestling a giant EHR for quick demos.',
		tech: 'PHP',
		image: '/LifeQR.png',
		link: 'https://github.com/Kidus-Bezuayeho/medicalQR',
	},
	{
		title: 'Task Manager',
		description:
			'Exactly what it sounds like: a task list in the browser. My very first project — ugly in places, but it still makes me smile when I scroll GitHub.',
		tech: 'HTML',
		image: '/Task.png',
		link: 'https://github.com/Kidus-Bezuayeho/Task-Manager',
	},
	{
		title: 'School Attendance (QR + Pi)',
		description:
			'Generate QR codes, email them to students, then scan at the door with a Raspberry Pi and roll attendance into a spreadsheet — coursework meets hardware store energy.',
		tech: 'Python',
		image: '/School.png',
		link: 'https://github.com/Kidus-Bezuayeho/SchoolAttendanceSystem',
	},
];

const inProgressProjects: InProgressProject[] = [];

export default function ProjectsSection() {
	return (
		<section id="projects" className="bg-background py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center"
				>
					Stuff I&apos;ve shipped
				</motion.h2>

				{/* Completed Projects */}
				<div className="mb-12">
					<motion.h3
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
					>
						Builds I&apos;m happy to show
					</motion.h3>
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
					>
						{projects.map((project, idx) => (
							<motion.div
								key={idx}
								variants={fadeUp}
								className="bg-card rounded-lg shadow-md dark:shadow-none border border-border overflow-hidden hover:shadow-lg dark:hover:border-gray-600 transition-all"
							>
								<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
									<Image src={project.image} alt={project.title} fill className="object-cover" />
								</div>
								<div className="p-4 sm:p-6">
									<h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
									<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
									<span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded mb-4">
										{project.tech}
									</span>
									<div className="flex gap-2">
										<a
											href={project.link}
											className="text-primary font-medium text-sm sm:text-base hover:opacity-80"
											target="_blank"
											rel="noopener noreferrer"
										>
											{project.buttonText || 'View Project'} →
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* In Progress Projects */}
				<div>
					<motion.h3
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
					>
						On the back burner
					</motion.h3>
					{inProgressProjects.length > 0 ? (
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
						>
							{inProgressProjects.map((project, idx) => (
								<motion.div
									key={idx}
									variants={fadeUp}
									className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-indigo-100 dark:border-gray-700"
								>
									<div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
										<Image src={project.image} alt={project.title} fill className="object-cover" />
										<div className="absolute top-2 right-2">
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 backdrop-blur-sm">
												<svg className="w-2 h-2 mr-1 fill-current" viewBox="0 0 8 8">
													<circle cx="4" cy="4" r="3" />
												</svg>
												{project.status}
											</span>
										</div>
									</div>
									<div className="p-4 sm:p-6">
										<h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h4>
										<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tech.split(', ').map((tech: string, techIdx: number) => (
												<span key={techIdx} className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
													{tech}
												</span>
											))}
										</div>
										<div className="flex justify-between items-center">
											<div className="text-sm text-gray-500 dark:text-gray-500">Expected: {project.expectedCompletion}</div>
											<a
												href={project.githubLink}
												className="text-primary font-medium text-sm hover:opacity-80"
												target="_blank"
												rel="noopener noreferrer"
											>
												View Repository →
											</a>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					) : (
						<motion.div
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="text-center py-8"
						>
							<div className="bg-muted rounded-lg p-6 max-w-md mx-auto border border-border">
								<svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
									Classes are eating my side-project time right now. Check back — I&apos;m not done building.
								</p>
							</div>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
}
