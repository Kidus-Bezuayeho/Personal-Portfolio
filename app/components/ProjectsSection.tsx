'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
		buttonText: 'Live Site',
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
		<section id="projects" className="py-24 sm:py-32 relative">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					className="mb-16 md:mb-24"
				>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
						Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Works</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl">
						A collection of things I&apos;ve built, ranging from local business marketing sites to hardware-integrated python scripts.
					</p>
				</motion.div>

				{/* Completed Projects */}
				<div className="space-y-20 md:space-y-32">
					{projects.map((project, idx) => {
						const isEven = idx % 2 === 0;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
							>
								{/* Image Side */}
								<div className="w-full md:w-1/2">
									<div className="relative aspect-video glass-card rounded-2xl overflow-hidden group border border-border/50 hover:border-accent/50 transition-colors duration-500">
										<div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
										{project.image ? (
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
											/>
										) : (
											<div className="w-full h-full bg-muted flex items-center justify-center">
												<span className="text-muted-foreground">Image via {project.title}</span>
											</div>
										)}
									</div>
								</div>

								{/* Content Side */}
								<div className="w-full md:w-1/2 flex flex-col justify-center">
									<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 w-fit mb-6">
										{project.tech}
									</div>
									<h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
									<p className="text-muted-foreground md:text-lg mb-8 leading-relaxed">
										{project.description}
									</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 pb-1 border-b-2 border-accent text-foreground hover:text-accent transition-colors font-medium w-fit group"
									>
										{project.buttonText || 'View Details'}
										<svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
									</a>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* In Progress Projects */}
				{inProgressProjects.length > 0 && (
					<div className="mt-32">
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-2xl font-bold mb-8"
						>
							Currently Brewing
						</motion.h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{inProgressProjects.map((project, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className="glass-card p-6 md:p-8 rounded-2xl border border-border relative overflow-hidden group"
								>
									<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
									<div className="flex justify-between items-start mb-4">
										<h4 className="text-xl font-bold">{project.title}</h4>
										<span className="text-xs px-2.5 py-1 rounded-full bg-foreground text-background font-medium">
											{project.status}
										</span>
									</div>
									<p className="text-muted-foreground mb-6 line-clamp-3">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tech.split(', ').map((tech, techIdx) => (
											<span key={techIdx} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground border border-border/50">
												{tech}
											</span>
										))}
									</div>
									<div className="flex justify-between items-center text-sm">
										<span className="text-muted-foreground">Est: {project.expectedCompletion}</span>
										<a href={project.githubLink} className="text-accent hover:underline font-medium">Repo →</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
