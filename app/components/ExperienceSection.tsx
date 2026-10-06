import Section, { Tag } from './Section';

type Experience = {
	role: string;
	company: string;
	location: string;
	period: string;
	achievements: string[];
	technologies: string[];
	note?: string;
};

const experiences: Experience[] = [
	{
		role: 'Software Engineer',
		company: 'JPMorgan Chase & Co.',
		location: 'Palo Alto, CA, USA',
		period: 'Jul 2026 – Present',
		achievements: [],
		technologies: [],
		note: "Just getting started here — come back soon to see what I've been building.",
	},
	{
		role: 'Fullstack Software Engineer Intern',
		company: 'MLS - Saint Louis City SC',
		location: 'St. Louis County, MO, USA',
		period: 'May – Aug 2025',
		achievements: [
			'Delivered and deployed a RESTful API server built in Node.js, Express.js, and MongoDB on Microsoft Azure, integrated with Microsoft Graph API to automatically manage employee permissions across internal apps, eliminating 90% of manual onboarding input.',
			'Built and deployed a responsive employee directory web app using React.js, HTML, CSS, and Azure (via GitHub Actions CI/CD), which automatically updates and visualizes all departments and enables the creation of distinct permission systems for separate internal apps.',
			'Implemented centralized logging and automated notifications in Node.js, ensuring 100% auditability of permission requests and approvals to support compliance and accountability.',
		],
		technologies: ['JavaScript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'Microsoft Azure', 'Microsoft Graph API', 'GitHub Actions', 'Git', 'RESTful APIs', 'HTML', 'CSS'],
	},
	{
		role: 'Software Engineering Intern',
		company: 'Kai',
		location: 'Remote',
		period: 'May – Aug 2024',
		achievements: [
			'Built and deployed a conversational AI model in Python with Google Gemini API, integrated with user email accounts to generate context-aware, multi-turn replies, enabling automated handling of hundreds of daily messages.',
			'Built a Retrieval-Augmented Generation (RAG) system in Python using Google Generative AI for embeddings, ChromaDB for vector storage, and LangChain for orchestration - reducing response time from 3 minutes to 1 minute and increasing user satisfaction by 30%.',
			'Engineered RESTful API endpoints using Node.js, backed by a Google MySQL database, to serve summary data on email activity - including sender info, location insights, common inquiries, and flagged messages the AI lacked context to answer - giving users visibility and control over their communication flow.',
		],
		technologies: ['Python', 'Google Gemini API', 'Node.js', 'MySQL', 'ChromaDB', 'LangChain', 'RESTful APIs', 'RAG'],
	},
	{
		role: 'Student Web Developer',
		company: 'Washington University in St. Louis',
		location: 'St. Louis County, MO, USA',
		period: 'Feb – Aug 2024',
		achievements: [
			'Developed and launched 2 faculty and event websites using HTML and CSS, delivering responsive, accessible designs that supported departmental academic and outreach needs.',
			'Accelerated project delivery by 30% by collaborating directly with professors and staff to gather requirements, iterate on designs, and refine site features.',
		],
		technologies: ['HTML', 'CSS', 'Responsive Design', 'Accessibility'],
	},
];

const METRIC_PATTERN = /(\d+% of manual onboarding input|\d+% auditability|from \d+ minutes to \d+ minute|by \d+%|hundreds of daily messages)/;

function withMetrics(text: string) {
	return text.split(METRIC_PATTERN).map((part, i) =>
		i % 2 === 1 ? (
			<strong key={i} className="font-semibold text-foreground">
				{part}
			</strong>
		) : (
			part
		)
	);
}

export default function ExperienceSection() {
	return (
		<Section
			id="experience"
			title="Experience"
			intro="Where I've gotten paid to ship — JPMorgan Chase, sports tech, an AI email startup, and campus sites."
		>
			<ol className="space-y-14">
				{experiences.map((exp) => (
					<li key={`${exp.company}-${exp.period}`} className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-10">
						<div className="text-sm text-muted-foreground md:pt-1">
							<p>{exp.period}</p>
							<p>{exp.location}</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
							<p className="mt-1 font-medium text-muted-foreground">{exp.company}</p>

							{exp.note && <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground">{exp.note}</p>}

							{exp.achievements.length > 0 && (
								<ul className="mt-4 space-y-3 max-w-prose list-disc pl-5 marker:text-border">
									{exp.achievements.map((achievement) => (
										<li key={achievement} className="leading-relaxed text-muted-foreground">
											{withMetrics(achievement)}
										</li>
									))}
								</ul>
							)}

							{exp.technologies.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-5">
									{exp.technologies.map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
							)}
						</div>
					</li>
				))}
			</ol>
		</Section>
	);
}
