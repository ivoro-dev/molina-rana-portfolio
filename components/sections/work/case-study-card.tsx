"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRightIcon, ArrowDownTrayIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DetailedCaseStudy, CaseStudySlide } from "@/data/content/work-data";

function getSlideData(slide: string | CaseStudySlide): CaseStudySlide {
  if (typeof slide === "string") {
    return { image: slide };
  }
  return slide;
}

export function CaseStudyCard({ study, index }: { study: DetailedCaseStudy; index: number }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);

  const activeSlide = getSlideData(study.slides[currentSlide] || study.slides[0]);

  useEffect(() => {
    if (!numberRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(numberRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || study.slides.length <= 1) return;

    // Slide transition every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % study.slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, study.slides.length]);

  return (
    <article className="w-full bg-[#0a0a0b] pb-20 sm:pb-28 lg:pb-36 select-none">
      {/* Centered Big Display Number */}
      <div ref={numberRef} className="w-full flex items-center justify-center pt-8 sm:pt-12 pb-6 sm:pb-10">
        <span
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-sans font-black tracking-tighter transition-all duration-700 ease-out leading-none select-none cursor-default ${
            isInView
              ? "text-primary opacity-100 scale-100 drop-shadow-[0_0_40px_rgba(208,245,0,0.3)]"
              : "text-zinc-800/80 opacity-40 scale-95"
          }`}
        >
          0{index + 1}
        </span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* LEFT SIDE: Editorial Content & Data Strip */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8">
            {/* Top Metadata Badges & Role */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="text-primary font-bold uppercase tracking-widest">
                  {study.company}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-medium uppercase tracking-wider">
                  {study.industry}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400 font-medium uppercase tracking-wider">
                  {study.focus}
                </span>
              </div>

              <div className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono">
                {study.role}
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-[1.08]">
              {study.title}
            </h2>

            {/* Main Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans font-normal text-zinc-300 leading-relaxed max-w-2xl">
              {study.description}
            </p>

            {/* Metrics Row (Frameless Awwwards Data Strip - No Box Cards) */}
            <div className="pt-4 border-t border-b border-zinc-900/90 py-6 grid grid-cols-3 gap-6">
              {study.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-primary tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {study.pdfLink && (
                <a
                  href={study.pdfLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-[#0a0a0b] font-sans font-bold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-xl group"
                >
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span>{study.pdfLink.label}</span>
                </a>
              )}

              {study.visitLink && (
                <a
                  href={study.visitLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-white hover:text-primary hover:border-zinc-700 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>{study.visitLink.label}</span>
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Borderless Image Showcase Slider */}
          <div
            className="lg:col-span-6 xl:col-span-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden group">
              {/* Top Left Caption Badge */}
              {activeSlide.caption && (
                <div className="absolute top-4 left-4 z-30 max-w-[55%] sm:max-w-[65%] px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono font-medium truncate pointer-events-none shadow-lg">
                  {activeSlide.caption}
                </div>
              )}

              {/* Top Right Animated Link Badge */}
              {activeSlide.link && (
                <a
                  href={activeSlide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-primary/50 text-primary text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-all duration-300 shadow-xl group/badge"
                  title="Open attached article"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary group-hover/badge:bg-black"></span>
                  </span>
                  <span>Link Attached</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5" />
                </a>
              )}

              {/* Hover Clickable Full Overlay */}
              {activeSlide.link && (
                <a
                  href={activeSlide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 group/link block cursor-pointer"
                  aria-label={`View article: ${activeSlide.caption || "Attached Link"}`}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/link:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-primary text-black font-sans font-bold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/link:translate-y-0 transition-all duration-300">
                      <span>View Attached Article</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              )}

              {/* Sliding Images Track */}
              <div className="relative w-full h-full overflow-hidden">
                {study.slides.map((slide, idx) => {
                  const slideData = getSlideData(slide);
                  const isCurrent = idx === currentSlide;
                  const isPrevious =
                    idx === (currentSlide - 1 + study.slides.length) % study.slides.length;

                  let translateClass = "translate-x-full opacity-0 pointer-events-none";
                  if (isCurrent) {
                    translateClass = "translate-x-0 opacity-100 z-10 pointer-events-auto";
                  } else if (isPrevious) {
                    translateClass = "-translate-x-full opacity-0 z-0 pointer-events-none";
                  }

                  return (
                    <div
                      key={slideData.image + idx}
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${translateClass}`}
                    >
                      {/* Main Image Layer: 100% full view object-contain without cropping */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={slideData.image}
                          alt={slideData.caption || `${study.company} case study slide ${idx + 1}`}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 inset-x-4 z-30 flex items-center justify-between px-5 py-3 rounded-full bg-black/85 backdrop-blur-md border border-white/10 shadow-2xl">
                {/* Navigation Dots */}
                <div className="flex items-center gap-1.5">
                  {study.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide
                          ? "w-8 bg-primary"
                          : "w-2 bg-zinc-600 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Left / Right Nav Arrows */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(
                        (prev) => (prev - 1 + study.slides.length) % study.slides.length
                      );
                    }}
                    className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide((prev) => (prev + 1) % study.slides.length);
                    }}
                    className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
