'use client';

import { useState, useEffect, useRef } from 'react';
import { Container } from './Section';

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'contact'] as const;

const navItems = [
	{ label: 'About', id: 'about' },
	{ label: 'Experience', id: 'experience' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Contact', id: 'contact' },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [activeId, setActiveId] = useState<string>(SECTION_IDS[0]);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const menuPanelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setMounted(true);
		setIsDark(document.documentElement.classList.contains('dark'));
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if (atBottom) {
				setActiveId(SECTION_IDS[SECTION_IDS.length - 1]);
				return;
			}

			const line = window.innerHeight * 0.3;
			let current: string = SECTION_IDS[0];
			for (const id of SECTION_IDS) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= line) current = id;
			}
			setActiveId(current);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (!isMobileMenuOpen) return;

		const panel = menuPanelRef.current;
		const menuButton = menuButtonRef.current;
		const focusable = () => Array.from(panel?.querySelectorAll<HTMLElement>('a, button') ?? []);
		focusable()[0]?.focus();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsMobileMenuOpen(false);
				return;
			}
			if (e.key !== 'Tab') return;
			const items = focusable();
			if (items.length === 0) return;
			const first = items[0];
			const last = items[items.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			menuButton?.focus({ preventScroll: true });
		};
	}, [isMobileMenuOpen]);

	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle('dark', next);
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light');
		} catch {}
	};

	const closeMenu = () => setIsMobileMenuOpen(false);

	const navLinkClass = (id: string) =>
		activeId === id ? 'text-accent font-semibold' : 'text-muted-foreground hover:text-foreground font-medium';

	const themeToggle = mounted ? (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDark ? (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
				</svg>
			) : (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
				</svg>
			)}
		</button>
	) : null;

	return (
		<>
			<header
				className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
					isScrolled ? 'bg-background border-border' : 'bg-transparent border-transparent'
				}`}
			>
				<Container>
					<div className="flex items-center justify-between h-16">
						<a href="#hero" className="font-semibold text-foreground hover:text-accent transition-colors">
							Kidus Bezuayeho
						</a>

						<nav aria-label="Main" className="hidden md:flex items-center gap-6">
							{navItems.map((item) => (
								<a
									key={item.id}
									href={`#${item.id}`}
									aria-current={activeId === item.id ? 'true' : undefined}
									className={`${navLinkClass(item.id)} transition-colors`}
								>
									{item.label}
								</a>
							))}
							{themeToggle}
						</nav>

						<div className="md:hidden flex items-center gap-2">
							{themeToggle}
							<button
								ref={menuButtonRef}
								type="button"
								onClick={() => setIsMobileMenuOpen((open) => !open)}
								className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Open menu"
								aria-expanded={isMobileMenuOpen}
								aria-controls="mobile-menu"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</Container>
			</header>

			{isMobileMenuOpen && (
				<>
					<div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} aria-hidden="true" />
					<div
						id="mobile-menu"
						ref={menuPanelRef}
						role="dialog"
						aria-modal="true"
						aria-label="Menu"
						className="fixed right-0 top-0 h-full w-64 bg-background border-l border-border z-50"
					>
						<div className="p-6">
							<div className="flex items-center justify-end mb-6">
								<button
									type="button"
									onClick={closeMenu}
									className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
									aria-label="Close menu"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<nav aria-label="Mobile" className="space-y-1">
								{navItems.map((item) => (
									<a
										key={item.id}
										href={`#${item.id}`}
										onClick={closeMenu}
										aria-current={activeId === item.id ? 'true' : undefined}
										className={`block px-4 py-3 rounded-md hover:bg-muted transition-colors ${navLinkClass(item.id)}`}
									>
										{item.label}
									</a>
								))}
							</nav>
						</div>
					</div>
				</>
			)}
		</>
	);
}
