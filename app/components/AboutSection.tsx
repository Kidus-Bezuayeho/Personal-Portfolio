'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function AboutSection() {
	return (
		<section id="about" className="bg-muted py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-6">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="text-center mb-8"
					>
						<p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
							I got my reps in through internships and school — shipping real features on deadlines, not just tutorial todos. Lately I&apos;m spending more time on side projects and GitHub; the stats and playlists below are just the stuff I actually touch day to day.
						</p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						<motion.div variants={fadeUp} className="bg-card rounded-2xl shadow-lg p-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">GitHub Overview</h3>
							<Image
								src="https://github-readme-stats.vercel.app/api?username=Kidus-Bezuayeho&show_icons=true&rank_icon=github"
								alt="Kidus&apos;s GitHub Stats"
								width={495}
								height={195}
								loading="lazy"
								className="w-full h-auto rounded-lg"
							/>
						</motion.div>

						<motion.div variants={fadeUp} className="bg-card rounded-2xl shadow-lg p-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Languages</h3>
							<Image
								src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kidus-Bezuayeho&layout=compact"
								alt="Kidus&apos;s Top Languages"
								width={495}
								height={195}
								loading="lazy"
								className="w-full h-auto rounded-lg"
							/>
						</motion.div>

						<motion.div variants={fadeUp} className="bg-card rounded-2xl shadow-lg p-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">LeetCode Progress</h3>
							<Image
								src="https://leetcard.jacoblin.cool/bkiduss?theme=dark&font=Karma&ext=heatmap"
								alt="Kidus&apos;s LeetCode Stats"
								width={495}
								height={300}
								priority
								className="w-full h-auto rounded-lg"
							/>
						</motion.div>

						<motion.div variants={fadeUp} className="bg-card rounded-2xl shadow-lg p-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Currently Playing</h3>
							<iframe
								src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
								width="100%"
								height="352"
								frameBorder="0"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
								className="rounded-lg"
								aria-label="Rap Caviar playlist"
							></iframe>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
