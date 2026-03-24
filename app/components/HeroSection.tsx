'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function HeroSection() {
	return (
		<section id="hero" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				animate="visible"
				className="text-center"
			>
				<motion.div variants={fadeUp} className="mb-6 sm:mb-8">
					<Image
						src="/portrait.jpg"
						alt="Kidus Bezuayeho"
						width={120}
						height={120}
						className="rounded-full mx-auto border-4 border-border shadow-lg"
					/>
				</motion.div>
				<motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
					Kidus Bezuayeho
				</motion.h1>
				<motion.p variants={fadeUp} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
					Full stack developer · Los Angeles, CA
				</motion.p>
				<motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I like turning messy problems into working software — APIs, dashboards, and the occasional AI pipeline when it actually helps. If it ships and someone&apos;s day gets easier, I&apos;m into it.
				</motion.p>
			</motion.div>
		</section>
	);
}
