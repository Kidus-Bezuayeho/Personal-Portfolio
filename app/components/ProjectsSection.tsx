import Image from 'next/image';
import Section, { Tag } from './Section';

interface Project {
	title: string;
	description: string;
	tech: string[];
	image: string;
	link: string;
	linkText: string;
}

interface InProgressProject {
	title: string;
	description: string;
	tech: string[];
	status: string;
	expectedCompletion: string;
	githubLink: string;
}

const projects: Project[] = [
	{
		title: 'State Smog 2',
		description:
			"Marketing site for a real smog-check shop in LA: responsive layout, embedded map, and straight-to-the-point service + contact info. Pure HTML/CSS — sometimes that's exactly enough.",
		tech: ['HTML', 'CSS'],
		image: '/Smog.png',
		link: 'https://statesmogtwo.com/',
		linkText: 'Visit live site',
	},
	{
		title: 'DanteDrop',
		description:
			'A small PHP file-sharing app I called DanteDrop: login, uploads, logout — nothing fancy, but it works end-to-end and was a good sandbox for auth and file handling.',
		tech: ['PHP'],
		image: '/FileShare.png',
		link: 'https://github.com/Kidus-Bezuayeho/FileSharing',
		linkText: 'View code',
	},
	{
		title: 'LifeQR',
		description:
			'LifeQR (repo: medicalQR) is a lightweight app for tracking patient info in a clinic-style workflow — built to be simpler than wrestling a giant EHR for quick demos.',
		tech: ['PHP'],
		image: '/LifeQR.png',
		link: 'https://github.com/Kidus-Bezuayeho/medicalQR',
		linkText: 'View code',
	},
	{
		title: 'Task Manager',
		description:
			'Exactly what it sounds like: a task list in the browser. My very first project — ugly in places, but it still makes me smile when I scroll GitHub.',
		tech: ['HTML'],
		image: '/Task.png',
		link: 'https://github.com/Kidus-Bezuayeho/Task-Manager',
		linkText: 'View code',
	},
	{
		title: 'School Attendance (QR + Pi)',
		description:
			'Generate QR codes, email them to students, then scan at the door with a Raspberry Pi and roll attendance into a spreadsheet — coursework meets hardware store energy.',
		tech: ['Python', 'Raspberry Pi'],
		image: '/School.png',
		link: 'https://github.com/Kidus-Bezuayeho/SchoolAttendanceSystem',
		linkText: 'View code',
	},
];

const inProgressProjects: InProgressProject[] = [];

export default function ProjectsSection() {
	return (
		<Section
			id="projects"
			title="Projects"
			intro="Things I've built, from a local business's marketing site to hardware-integrated Python scripts."
		>
			<div className="space-y-20 md:space-y-28">
				{projects.map((project, idx) => (
					<article
						key={project.title}
						className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-14 items-center`}
					>
						<div className="w-full md:w-1/2">
							<div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
								<Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
							</div>
						</div>

						<div className="w-full md:w-1/2">
							<h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
							<p className="mt-4 text-muted-foreground md:text-lg leading-relaxed max-w-prose">{project.description}</p>
							<div className="flex flex-wrap gap-2 mt-5">
								{project.tech.map((tech) => (
									<Tag key={tech}>{tech}</Tag>
								))}
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block mt-6 pb-1 border-b-2 border-accent text-foreground hover:text-accent transition-colors font-medium"
							>
								{project.linkText}
								<span className="sr-only"> for {project.title} (opens in a new tab)</span>
							</a>
						</div>
					</article>
				))}
			</div>

			{inProgressProjects.length > 0 && (
				<div className="mt-28">
					<h3 className="text-2xl font-bold tracking-tight text-foreground mb-8">In progress</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{inProgressProjects.map((project) => (
							<article key={project.title} className="bg-card border border-border rounded-2xl p-6 md:p-8">
								<div className="flex justify-between items-start gap-4 mb-4">
									<h4 className="text-xl font-bold text-foreground">{project.title}</h4>
									<Tag>{project.status}</Tag>
								</div>
								<p className="text-muted-foreground mb-6 line-clamp-3">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
								<div className="flex justify-between items-center text-sm">
									<span className="text-muted-foreground">Expected {project.expectedCompletion}</span>
									<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
										View code
									</a>
								</div>
							</article>
						))}
					</div>
				</div>
			)}
		</Section>
	);
}
