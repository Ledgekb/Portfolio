"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Banner(): React.JSX.Element {
  const texts = personalInfo.titles;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(45);
        }, 2200);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Avatar side */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative">
              {/* Mobile: Hello tag */}
              <div className="lg:hidden mb-4 text-center">
                <div className="relative inline-block bg-purple-950/60 border border-purple-500/40 rounded-full px-4 py-1.5 shadow-lg">
                  <p className="text-white text-sm">
                    Hello! I Am{" "}
                    <span className="text-purple-400 font-semibold">{personalInfo.name}</span>
                  </p>
                </div>
              </div>

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
                <Image
                  src="/assets/me.png"
                  alt={`${personalInfo.name} - Software Engineer`}
                  width={320}
                  height={320}
                  className="max-w-full absolute object-contain z-10"
                  priority
                />
                <Image
                  src="/assets/me-glow.png"
                  alt="Glow effect"
                  width={320}
                  height={320}
                  className="max-w-full absolute object-contain opacity-80 animate-pulse"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Left side text */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Desktop: Hello tag */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={80}
                height={80}
                className="absolute"
                style={{ left: "-80px", top: "-30px", width: "auto", height: "auto" }}
              />
              <div className="bg-purple-950/60 border border-purple-500/40 rounded-full px-5 py-1.5 shadow-lg">
                <p className="text-white text-base">
                  Hello! I Am{" "}
                  <span className="text-purple-400 font-bold">{personalInfo.name}</span>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xl lg:text-2xl text-purple-300 font-medium">A Developer who</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mt-2">
                Engineers solutions
                <br /> from{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle highlight"
                    width={220}
                    height={220}
                    className="absolute -top-3 left-0 pointer-events-none opacity-90"
                  />
                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500 bg-clip-text text-transparent px-2">
                    concept
                  </span>
                </span>
                to production...
              </h1>
              <p className="text-base sm:text-lg text-white/75 mt-3 max-w-xl mx-auto lg:mx-0">
                Bridging robust backend architecture with intuitive, modern frontends.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold min-h-[3rem]">
                <span>I&apos;m a </span>
                <span className="text-purple-400">{displayedText}</span>
                <span className="animate-pulse text-purple-400">|</span>
              </div>

              <div className="text-base lg:text-lg text-white/90 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Currently, I&apos;m a</span>
                <span className="text-purple-300 font-semibold">{personalInfo.currentRole}</span>
                <span>at</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
                  {personalInfo.currentCompany}
                </span>
              </div>

              <p className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalInfo.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Link
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold transition-all shadow-lg shadow-purple-900/40"
                >
                  Explore Projects →
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium transition-all"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
