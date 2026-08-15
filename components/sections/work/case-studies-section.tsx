"use client";

import { detailedCaseStudies } from "@/data/content/work-data";
import { CaseStudyCard } from "@/components/sections/work/case-study-card";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full bg-[#0a0a0b] pt-20 sm:pt-28 select-none scroll-mt-24">
      {/* Centralized Header Block */}
      <div className="text-center mx-auto max-w-4xl mb-14 sm:mb-20 px-6 sm:px-12 space-y-4">
        <span className="text-xs sm:text-sm font-sans font-medium uppercase tracking-widest text-primary block">
          Case Studies
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight">
          Selected Case Studies
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl font-sans font-normal text-zinc-300 leading-relaxed max-w-3xl mx-auto pt-2">
          Challenge → strategy → result. Six programs that show the full range: AI search, brand at scale, executive influence, SEO, performance, and content.
        </p>
      </div>

      {/* 100% Width Case Study Showcase List */}
      <div className="w-full flex flex-col">
        {detailedCaseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}
