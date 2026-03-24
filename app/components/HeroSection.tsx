'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-[0.05]" />
			<div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
			<div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
			<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

			<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex-1 text-left"
				>
					<div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-accent bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
						Available for work
					</div>
					<h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight">
						Turning messy problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">working software.</span>
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground font-light max-w-xl mb-10 text-gray-600 dark:text-gray-400">
						I&apos;m Kidus Bezuayeho, a Full Stack Developer based in Los Angeles. I build APIs, interactive dashboards, and AI pipelines that simplify people&apos;s days.
					</p>
					
					<div className="flex flex-wrap gap-4">
						<a href="#projects" className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
							View Projects
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
						</a>
						<a href="#contact" className="px-8 py-3.5 border-2 border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-background transition-all">
							Get in touch
						</a>
					</div>
				</motion.div>

				{/* Visual/Image Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="flex-1 max-w-md w-full"
				>
					<div className="relative aspect-square glass-card rounded-3xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
						<div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
							<Image
								src="/portrait.jpg"
								alt="Kidus Bezuayeho"
								fill
								className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
							/>
							{/* Overlay gradient to blend image nicely */}
							<div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay" />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
