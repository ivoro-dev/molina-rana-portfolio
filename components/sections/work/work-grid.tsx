"use client";

import { useState } from "react";
import { caseStudiesData, CaseStudy } from "@/data/content/work-data";
import { WorkCard } from "@/components/ui/work-card";

type CategoryFilter =
  | "All"
  | "Brand Strategy"
  | "Growth & Demand"
  | "SEO & AI Search"
  | "Performance"
  | "Content & Media";

const categories: CategoryFilter[] = [
  "All",
  "Brand Strategy",
  "Growth & Demand",
  "SEO & AI Search",
  "Performance",
  "Content & Media",
];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const studiesList = caseStudiesData || [];
  const filteredStudies =
    activeCategory === "All"
      ? studiesList
      : studiesList.filter((item) => item.category === activeCategory);

  return (
    <section
      id="case-studies"
      className="w-full bg-[#0a0a0b] py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto select-none scroll-mt-24"
    >
      {/* Centralized Header Block */}
      <div className="text-center mx-auto max-w-4xl mb-14 sm:mb-20 space-y-4">
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

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredStudies.map((study: CaseStudy) => (
          <div key={study.id} className="flex flex-col space-y-3 group">
            <WorkCard
              title={study.title}
              subtitle={`${study.category.toUpperCase()} • ${study.year}`}
              image={study.image}
              href={study.href}
            />

            {/* Additional Metadata Card Info */}
            <div className="px-1 pt-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-primary">
                  {study.impact}
                </span>
                <span className="text-xs font-sans text-zinc-500">
                  {study.client}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed line-clamp-2">
                {study.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
