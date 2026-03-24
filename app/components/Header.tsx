'use client';

import { useState, useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'] as const;

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [activeId, setActiveId] = useState<string>(SECTION_IDS[0]);

	const navItems = [
		{ label: 'About', id: 'about' },
		{ label: 'Skills', id: 'skills' },
		{ label: 'Experience', id: 'experience' },
		{ label: 'Projects', id: 'projects' },
		{ label: 'Contact', id: 'contact' },
	];

	useEffect(() => {
		setMounted(true);
		setIsDark(document.documentElement.classList.contains('dark'));
	}, []);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const intersecting = entries.filter((e) => e.isIntersecting);
				if (intersecting.length === 0) return;
				intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				setActiveId(intersecting[0].target.id);
			},
			{ rootMargin: '-20% 0px -55% 0px', threshold: 0 }
		);

		for (const id of SECTION_IDS) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);

	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle('dark', next);
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light');
		} catch (e) {}
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setIsMobileMenuOpen(false);
	};

	const navButtonClass = (id: string) => {
		const active = activeId === id;
		return active
			? 'text-primary font-semibold'
			: 'text-gray-700 dark:text-gray-300 hover:text-primary font-medium';
	};

	const ThemeToggle = () =>
		mounted ? (
			<button
				onClick={toggleTheme}
				className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
				aria-label="Toggle dark mode"
			>
				{isDark ? (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
					</svg>
				) : (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				)}
			</button>
		) : null;

	return (
		<>
			<header
				className={`sticky top-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-background/90 backdrop-blur-md shadow-md dark:shadow-gray-900'
						: 'bg-transparent'
				}`}
			>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0 -ml-4 min-w-0">
							<button
								type="button"
								onClick={() => scrollToSection('hero')}
								className="text-left text-sm sm:text-base font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors"
								aria-label="Back to top"
							>
								Back to the top
							</button>
						</div>

						<nav className="hidden md:flex items-center gap-6 ml-auto">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`${navButtonClass(item.id)} transition-colors`}
								>
									{item.label}
								</button>
							))}
							<ThemeToggle />
						</nav>

						<div className="md:hidden flex items-center gap-2">
							<ThemeToggle />
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
								aria-label="Toggle mobile menu"
							>
								{isMobileMenuOpen ? (
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								) : (
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
			</header>

			{isMobileMenuOpen && (
				<>
					<div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
					<div className="fixed right-0 top-0 h-full w-64 bg-background shadow-xl z-50 transform transition-transform">
						<div className="p-6">
							<div className="flex items-center justify-between mb-8">
								<h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
								<button
									onClick={() => setIsMobileMenuOpen(false)}
									className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<nav className="space-y-2">
								{navItems.map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className={`block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-primary/10 dark:hover:bg-gray-800 ${navButtonClass(item.id)}`}
									>
										{item.label}
									</button>
								))}
							</nav>
						</div>
					</div>
				</>
			)}
		</>
	);
}
