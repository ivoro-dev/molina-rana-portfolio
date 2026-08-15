"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

export function CTASection({ showExploreWork = false }: { showExploreWork?: boolean }) {
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
            gsap.fromTo(
              ".cta-content",
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.1,
              }
            );
          }, sectionRef);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
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
      className="w-full max-w-7xl mx-auto bg-primary text-[#0a0a0b] py-12 sm:py-16 px-6 sm:px-10 lg:px-14 my-10 sm:my-14 rounded-[2rem] sm:rounded-[2.5rem] select-none relative overflow-hidden shadow-2xl"
    >
      {/* Subtle Awwwards Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none transform-gpu" />

      <div className="cta-content max-w-3xl mx-auto text-center space-y-6 sm:space-y-6 relative z-10 opacity-0">
        <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#0a0a0b]/80 block">
          [ LET&apos;S BUILD SOMETHING GREAT ]
        </span>

        {/* Compact Heading in Black */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0a0a0b] tracking-tight leading-[1.04]">
          Ready to scale your B2B growth engine?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg font-sans font-medium text-neutral-600 max-w-2xl mx-auto leading-relaxed pt-1">
          I partner with ambitious SaaS, FinTech, and enterprise teams to design demand generation systems, content engines, and category-defining positioning.
        </p>

        {/* Single Primary Action CTA -> /contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#0a0a0b] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-[#0a0a0b] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl group"
          >
            <span>Start A Project</span>
            <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {showExploreWork && (
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#0a0a0b] font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#0a0a0b] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl group"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
