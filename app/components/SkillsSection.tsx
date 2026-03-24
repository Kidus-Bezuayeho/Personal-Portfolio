'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

const skills = [
	'JavaScript',
	'Python',
	'React.js',
	'Node.js',
	'Express.js',
	'HTML',
	'CSS',
	'MongoDB',
	'MySQL',
	'PHP',
	'RESTful APIs',
	'Azure',
	'Git',
];

export default function SkillsSection() {
	return (
  <section id="skills" className="bg-background py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-6 sm:mb-8">
					<motion.h2
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2"
					>
						Skills &amp; technologies
					</motion.h2>
					<motion.p
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
					>
						The usual suspects I reach for on a daily basis — not a buzzword bingo card, just what I actually use.
					</motion.p>
				</div>
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
				>
					{skills.map((skill) => (
						<motion.div
							key={skill}
							variants={fadeUp}
							className="bg-card p-4 sm:p-6 rounded-lg shadow-sm dark:shadow-none border border-border text-center hover:shadow-md dark:hover:border-gray-600 transition-all text-sm sm:text-base text-gray-900 dark:text-gray-300"
						>
							{skill}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
