import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-background text-foreground">
				<HeroSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}
