"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import Threads from "@/components/ui/Threads";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: gsap.Context | null = null;
    let observerInstance: IntersectionObserver | null = null;

    const playHeroAnimation = () => {
      ctx = gsap.context(() => {
        // Fade in upper bio block
        if (bioRef.current) {
          gsap.fromTo(
            bioRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
          );
        }

        // Staggered slide up reveal for both lines of the heading separately
        if (line1Ref.current && line2Ref.current) {
          gsap.fromTo(
            [line1Ref.current, line2Ref.current],
            { y: "110%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 1.2,
              stagger: 0.18,
              ease: "power4.out",
              delay: 0.15,
            }
          );
        }
      });
    };

    const initObserver = () => {
      observerInstance = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            playHeroAnimation();
            if (observerInstance && entry.target) {
              observerInstance.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 }
      );

      if (sectionRef.current) {
        observerInstance.observe(sectionRef.current);
      }
    };

    if (typeof window !== "undefined" && (window as any).__preloaderDone) {
      initObserver();
    } else {
      const handlePreloaderDone = () => {
        initObserver();
      };
      window.addEventListener("preloaderComplete", handlePreloaderDone, { once: true });
      return () => {
        window.removeEventListener("preloaderComplete", handlePreloaderDone);
        if (observerInstance) observerInstance.disconnect();
        if (ctx) ctx.revert();
      };
    }

    return () => {
      if (observerInstance) observerInstance.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-20 sm:pt-24 pb-6 sm:pb-8 max-w-[1600px] mx-auto w-full select-none"
    >
      {/* Interactive Background WebGL Threads Canvas - Desktop only for max mobile performance */}
      {!isMobile && (
        <div className="hidden md:block absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Threads
            color={[0.8, 1, 0]}
            amplitude={1.5}
            distance={0.5}
            enableMouseInteraction={true}
          />
        </div>
      )}

      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] pointer-events-none z-0 transform-gpu" />

      {/* Headline Block: Top on Mobile (order-1), Bottom on Desktop (sm:order-2) */}
      <div className="w-full flex-shrink-0 pt-2 sm:pt-4 pb-2 sm:pb-4 relative z-10 order-1 sm:order-2">
        {/* Line 1 Overflow Wrapper */}
        <div className=" py-1">
          <h1
            ref={line1Ref}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.75rem] 2xl:text-[6.5rem] font-sans font-medium text-white tracking-tight leading-[0.96] sm:leading-[0.94] opacity-0"
          >
            Where brand meets{" "}
            <span className="text-primary font-serif italic font-normal">growth,</span>
          </h1>
        </div>

        {/* Line 2 Overflow Wrapper */}
        <div className="   py-1 mt-0.5 sm:mt-1">
          <div
            ref={line2Ref}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.75rem] 2xl:text-[6.5rem] font-sans font-medium text-white tracking-tight leading-[0.96] sm:leading-[0.94] flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-4 opacity-0"
          >
            <span>&</span>
            <span className="text-primary font-serif italic font-normal">strategy</span>
            <span className="text-white font-bold">meets results.</span>
          </div>
        </div>
      </div>

      {/* Bio Section: Bottom on Mobile (mt-auto order-2), Upper-Right on Desktop (sm:my-auto sm:order-1) */}
      <div className="w-full flex justify-start sm:justify-end mt-auto sm:my-auto flex-shrink-0 pt-2 sm:pt-4 pb-4 sm:pb-0 relative z-10 order-2 sm:order-1">
        <div ref={bioRef} className="max-w-md sm:max-w-lg lg:max-w-xl text-left space-y-3 sm:space-y-4 opacity-0">
          <p className="text-sm sm:text-base lg:text-lg font-sans text-zinc-300 font-normal leading-relaxed tracking-normal">
            I design and execute B2B marketing systems that connect brand,
            content, demand generation, and operations, from first impression to
            measurable revenue.
          </p>

          <div className="flex items-center gap-4 pt-0.5">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-primary hover:text-white transition-colors duration-200 group"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}




