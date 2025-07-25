import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-black min-h-screen">
			<Head>
				<title>Eric Yang - Developer</title>
			</Head>

			<div className="container mx-auto px-6 py-12 max-w-2xl md:max-w-4xl">
				{/* Profile Section */}
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
					<img
						src="/me.png"
						alt="Eric Yang"
						className="w-24 h-24 md:w-32 md:h-32 rounded-full"
					/>
					<div className="text-center md:text-left">
						<h1 className="text-2xl md:text-3xl lg:text-4xl">Eric Yang</h1>
						<p className="text-xl md:text-2xl text-gray-400 mt-2">Frontend & AI Engineer</p>
						<p className="text-sm md:text-base text-gray-500 mt-1 flex items-center grid grid-cols-3">
                            <span className="mr-2 col-span-1">
                                Wechat
                            </span>
                            <span className="col-span-2">
                                yzz666252626
                            </span>
						</p>
                        <p className="text-sm md:text-base text-gray-500 mt-1 flex items-center grid grid-cols-3">
							<span className="mr-2 col-span-1">
                                Email
							</span>
                            <span className="col-span-2">
                                zhizhaoyang@163.com
                            </span>
						</p>
					</div>
				</div>

				<div className="mt-12 md:mt-16">
					<h2 className="eric-title">About</h2>
					<p className="mt-4 md:mt-8">
						I'm Eric, a developer from China. I enjoy building dynamic, creative products
						from start to finish. Focused on developing intuitive experiences that
						constantly grow and improve based on user metrics. Recently focused on
						research and development of AI agents.
					</p>
				</div>

				{/* Work Experience Section */}
				<section className="mt-12 md:mt-16">
					<h2 className="eric-title pb-2 md:pb-10">Work Experience</h2>
					<div className="md:grid md:grid-cols-4 md:justify-between md:items-start gap-12 mb-14">
						<div className="md:col-span-1 text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1 timeline">
							2025 – Present
						</div>
						<div className="md:col-span-3">
							<h3 className="text-base md:text-lg text-white">Freelance</h3>
							<p className="mt-2 md:mt-3 text-sm md:text-base">
								Worked with a range of large and small agencies, start-ups and
								individuals to build products.
							</p>
							<p className="text-sm md:text-base mt-2 text-gray-300">
								ReactJS • TypeScript • NextJS • Tailwind • VueJS • Langgraph • Cursor
							</p>
						</div>
					</div>

					<div className="space-y-4 md:space-y-8 mt-4 md:mt-6">
						<div className="md:grid md:grid-cols-4 md:justify-between md:items-start gap-12 mb-14">
							<div className="md:col-span-1 text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1 timeline">
								2022 – 2024
							</div>
							<div className="md:col-span-3">
								<h3 className="text-base md:text-lg text-white">
									Senior Frontend Engineer - Nagarro
								</h3>
								<p className="mt-2 md:mt-3 text-sm md:text-base">
									Built and maintained multiple projects for corporate clients.
								</p>

								<p className="text-sm md:text-base text-white italic mt-4 md:mt-6 mb-2 md:mb-4">
									Client Projects:
								</p>

								<div>
									<h4 className="text-sm md:text-base text-white mb-2 underline">
										AI Agent & RAG System for a Financial Institution(ZCX)
									</h4>
									<p className="mt-2 md:mt-3 text-sm md:text-base mb-2">
										Developed AI agent workflows including RAG features for a
										financial institution to help on batch generating research
										reports. Worked on implementing the actual application
										coding work.
									</p>
									<p className="text-sm md:text-base text-gray-300">
										Python • LangChain • LangGraph • LLM • FastAPI
									</p>
								</div>

								<div>
									<h4 className="text-sm md:text-base text-white mb-2 mt-6 underline">
										RM Work Bench - Cloud Migration
									</h4>
									<p className="mt-2 md:mt-3 text-sm md:text-base mb-2">
										An internal system from a middle-east country bank. Upgraded
										the existing Cloud Migration system from legacy C# version
										to SPFx(Microsoft React-like framework) version. Worked on
										communication between clients and development team,
										guarantee the project is on track and meet the requirements.
									</p>
									<p className="text-sm md:text-base text-gray-300">
										SPFx(ReactJS) • TypeScript • Redux • Automate • Sharepoint
									</p>
								</div>

								<div>
									<h4 className="text-sm md:text-base text-white mb-2 mt-6 underline">
										Axis Ref-App
									</h4>
									<p className="mt-2 md:mt-3 text-sm md:text-base mb-2">
										An Australian company that provides a platform for
										entertainment & sport live streaming and videos industry.
										Maintained and gradually refactored the existing components
										codebase. Collaborated closely with product and design team
										for new creative features.
									</p>
									<p className="text-sm md:text-base mt-2 text-gray-300">
										ReactJS • TypeScript • Redux • Sass • NodeJS • Express
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="md:grid md:grid-cols-4 md:justify-between md:items-start gap-12 mb-14">
						<div className="md:col-span-1 text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1 timeline">
							2021 – 2022
						</div>
						<div className="md:col-span-3">
							<h3 className="text-base md:text-lg text-white">
								Frontend Engineer Lead - Matin Cloud
							</h3>
							<p className="mt-2 md:mt-3 text-sm md:text-base">
								Led a team of 4 to 5 Frontend engineers to develop our cloud storage
								platform(Saas). Responsible for core features and architecture, task
								scheduling, and team management.
							</p>
							<p className="text-sm md:text-base mt-2 text-gray-300">
								ReactJS • TypeScript • Ant Design Pro • Redux-Toolkit
							</p>
						</div>
					</div>

					<div className="md:grid md:grid-cols-4 md:justify-between md:items-start gap-12 mb-14">
						<div className="md:col-span-1 text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1 timeline">
							2018 – 2021
						</div>
						<div className="md:col-span-3">
							<h3 className="text-base md:text-lg text-white">
								Frontend Engineer - Wiseasy
							</h3>
							<p className="mt-2 md:mt-3 text-sm md:text-base">
								One of the main frontend team members. Responsible for development
								of payment platform’s front-end features, including transaction
								inquiry, merchant creation, acquiring agreement management,
								settlement channel, etc.
							</p>
							<p className="text-sm md:text-base mt-2 text-gray-300">
								ReactJS • TypeScript • Ant Design Pro • Less • VueJS • Taro
							</p>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section className="mt-14 md:mt-20">
					<h2 className="eric-title">Skills</h2>
					<div className="mt-4 md:mt-8 space-y-6">
						<div>
							<h3 className="text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1">
								Frontend
							</h3>
							<div className="flex flex-wrap gap-2">
								<span className="skill-tag">ReactJS</span>
                                <span className="skill-tag">JavaScript</span>
								<span className="skill-tag">TypeScript</span>
								<span className="skill-tag">NextJS</span>
								<span className="skill-tag">VueJS</span>
								<span className="skill-tag">Tailwind CSS</span>
								<span className="skill-tag">Sass</span>
								<span className="skill-tag">Redux</span>
								<span className="skill-tag">Ant Design</span>
							</div>
						</div>

						<div>
							<h3 className="text-sm md:text-base mb-2 md:mb-4 mt-4 md:mt-1">
								Backend & AI
							</h3>
							<div className="flex flex-wrap gap-2">
								<span className="skill-tag">Python</span>
								<span className="skill-tag">NodeJS</span>
								<span className="skill-tag">FastAPI</span>
								<span className="skill-tag">Express</span>
								<span className="skill-tag">LangChain</span>
								<span className="skill-tag">LangGraph</span>

							</div>
						</div>
					</div>
								</section>

								{/* Language Skills Section */}
				<section className="mt-14 md:mt-20">
					<h2 className="eric-title">Languages</h2>
					<div className="mt-4 md:mt-8 flex flex-col md:flex-row gap-3 md:gap-24">
						<div className="text-sm md:text-base">
							<span className="text-white">Chinese</span>
							<span className="text-gray-400 ml-2">• Native</span>
						</div>
						<div className="text-sm md:text-base">
							<span className="text-white">Cantonese</span>
							<span className="text-gray-400 ml-2">• Native</span>
						</div>
						<div className="text-sm md:text-base">
							<span className="text-white">English</span>
							<span className="text-gray-400 ml-2">• Fluent</span>
						</div>
					</div>
				</section>

                <footer className="mt-14 md:mt-20 min-h-10"></footer>

			</div>
		</div>
	);
}
