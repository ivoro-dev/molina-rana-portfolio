"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { whyChooseMeData } from "@/data/content/about-data";

export function WhyChooseMe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const tagline = whyChooseMeData?.tagline || "Why choose me";
  const cards = whyChooseMeData?.cards || [];

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            if (cardsContainerRef.current) {
              gsap.fromTo(
                cardsContainerRef.current.children,
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
      className="relative py-16 sm:py-24 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none"
    >
      {/* Section Header & Tagline */}
      <div className="flex items-center gap-3 pb-8 sm:pb-12">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-400">
          [ {tagline} ]
        </span>
      </div>

      {/* Interactive 4-Block Accordion Grid */}
      <div
        ref={cardsContainerRef}
        className="flex flex-col lg:flex-row gap-4 h-[750px] lg:h-[520px] w-full"
      >
        {cards.map((card, index) => {

          const isActive = activeIndex === index;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
              role="button"
              aria-expanded={isActive}
              aria-label={`${card.title} - Block ${card.number}`}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ease-out cursor-pointer group flex flex-col justify-between p-6 sm:p-8 lg:p-10 ${
                isActive
                  ? "lg:flex-[3.5] flex-[3] bg-zinc-900/90 border-primary/50 shadow-2xl shadow-primary/10"
                  : "lg:flex-1 flex-1 bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
              }`}
            >
              {/* Unsplash Background Image with Smooth Hover/Active Opacity */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-30 scale-105"
                      : "opacity-5 scale-100 group-hover:opacity-15"
                  }`}
                />
                {/* Dark Vignette Overlay for High Legibility */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-[#0a0a0b]/50"
                      : "bg-[#0a0a0b]/80"
                  }`}
                />
              </div>

              {/* Top Row: Block Number */}
              <div className="relative z-10 flex items-start justify-between">
                <span
                  className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  {card.number}
                </span>

                {/* Subtle active accent indicator */}
                {isActive && (
                  <span className="hidden sm:inline-block px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-black bg-primary rounded-full font-bold">
                    Active
                  </span>
                )}
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-3 pt-6">
                {/* Expanded Card View */}
                {isActive ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white tracking-tight leading-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans font-normal text-zinc-300 leading-relaxed max-w-lg">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  /* Collapsed Card View */
                  <div className="transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-sans font-semibold text-zinc-400 group-hover:text-white transition-colors line-clamp-2">
                      {card.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
