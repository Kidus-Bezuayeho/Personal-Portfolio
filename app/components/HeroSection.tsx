'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from './Section';

export default function HeroSection() {
	return (
		<section id="hero" className="scroll-mt-16 min-h-[85vh] flex items-center py-16">
			<Container className="w-full flex flex-col md:flex-row items-center gap-12">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="flex-1 text-left"
				>
					<h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight">
						Turning messy problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">working software.</span>
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
						I&apos;m Kidus Bezuayeho, a Full Stack Developer based in Los Angeles. I build APIs, interactive dashboards, and AI pipelines that simplify people&apos;s days.
					</p>

					<div className="flex flex-wrap gap-4">
						<a href="#projects" className="px-8 py-3.5 bg-foreground text-background font-semibold rounded-md hover:opacity-90 transition-opacity">
							View projects
						</a>
						<a href="#contact" className="px-8 py-3.5 border-2 border-border text-foreground font-semibold rounded-md hover:bg-muted transition-colors">
							Get in touch
						</a>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
					className="flex-1 max-w-sm w-full"
				>
					<div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card">
						<Image src="/portrait.jpg" alt="Kidus Bezuayeho" fill priority sizes="(min-width: 768px) 384px, 100vw" className="object-cover" />
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
