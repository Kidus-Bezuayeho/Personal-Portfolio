import Image from 'next/image';
import Section from './Section';

const GITHUB_USER = 'Kidus-Bezuayeho';
const LEETCODE_USER = 'bkiduss';

type ThemedImage = {
	title: string;
	alt: string;
	light: string;
	dark: string;
	width: number;
	height: number;
};

const statCards: ThemedImage[] = [
	{
		title: 'GitHub overview',
		alt: "Kidus's GitHub stats",
		light: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&rank_icon=github&hide_border=true`,
		dark: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&rank_icon=github&hide_border=true&theme=dark&bg_color=0c0c0c`,
		width: 495,
		height: 195,
	},
	{
		title: 'Top languages',
		alt: "Kidus's top languages on GitHub",
		light: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true`,
		dark: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&hide_border=true&theme=dark&bg_color=0c0c0c`,
		width: 495,
		height: 195,
	},
	{
		title: 'LeetCode progress',
		alt: "Kidus's LeetCode stats",
		light: `https://leetcard.jacoblin.cool/${LEETCODE_USER}?theme=light&font=Karma&ext=heatmap&border=0`,
		dark: `https://leetcard.jacoblin.cool/${LEETCODE_USER}?theme=dark&font=Karma&ext=heatmap&border=0`,
		width: 495,
		height: 300,
	},
];

const cardClass = 'bg-card border border-border rounded-2xl p-4';
const cardTitleClass = 'text-sm font-medium text-muted-foreground mb-3';

export default function AboutSection() {
	return (
		<Section
			id="about"
			title="About"
			intro="I got my reps in through internships and school — shipping real features on deadlines, not just tutorial todos. Lately I'm spending more time on side projects and GitHub. Here's what that looks like day to day."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{statCards.map((card) => (
					<div key={card.title} className={cardClass}>
						<h3 className={cardTitleClass}>{card.title}</h3>
						<Image src={card.light} alt={card.alt} width={card.width} height={card.height} loading="lazy" className="w-full h-auto rounded-md dark:hidden" />
						<Image src={card.dark} alt={card.alt} width={card.width} height={card.height} loading="lazy" className="w-full h-auto rounded-md hidden dark:block" />
					</div>
				))}

				<div className={cardClass}>
					<h3 className={cardTitleClass}>My study playlist</h3>
					<iframe
						src="https://open.spotify.com/embed/playlist/1147eqceqovJf4CyBDRXTR"
						width="100%"
						height="352"
						allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						className="rounded-md border-0"
						title="Studyin playlist by Kidus B on Spotify"
					/>
				</div>
			</div>
		</Section>
	);
}
