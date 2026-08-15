"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { careerTimelineData } from "@/data/content/about-data";

export function CareerTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<SVGLineElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const tagline = careerTimelineData?.tagline || "CAREER MILESTONES & LEADERSHIP";
  const title = careerTimelineData?.title || "CAREER EVOLUTION";
  const subtitle =
    careerTimelineData?.subtitle ||
    "A track record of building, scaling, and leading marketing engines across high-growth B2B SaaS, fintech, consulting, and digital enterprise ecosystems.";
  const items = careerTimelineData?.items || [];

  // GSAP Entrance Reveal Animation for cards
  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            if (itemsRef.current) {
              gsap.fromTo(
                itemsRef.current.children,
                { opacity: 0, y: 40 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  stagger: 0.15,
                  ease: "power3.out",
                }
              );
            }
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  // Scroll-driven Path Draw Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current || !activeLineRef.current) return;

      const rect = timelineContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when timeline container reaches lower 75% of viewport
      const startY = windowHeight * 0.75;
      const totalHeight = rect.height;

      if (totalHeight <= 0) return;

      const scrolledPx = startY - rect.top;
      let progress = scrolledPx / totalHeight;

      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      activeLineRef.current.setAttribute("y2", `${(progress * 100).toFixed(2)}%`);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 pb-16 sm:pb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-sans font-light uppercase tracking-widest text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {tagline}
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white uppercase leading-none">
          {title}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg font-sans text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto pt-2">
          {subtitle}
        </p>
      </div>

      {/* Timeline Section Container with Central SVG Spine */}
      <div ref={timelineContainerRef} className="relative z-10 max-w-5xl mx-auto">
        {/* Scroll-Driven Animated Central SVG Spine Line */}
        <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 pointer-events-none flex justify-center z-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CCFF00" stopOpacity="1" />
                <stop offset="60%" stopColor="#CCFF00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#CCFF00" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow-line" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Inactive Background Dashed Line */}
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#27272a"
              strokeWidth="2"
              strokeDasharray="5 5"
            />

            {/* Active Scroll-Animated Line */}
            <line
              ref={activeLineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="0%"
              stroke="url(#timeline-gradient)"
              strokeWidth="3.5"
              filter="url(#glow-line)"
              className="transition-[y2] duration-75 ease-out"
            />
          </svg>
        </div>

        {/* Timeline Milestones Grid */}
        <div ref={itemsRef} className="space-y-12 sm:space-y-16">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const nodeProgressRatio = items.length > 1 ? index / (items.length - 1) : 0;
            const isReached = scrollProgress >= nodeProgressRatio - 0.05;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } opacity-0`}
              >
                {/* Node Radar Dot on Timeline Spine */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  {item.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-primary/60"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-[#0a0a0b] shadow-lg shadow-primary/50"></span>
                    </div>
                  ) : (
                    <div
                      className={`relative flex items-center justify-center transition-all duration-500 ${
                        isReached ? "scale-125" : "scale-100"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full border-2 transition-all duration-500 ${
                          isReached
                            ? "bg-primary border-primary shadow-lg shadow-primary/60"
                            : "bg-zinc-900 border-zinc-700"
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Content Card (Desktop Staggered Left/Right, Mobile Right-Aligned) */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] pl-16 sm:pl-20 md:pl-0 ${
                    isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div
                    className={`group relative p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-500 shadow-xl backdrop-blur-md ${
                      isReached
                        ? "bg-zinc-900/80 border border-primary/30 shadow-primary/5"
                        : "bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    {/* Top-Right Radial Ambient Glow */}
                    <div
                      className={`absolute -top-14 -right-14 w-44 h-44 rounded-full blur-[48px] pointer-events-none transition-all duration-700 ${
                        isReached
                          ? "bg-primary/25 opacity-100 scale-125"
                          : "bg-primary/15 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    />
                    {/* Header Pill & Date */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {item.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-black text-[11px] font-sans font-light uppercase tracking-wider shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                          {item.date}
                        </span>
                      ) : (
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono font-light transition-colors duration-300 ${
                            isReached
                              ? "bg-primary/10 border-primary/40 text-primary"
                              : "bg-zinc-800/80 border-zinc-700/60 text-zinc-300"
                          }`}
                        >
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight group-hover:text-primary transition-colors duration-200">
                      {item.role}
                    </h3>

                    {/* Company & Category Badge */}
                    <div className="text-sm font-sans font-light text-primary/90 mt-1 mb-4 flex flex-wrap items-center gap-2">
                      <span>{item.company}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-400 font-light">{item.category}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-400 font-light">{item.location}</span>
                    </div>

                    {/* Accomplishment Highlights */}
                    <ul className="space-y-2 text-xs sm:text-sm font-sans font-light text-zinc-300/90 leading-relaxed">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span className="text-primary mt-0.5 select-none">&rsaquo;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
