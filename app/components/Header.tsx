import Link from "next/link";
import { personalInfo } from "../data/portfolioData";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/90 backdrop-blur-md border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="group flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-mono font-bold text-xl px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:bg-purple-500/20 transition-all">
              &lt;{personalInfo.initials} /&gt;
            </span>
            <span className="font-semibold text-lg tracking-tight hidden sm:inline">
              {personalInfo.name}
            </span>
          </Link>

          <ul className="flex items-center gap-6 md:gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white/80 hover:text-purple-400 transition-colors text-sm md:text-base font-medium"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#about"
                className="text-white/80 hover:text-purple-400 transition-colors text-sm md:text-base font-medium"
              >
                About & Skills
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#experience"
                className="text-white/80 hover:text-purple-400 transition-colors text-sm md:text-base font-medium"
              >
                Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#projects"
                className="text-white/80 hover:text-purple-400 transition-colors text-sm md:text-base font-medium"
              >
                Projects
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs md:text-sm transition-all shadow-md shadow-purple-900/30"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
