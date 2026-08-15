"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { WorkCard } from "@/components/ui/work-card";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export function SelectedWorkSection() {
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
              ".work-card-wrapper",
              { opacity: 0, y: 35, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.1,
              }
            );
          }, sectionRef);

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

  const projects: ProjectItem[] = [
    {
      id: "winning-ai-search",
      title: "WINNING AI SEARCH",
      subtitle: "STRATEGY - 2025",
      image: "/images/selected-work-1.jpg",
      href: "/work",
    },
    {
      id: "linkedin-community",
      title: "LINKEDIN COMMUNITY",
      subtitle: "COMMUNITY - 2025",
      image: "/images/selected-work-2.jpg",
      href: "/work",
    },
    {
      id: "brand-ghostwriting",
      title: "BRAND GHOSTWRITING",
      subtitle: "CONTENT - 2025",
      image: "/images/selected-work-3.jpg",
      href: "/work",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0b] py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto select-none"
    >
      {/* Centralized Header Block */}
      <div className="text-center mx-auto max-w-3xl mb-16 sm:mb-20 lg:mb-24 space-y-4">
        <span className="text-sm font-sans font-medium uppercase tracking-widest text-primary block">
          Featured Projects
        </span>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-semibold text-white tracking-normal">
          Selected Work
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-sans text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Strategic marketing campaigns, B2B demand engines, and enterprise brand systems engineered for measurable revenue.
        </p>
      </div>

      {/* Work Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project) => (
          <div key={project.id} className="work-card-wrapper opacity-0">
            <WorkCard
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              href={project.href}
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA Button Directing to /work */}
      <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-primary text-[#0a0a0b] font-sans font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl group"
        >
          <span>View More</span>
          <ArrowUpRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
}
