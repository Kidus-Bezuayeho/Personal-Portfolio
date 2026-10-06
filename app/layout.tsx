import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MotionProvider from './components/MotionProvider';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://www.kidusbezuayeho.com'),
	title: 'Kidus Bezuayeho - Full Stack Developer',
	description:
		"I'm Kidus — I build web apps, APIs, and AI-flavored tools. Most of my work has been internships and school projects; now I'm shipping more stuff on GitHub and learning in public.",
	keywords: [
		'Kidus Bezuayeho',
		'Full Stack Developer',
		'Software Engineer',
		'Los Angeles',
		'React',
		'Node.js',
		'Python',
		'Azure',
	],
	authors: [{ name: 'Kidus Bezuayeho' }],
	creator: 'Kidus Bezuayeho',
	openGraph: {
		title: 'Kidus Bezuayeho — Full stack dev',
		description:
			"Portfolio and projects: full-stack work, backends on Azure, and experiments with AI. Based in LA; say hi if something here resonates.",
		url: '/',
		siteName: 'Kidus Bezuayeho — Personal Portfolio',
		images: [
			{
				url: '/portrait.jpg',
				alt: 'Kidus Bezuayeho - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
					}}
				/>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
				<MotionProvider>{children}</MotionProvider>
			</body>
		</html>
	);
}
