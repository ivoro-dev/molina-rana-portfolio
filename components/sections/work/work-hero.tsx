"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { workHeroData } from "@/data/content/work-data";

export function WorkHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const movingImageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            // Animate Headline lines
            if (headlineRef.current) {
              const lines = headlineRef.current.querySelectorAll(".headline-line");
              gsap.fromTo(
                lines,
                { y: "100%", opacity: 0 },
                {
                  y: "0%",
                  opacity: 1,
                  duration: 1.1,
                  stagger: 0.12,
                  ease: "power4.out",
                }
              );
            }

            // Animate Showcase Card
            if (cardRef.current) {
              gsap.fromTo(
                cardRef.current,
                { opacity: 0, scale: 0.94, y: 30 },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 1.1,
                  ease: "power3.out",
                  delay: 0.25,
                }
              );
            }

            // Animate Subtitle & Meta Bar
            if (subtitleRef.current && metaRef.current) {
              gsap.fromTo(
                [subtitleRef.current, metaRef.current],
                { opacity: 0, y: 25 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.15,
                  ease: "power3.out",
                  delay: 0.4,
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

  // Mouse movement parallax effect bound within hero boundaries
  useEffect(() => {
    if (!sectionRef.current || !movingImageRef.current) return;

    const xTo = gsap.quickTo(movingImageRef.current, "x", {
      duration: 0.6,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(movingImageRef.current, "y", {
      duration: 0.6,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Normalized position relative to center of hero (-0.5 to +0.5)
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

      // Defined motion boundaries: +/- 70px horizontal, +/- 24px vertical
      const maxMoveX = 70;
      const maxMoveY = 24;

      xTo(xNorm * maxMoveX);
      yTo(yNorm * maxMoveY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const section = sectionRef.current;
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0e_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/3 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* TOP ROW GRID (Larger Showcase Image Left + Right-Aligned Giant Display Title) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start my-auto">
        {/* Top Left: Larger Showcase Image Card */}
        <div
          ref={cardRef}
          className="lg:col-span-5 xl:col-span-5 flex flex-col opacity-0 order-2 lg:order-1"
        >
          <div className="group relative w-full aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/90 bg-[#121417] shadow-2xl transition-all duration-500 hover:border-zinc-700">
            {/* Moving Inner Image Layer (Responds to Cursor Movement in defined boundary) */}
            <div
              ref={movingImageRef}
              className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] will-change-transform"
            >
              <Image
                src={workHeroData.showreel.image}
                alt={workHeroData.showreel.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Top Right: Giant Oversized Display Title Aligned to Right Side */}
        <div
          ref={headlineRef}
          className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start items-start lg:items-end text-left lg:text-right order-1 lg:order-2"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.75rem] 2xl:text-[8.5rem] font-sans font-black tracking-tighter text-white uppercase leading-[0.88] sm:leading-[0.86] select-none flex flex-col items-start lg:items-end text-left lg:text-right ">
            <div className=" py-0.5">
              <span className="headline-line block opacity-0">
                {workHeroData.headline.line1}
              </span>
            </div>
            <div className=" py-0.5">
              <span className="headline-line block opacity-0 text-primary">
                {workHeroData.headline.line2}
              </span>
            </div>
            <div className=" py-0.5">
              <span className="headline-line block opacity-0 text-zinc-100">
                {workHeroData.headline.line3}
              </span>
            </div>
          </h1>
        </div>
      </div>

      {/* BOTTOM ROW GRID (Subtitle Left + Meta Bar Right) */}
      <div className="relative z-10 pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mt-auto">
        {/* Bottom Left: Subtitle Paragraph */}
        <div
          ref={subtitleRef}
          className="lg:col-span-6 xl:col-span-7 space-y-1.5 opacity-0"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-semibold text-white tracking-tight leading-tight">
            {workHeroData.subtitle.highlight}
          </h2>
          <p className="text-base sm:text-lg font-sans font-normal text-zinc-400 tracking-tight leading-tight max-w-xl">
            {workHeroData.subtitle.body}
          </p>
        </div>

        {/* Bottom Right: Meta Info & Navigation Action Row */}
        <div
          ref={metaRef}
          className="lg:col-span-6 xl:col-span-5 flex flex-wrap items-center justify-between sm:justify-start lg:justify-end gap-6 sm:gap-10 pt-2 lg:pt-0 opacity-0"
>



          <div>
            <a
              href={workHeroData.meta.ctaHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-white hover:text-primary transition-colors duration-200 group border-b-2 border-primary/80 pb-1"
            >
              <span>{workHeroData.meta.ctaLabel}</span>
              <ArrowDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
