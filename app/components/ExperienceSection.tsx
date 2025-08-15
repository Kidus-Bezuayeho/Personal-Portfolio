const experiences = [
    {
        role: 'Fullstack Software Engineer Intern',
        company: 'MLS - Saint Louis City Sc',
        location: 'St. Louis County, MO, USA',
        period: '05/2025 – 08/2025',
        highlights: 'Engineered the server-side architecture of an internal employee management system using Node.js and Express.js, building RESTful APIs to handle GET/PUT/POST operations via Axios, with data stored in MongoDB to support real-time directory updates and dynamic permission control.',
        achievements: [
            'Built a responsive web app using Vite, React.js, HTML, and CSS, integrating custom RESTful APIs for permission management and employee directory visualization. Deployed to Microsoft Azure with a GitHub Actions CI/CD workflow.',
            'Integrated the internal permission management API into the company\'s virtual currency system, enabling employees to request customer compensation for event-related issues. Automatically triggered management email notifications for approvals and implemented logging to track who requested and approved each transaction for full audibility.'
        ],
        technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Vite', 'Azure', 'GitHub Actions', 'RESTful APIs', 'Axios']
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Kai',
        location: 'Remote',
        period: '05/2024 – 08/2024',
        highlights: 'Developed a Python-based conversational AI model using Google Gemini, integrated with user email accounts to automatically generate context-aware email replies, enabling intelligent, multi-turn communication workflows.',
        achievements: [
            'Built a Retrieval-Augmented Generation (RAG) system in Python using Google Generative AI for embeddings, ChromaDB for vector storage, and LangChain for orchestration - reducing response time from 3 minutes to 1 minute and increasing user satisfaction by 30%.',
            'Engineered RESTful API endpoints using Node.js, backed by a Google MySQL database, to serve summary data on email activity - including sender info, location insights, common inquiries, and flagged messages the AI lacked context to answer - giving users visibility and control over their communication flow.'
        ],
        technologies: ['Python', 'Google Gemini', 'Node.js', 'MySQL', 'ChromaDB', 'LangChain', 'RESTful APIs', 'AI/ML']
    },
    {
        role: 'Student Web Developer',
        company: 'Washington University in St. Louis',
        location: 'St. Louis County, MO, USA',
        period: '02/2024 – 08/2024',
        highlights: 'Designed and developed personal and event websites for professors in the university\'s Statistics Department using HTML and CSS, tailoring layouts and features to individual faculty needs while ensuring accessibility, consistency, and responsive design across devices.',
        achievements: [
            'Collaborated directly with faculty and staff to gather requirements and feedback, iteratively refining site content and features to ensure digital tools effectively supported academic, administrative, and outreach goals.'
        ],
        technologies: ['HTML', 'CSS', 'Responsive Design', 'Accessibility', 'Client Collaboration']
    }
];

export default function ExperienceSection() {
    return (
        <section className="bg-white py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">Professional Experience</h2>
                        <div className="h-px w-full bg-gray-200 mt-2" />
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative">
                                <div className="relative pl-4 border-l-2 border-gray-200">
                                    <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <h3 className="text-lg sm:text-xl font-medium text-gray-900">{exp.role}</h3>
                                            <span className="text-sm text-gray-500">{exp.period}</span>
                                        </div>

                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-gray-600">{exp.company}</p>
                                            <p className="text-xs text-gray-500">{exp.location}</p>
                                        </div>

                                        <p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>

                                        {exp.achievements.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-700">Key Achievements:</h4>
                                                <ul className="space-y-1">
                                                    {exp.achievements.map((achievement, achievementIdx) => (
                                                        <li key={achievementIdx} className="text-sm text-gray-600 flex items-start">
                                                            <span className="text-blue-500 mr-2 mt-1">•</span>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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