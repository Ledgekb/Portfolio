import Image from "next/image";
import { skillsData, personalInfo } from "../data/portfolioData";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6 bg-slate-950/40 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">
            About & Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Building reliable, scalable software from end to end
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            I hold a <span className="text-purple-300 font-medium">{personalInfo.education.qualification}</span> from{" "}
            <span className="text-purple-300 font-medium">{personalInfo.education.institution}</span>.
            My experience spans enterprise backend services, database schema design, and modern client-side architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all"
            >
              <h3 className="text-lg font-semibold text-purple-300 mb-4 pb-2 border-b border-white/10">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Illustration Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-purple-950/40 border border-purple-500/20 p-8 text-center">
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-6">
            I am passionate about collaborating in{" "}
            <span className="text-purple-400 font-semibold">cross-functional engineering teams</span> that value
            operational excellence, system reliability, and intuitive user experiences.
          </p>
          <Image
            src="/assets/illustration.png"
            alt="Skills & Systems Architecture"
            width={700}
            height={500}
            className="object-cover mx-auto opacity-85"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
