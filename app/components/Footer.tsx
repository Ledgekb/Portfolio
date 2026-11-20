import Link from "next/link";
import { personalInfo } from "../data/portfolioData";

export default function Footer(): React.JSX.Element {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/10 bg-slate-950/60">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Together
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            I am currently open to Full Stack Developer, Software Engineer, and System Analyst roles.
            Whether you have a vacancy, a project in mind, or want to discuss software engineering,
            feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-900/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <p className="text-white/60 text-sm mt-4">
            📍 {personalInfo.location}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-600/20 border border-purple-500/30 hover:border-purple-400 transition-all text-white hover:text-purple-300"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          <Link
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-600/20 border border-purple-500/30 hover:border-purple-400 transition-all text-white hover:text-purple-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
