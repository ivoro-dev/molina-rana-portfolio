"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { aboutPhilosophyData } from "@/data/content/about-data";

export function AboutPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const highlightText =
    aboutPhilosophyData?.highlightText ||
    "Data-led storytelling, brand integrity, and strategic execution";
  const normalText =
    aboutPhilosophyData?.normalText ||
    " are the pillars of my marketing philosophy. I prioritize clear communication, scalable GTM engines, and data-backed advice, ensuring B2B enterprise leaders are empowered to drive sustainable revenue growth at every lifecycle stage.";

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            if (textRef.current) {
              gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 35 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.1,
                  ease: "power3.out",
                }
              );
            }
          });

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
      className="relative py-16 sm:py-24 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none border-b border-zinc-900/80"
    >
      <div className="max-w-5xl">
        <p
          ref={textRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-normal text-white leading-relaxed tracking-tight opacity-0"
        >
          <span className="text-primary font-semibold">{highlightText}</span>
          <span className="text-zinc-300">{normalText}</span>
        </p>
      </div>
    </section>
  );
}

