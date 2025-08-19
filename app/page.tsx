'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-white pt-12">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}