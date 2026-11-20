import Image from "next/image";
import Link from "next/link";
import { experienceData } from "../data/portfolioData";

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-base">
            Hands-on software development across institutional enterprise systems, modern web apps, and IT infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 backdrop-blur-sm rounded-2xl p-6 border-t-2 border-purple-600/70 border border-white/5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center p-2 flex-shrink-0">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-3">
                  {exp.company}
                </p>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                      <span className="text-purple-400 text-sm leading-none mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.link && (
                <div className="pt-2 border-t border-white/10">
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>EXPLORE PROJECT / SOURCE</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
