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
			'LifeQR is a simple web app that helps doctors keep track of their patients\' medical info. It’s designed to make managing health data easier and more efficient for both doctors and patients.',
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

export default function ProjectsSection() {
	return (
		<section className="bg-gray-50 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
					Featured Projects
				</h2>
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
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
									{project.title}
								</h3>
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
		</section>
	);
}
