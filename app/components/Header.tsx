'use client';

import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Navigation items
    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    // Scroll detection effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false); // Close mobile menu after click
    };

    return (
        <>
            {/* Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0 -ml-4"> {/* Added negative margin */}
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                            >
                                Kidus
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8 ml-auto"> {/* Added ml-auto */}
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                // Close icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Menu */}
            {isMobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Slide-in panel */}
                    <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="space-y-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
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
