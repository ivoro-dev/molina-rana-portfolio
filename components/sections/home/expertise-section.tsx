"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MarqueeTicker } from "@/components/ui/marquee-ticker";

export function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsIntersecting(true);

          ctx = gsap.context(() => {
            // Animate Competency Pills Stagger
            gsap.fromTo(
              ".skill-pill",
              { opacity: 0, y: 24, scale: 0.94 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.04,
                ease: "back.out(1.3)",
                delay: 0.1,
              }
            );

            // Animate Martech Tool Pills Stagger
            gsap.fromTo(
              ".tool-pill",
              { opacity: 0, y: 24, scale: 0.94 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.03,
                ease: "back.out(1.3)",
                delay: 0.35,
              }
            );
          }, sectionRef);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  const competencies = [
    "B2B Brand Strategy",
    "Community & Employer Branding",
    "Executive / Thought Leadership",
    "Demand Generation",
    "Marketing Automation & Lifecycle",
    "Account-Based Marketing",
    "Funnel Optimization",
    "Content Marketing Strategy",
    "SEO & SEM · AEO / GEO",
    "Growth & Performance",
    "Integrated Campaigns",
  ];

  const martechTools = [
    "HubSpot",
    "Pardot",
    "Salesforce Marketing Cloud",
    "Mailchimp",
    "Constant Contact",
    "Sprinklr",
    "Brandwatch",
    "SEMrush",
    "Google Analytics",
    "Power BI",
    "Apollo",
    "Crazy Egg",
    "Webflow",
    "WordPress",
    "Dripify",
    "Canva",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[1550px] mx-auto bg-primary text-[#0a0a0b] pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 lg:pb-32 px-6 sm:px-12 lg:px-16 my-12 sm:my-16 lg:my-24 rounded-[2.5rem] sm:rounded-[3rem] select-none relative overflow-hidden shadow-2xl"
    >
      {/* Subtle Awwwards Kinetic Ticker Watermark Component */}
      <MarqueeTicker
        text="EXPERTISE • MARTECH • BRAND STRATEGY • DEMAND GEN • "
        className="absolute top-6 sm:top-8 left-0 right-0 w-full opacity-[0.06] font-sans font-black text-7xl sm:text-9xl uppercase tracking-tighter"
      />

      <div className="max-w-[1600px] mt-20 mx-auto relative z-10 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-[#0a0a0b] tracking-tight leading-[0.96]">
              Core Competencies & Stack.
            </h2>
          </div>
          <p className="text-lg sm:text-xl font-serif italic text-[#0a0a0b]/80 max-w-md">
            Architecting end-to-end B2B growth engines with data-led storytelling & modern marketing systems.
          </p>
        </div>

        {/* Group 1: Core Competencies */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-[#0a0a0b]/70">
              CORE COMPETENCIES
            </h3>
            <span className="h-px flex-1 bg-black/15" />
            <span className="text-xs font-mono font-bold text-[#0a0a0b]/60">
              [11 SKILLS]
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            {competencies.map((skill, idx) => (
              <div
                key={idx}
                className="skill-pill opacity-0 bg-[#0a0a0b] text-white hover:bg-white hover:text-[#0a0a0b] transition-all duration-300 font-sans font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl border border-black/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 group"
              >
                <span>{skill}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-[#0a0a0b] transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Martech & Tools */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-[#0a0a0b]/70">
              MARTECH & TOOLS
            </h3>
            <span className="h-px flex-1 bg-black/15" />
            <span className="text-xs font-mono font-bold text-[#0a0a0b]/60">
              [16 PLATFORMS]
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-2">
            {martechTools.map((tool, idx) => (
              <div
                key={idx}
                className="tool-pill opacity-0 bg-[#0a0a0b]/90 text-[#f4f4f6] hover:bg-[#0a0a0b] hover:text-primary transition-all duration-300 font-sans font-medium text-xs sm:text-sm lg:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black/10 hover:scale-105 active:scale-95 cursor-pointer"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
