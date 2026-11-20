import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../data/portfolioData";

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      {/* Anchor support for both #projects and legacy #lab */}
      <span id="lab" className="block -mt-20 pt-20" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Portfolio Showcase
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            A selection of production systems, full-stack applications, and interactive web tools.
          </p>
        </div>

        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-24 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-sm lg:text-base font-semibold tracking-wide uppercase mb-1">
                    Featured Project #{project.id}
                  </p>
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-300/90 text-sm lg:text-base font-medium mb-6">
                    {project.subtitle}
                  </p>

                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl ${
                        isEven ? "lg:ml-[-15%]" : "lg:w-[calc(100%+15%)]"
                      }`}
                    >
                      <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project live button */}
                  {project.link && (
                    <div>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-md shadow-purple-900/40 group"
                        aria-label={`Visit ${project.title}`}
                      >
                        <span>Launch Live Application</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2.5 lg:p-3 border border-purple-500/30 group-hover:border-purple-400 transition-all shadow-2xl group-hover:shadow-purple-950/60">
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0d071a]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs font-semibold text-white bg-purple-600/90 px-3 py-1 rounded-md">
                            Click to open live site ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
