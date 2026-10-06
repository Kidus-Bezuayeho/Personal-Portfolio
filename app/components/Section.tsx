type SectionProps = {
	id: string;
	title: string;
	intro?: React.ReactNode;
	children: React.ReactNode;
};

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function Section({ id, title, intro, children }: SectionProps) {
	return (
		<section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-border py-20 sm:py-28">
			<Container>
				<header className="mb-12 max-w-2xl">
					<h2 id={`${id}-title`} className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
						{title}
					</h2>
					{intro && <p className="mt-3 text-base sm:text-lg leading-relaxed text-muted-foreground">{intro}</p>}
				</header>
				{children}
			</Container>
		</section>
	);
}

export function Tag({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-block rounded-md border border-border bg-muted px-2 py-1 text-xs text-muted-foreground">
			{children}
		</span>
	);
}
