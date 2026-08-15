"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  TrophyIcon,
  AcademicCapIcon,
  CommandLineIcon,
  GlobeAltIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { recognitionCredentialsData } from "@/data/content/about-data";

export function RecognitionCredentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);

  const tagline = recognitionCredentialsData?.tagline || "HONORS, ACADEMICS & GLOBAL MOBILITY";
  const title = recognitionCredentialsData?.title || "CREDENTIALS & RECOGNITION";
  const awards = recognitionCredentialsData?.awards || [];
  const educationSubtitle = recognitionCredentialsData?.educationSubtitle || "Trained to think. Certified to execute.";
  const education = recognitionCredentialsData?.education || [];
  const certifications = recognitionCredentialsData?.certifications || [];
  const languages = recognitionCredentialsData?.languages || ["English", "Hindi", "Dutch"];
  const locationStatus = recognitionCredentialsData?.locationStatus || {
    city: "Based in New Delhi",
    workingModel: "settled & remote-first since 2024",
    relocation: "open to remote / relocation",
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            if (bentoGridRef.current) {
              gsap.fromTo(
                bentoGridRef.current.children,
                { opacity: 0, y: 35 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  stagger: 0.12,
                  ease: "power3.out",
                }
              );
            }
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 pb-16 sm:pb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-sans font-medium uppercase tracking-widest text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {tagline}
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white uppercase leading-none">
          {title}
        </h2>
      </div>

      {/* Refined Modern Executive Bento Grid */}
      <div
        ref={bentoGridRef}
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto"
      >
        {/* Bento Card 1: Recognition & Awards */}
        <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group shadow-xl backdrop-blur-md opacity-0">
          {/* Top-Right Radial Ambient Glow */}
          <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full blur-[50px] bg-primary/20 pointer-events-none opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-sm">
                <TrophyIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-primary block">
                  [ EXCELLENCE ]
                </span>
                <h3 className="text-2xl font-sans font-medium text-white tracking-tight">
                  Recognition & Awards
                </h3>
              </div>
            </div>

            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.id} className="space-y-3 group/award">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
                    <h4 className="text-lg font-sans font-medium text-white group-hover/award:text-primary transition-colors">
                      <span>{award.title}</span>
                    </h4>
                    <span className="text-xs font-mono font-normal text-zinc-400">
                      {award.company} &bull; {award.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-zinc-300 leading-relaxed font-normal">
                    {award.description}
                  </p>

                  {/* Highlighted Metric Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {award.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-medium flex items-center gap-1.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Card 2: Education & Academic Foundation */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group shadow-xl backdrop-blur-md opacity-0">
          {/* Top-Right Radial Ambient Glow */}
          <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full blur-[50px] bg-primary/20 pointer-events-none opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />

          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-sm">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-primary block">
                  [ ACADEMICS ]
                </span>
                <h3 className="text-2xl font-sans font-medium text-white tracking-tight">
                  Education
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-serif italic text-primary font-medium mb-6 leading-normal">
              &ldquo;{educationSubtitle}&rdquo;
            </p>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="space-y-2 border-b border-zinc-800/80 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-sans font-medium text-white flex items-center gap-1.5">
                      <span>{edu.degree}</span>
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary font-mono text-xs font-medium flex items-center gap-1">
                      <CheckBadgeIcon className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 block font-normal">
                    {edu.institution}
                  </span>
                  <p className="text-xs font-sans text-zinc-300 leading-relaxed pt-1 font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Card 3: Certifications Matrix (Mastery Card - Primary Color Background) */}
        <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-primary text-[#0a0a0b] border border-black/10 hover:border-black/20 transition-all duration-500 relative overflow-hidden group shadow-2xl opacity-0">
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-[#0a0a0b] text-primary shadow-md">
                <CommandLineIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0a0a0b]/80 block">
                  [ MASTERY ]
                </span>
                <h3 className="text-2xl font-sans font-extrabold text-[#0a0a0b] tracking-tight">
                  Certifications
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#0a0a0b] border border-black/20 hover:bg-white hover:text-[#0a0a0b] transition-all duration-300 flex items-center justify-between group/cert"
                >
                  <span className="text-xs sm:text-sm font-sans font-semibold text-white group-hover/cert:text-[#0a0a0b] transition-colors">
                    {cert.title}
                  </span>
                  <span className="text-[11px] font-mono text-primary group-hover/cert:text-zinc-700 ml-2 text-right font-medium">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Card 4: Languages & Global Status */}
        <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-primary/40 transition-all duration-500 relative overflow-hidden group shadow-xl backdrop-blur-md opacity-0">
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-sm">
                <GlobeAltIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-primary block">
                  [ GLOBAL CREDS ]
                </span>
                <h3 className="text-2xl font-sans font-medium text-white tracking-tight">
                  Languages & Mobility
                </h3>
              </div>
            </div>

            {/* Languages List */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-mono font-medium text-zinc-400 tracking-wider">
                Languages Spoken:
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-white font-sans text-xs font-medium uppercase tracking-wider hover:border-primary/60 hover:text-primary transition-all duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Location & Remote Status */}
            <div className="p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-[11px] font-mono font-medium uppercase text-primary tracking-wider">
                  STATUS & MOBILITY
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans font-normal text-zinc-300 leading-relaxed">
                {locationStatus.city} &bull; {locationStatus.workingModel} &bull; {locationStatus.relocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
