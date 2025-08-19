import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-12 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    {/* Intro Paragraph */}
                    <div className="text-center mb-8">
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Most of my coding work has been through professional and academic projects, but I&apos;ve recently started building more personal projects on GitHub.
                            Please come back for updates on my progress!
                        </p>
                    </div>

                    {/* Widgets Grid - 1 column on mobile, 2 columns on md+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* GitHub Overview Stats */}
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">GitHub Overview</h3>
                            <Image
                                src="https://github-readme-stats.vercel.app/api?username=Kidus-Bezuayeho&show_icons=true&rank_icon=github"
                                alt="Kidus&apos;s GitHub Stats"
                                width={495}
                                height={195}
                                loading="lazy"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* GitHub Top Languages */}
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Languages</h3>
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kidus-Bezuayeho&layout=compact"
                                alt="Kidus&apos;s Top Languages"
                                width={495}
                                height={195}
                                loading="lazy"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* LeetCode Stats */}
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">LeetCode Progress</h3>
                            <Image
                                src="https://leetcard.jacoblin.cool/bkiduss?theme=dark&font=Karma&ext=heatmap"
                                alt="Kidus&apos;s LeetCode Stats"
                                width={495}
                                height={300}
                                priority
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Spotify Playlist */}
                        <div className="bg-white rounded-2xl shadow-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Currently Playing</h3>
                            <iframe
                                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className="rounded-lg"
                                aria-label="Rap Caviar playlist"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
} 