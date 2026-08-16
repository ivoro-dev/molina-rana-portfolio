"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { aboutHeroData } from "@/data/content/about-data";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            // Animate Top Header & Paragraph
            if (titleRef.current) {
              gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
              );
            }

            if (descRef.current) {
              gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.15 }
              );
            }

            // Animate Media Cards & Button
            if (leftColRef.current && rightColRef.current) {
              gsap.fromTo(
                [leftColRef.current, rightColRef.current],
                { opacity: 0, y: 45 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  stagger: 0.2,
                  ease: "power4.out",
                  delay: 0.3,
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
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top Header Grid (Matches Reference Layout) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-10 sm:pb-14 border-b border-zinc-900/80">
        {/* Left Column: Tagline & Giant Title */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-3">
          <span className="text-xs uppercase font-sans font-bold tracking-widest text-primary block">
            {aboutHeroData.tagline}
          </span>
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-sans font-black tracking-tighter text-white uppercase leading-[0.92] opacity-0"
          >
            {aboutHeroData.title}{" "}
            <span className="font-serif italic font-normal text-primary tracking-normal lowercase">
              {aboutHeroData.titleHighlight}
            </span>
          </h1>
        </div>

        {/* Right Column: Paragraph Overview */}
        <div
          ref={descRef}
          className="lg:col-span-5 xl:col-span-4 lg:pt-8 flex justify-start lg:justify-end opacity-0"
        >
          <p className="text-sm sm:text-base lg:text-lg font-sans font-normal text-zinc-300 leading-relaxed max-w-md">
            {aboutHeroData.description}
          </p>
        </div>
      </div>

      {/* Bottom Dual-Column Grid (Matches Reference Layout) */}
      <div className="relative z-10 pt-10 sm:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: CTA Pill Button + Secondary Cropped Image */}
        <div
          ref={leftColRef}
          className="md:col-span-5 lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8 opacity-0"
        >
          {/* Action Pill Button */}
          <div className="flex items-center">
            <Link
              href={aboutHeroData.cta.href}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-6 px-7 py-4 rounded-full border border-primary/50 bg-zinc-900/80 hover:bg-primary text-primary hover:text-black font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 group shadow-lg shadow-black/50"
            >
              <span>{aboutHeroData.cta.label}</span>
              <ArrowUpRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Secondary Portrait Cropped Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/60 group shadow-2xl">
            <Image
              src={aboutHeroData.images.portrait.url}
              alt={aboutHeroData.images.portrait.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Main Featured Landscape Image */}
        <div
          ref={rightColRef}
          className="md:col-span-7 lg:col-span-8 flex opacity-0"
        >
          <div className="relative w-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/60 group shadow-2xl">
            <Image
              src={aboutHeroData.images.landscape.url}
              alt={aboutHeroData.images.landscape.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Inner Border Glow & Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
