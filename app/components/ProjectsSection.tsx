import Image from 'next/image';

const projects = [
	{
		title: 'FileSharing',
		description:
			'DanteDrop is a basic yet functional file-sharing web application designed with simplicity in mind. It includes a login system, file upload functionality, and a logout page, providing a foundational file-sharing experience.',
		tech: 'PHP',
		image: '/FileShare.png',
		link: 'https://github.com/Kidus-Bezuayeho/FileSharing',
	},
	{
		title: 'medicalQR',
		description:
			'LifeQR is a simple web app that helps doctors keep track of their patients\' medical info. It\'s designed to make managing health data easier and more efficient for both doctors and patients.',
		tech: 'PHP',
		image: '/LifeQR.png',
		link: 'https://github.com/Kidus-Bezuayeho/medicalQR',
	},
	{
		title: 'Task-Manager',
		description: 'A website that can help you keep track of tasks (like my very first project lmao)',
		tech: 'HTML',
		image: '/Task.png',
		link: 'https://github.com/Kidus-Bezuayeho/Task-Manager',
	},
	{
		title: 'SchoolAttendanceSystem',
		description:
			'School Attendance system that creates unique QR codes and emails them to students. Uses Raspberry Pi to scan QR codes and create a spreadsheet of everyone who came to class.',
		tech: 'Python',
		image: '/School.png',
		link: 'https://github.com/Kidus-Bezuayeho/SchoolAttendanceSystem',
	},
];

const inProgressProjects = [
	{
		title: 'State Smog 2 Website',
		description: 'Modern HTML and CSS website for State Smog 2, a California-licensed vehicle emission test specialist in Los Angeles. Features responsive design, embedded maps, and clear presentation of business services and contact information.',
		tech: 'HTML, CSS',
		status: 'In Development',
		expectedCompletion: 'September 10, 2025',
		image: '/Smog.png',
		githubLink: 'https://github.com/Kidus-Bezuayeho/State_Smog_2'
	},
];

export default function ProjectsSection() {
	return (
		<section className="bg-white py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Projects
				</h2>

				{/* Completed Projects */}
				<div className="mb-12">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Projects</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						{projects.map((project, idx) => (
							<div
								key={idx}
								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="aspect-video bg-gray-100 relative">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4 sm:p-6">
									<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
										{project.title}
									</h4>
									<p className="text-sm sm:text-base text-gray-600 mb-2">
										{project.description}
									</p>
									<span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-4">
										{project.tech}
									</span>
									<div className="flex gap-2">
										<a
											href={project.link}
											className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
											target="_blank"
											rel="noopener noreferrer"
										>
											View Project →
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* In Progress Projects */}
				<div>
					<h3 className="text-lg font-semibold text-gray-900 mb-4">In Progress</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						{inProgressProjects.map((project, idx) => (
							<div
								key={idx}
								className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-blue-100"
							>
								<div className="aspect-video bg-gray-100 relative">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
									<div className="absolute top-2 right-2">
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 backdrop-blur-sm">
											<svg className="w-2 h-2 mr-1 fill-current" viewBox="0 0 8 8">
												<circle cx="4" cy="4" r="3" />
											</svg>
											{project.status}
										</span>
									</div>
								</div>
								<div className="p-4 sm:p-6">
									<h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
										{project.title}
									</h4>
									<p className="text-sm sm:text-base text-gray-600 mb-4">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.split(', ').map((tech, techIdx) => (
											<span
												key={techIdx}
												className="inline-block bg-white text-gray-700 text-xs px-2 py-1 rounded"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex justify-between items-center">
										<div className="text-sm text-gray-500">
											Expected: {project.expectedCompletion}
										</div>
										<a
											href={project.githubLink}
											className="text-blue-600 hover:text-blue-800 font-medium text-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											View Repository →
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
