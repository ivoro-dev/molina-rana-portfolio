"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface CountNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  isIntersecting: boolean;
}

function CountNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  isIntersecting,
}: CountNumberProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isIntersecting || animatedRef.current) return;
    animatedRef.current = true;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => {
        if (spanRef.current) {
          const numStr = decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toString();
          spanRef.current.textContent = `${prefix}${numStr}${suffix}`;
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [isIntersecting, value, prefix, suffix, decimals]);

  const initialStr = `${prefix}0${suffix}`;

  return <span ref={spanRef}>{initialStr}</span>;
}

function TypewriterHeading({
  text,
  isIntersecting,
}: {
  text: string;
  isIntersecting: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isIntersecting) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isIntersecting, text]);

  return (
    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-semibold text-white tracking-wide leading-normal inline-flex items-center justify-center">
      <span>{displayedText}</span>
      <span className="w-1.5 h-7 sm:h-9 lg:h-11 ml-2 bg-primary animate-pulse inline-block align-middle" />
    </h2>
  );
}

function TypewriterText({
  text,
  isIntersecting,
  className = "",
  speed = 20,
}: {
  text: string;
  isIntersecting: boolean;
  className?: string;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isIntersecting) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isIntersecting, text, speed]);

  return <p className={className}>{displayedText}</p>;
}

function BentoCard({
  children,
  className = "",
}: {
  children: (isIntersecting: boolean) => React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={className}>
      {children(isIntersecting)}
    </div>
  );
}

export function StatsBento() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionIntersecting, setIsSectionIntersecting] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsSectionIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Real avatars for LinkedIn Community
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0b] py-16 sm:py-24 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto select-none"
    >
      {/* Centralized Section Header with Typewriter Effect */}
      <div className="text-center mx-auto max-w-3xl mb-16 sm:mb-20 lg:mb-24 space-y-3">
        <span className="text-xs font-sans font-medium uppercase tracking-widest text-primary block">
          Executive Track Record
        </span>
        <TypewriterHeading
          text="The Numbers Tell the Story"
          isIntersecting={isSectionIntersecting}
        />
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Card 1: Top Left - Featured Dark Green Ambient Gradient Card (348%) */}
        <BentoCard className="lg:col-span-7 bg-gradient-to-br from-zinc-900 via-[#101b06] to-[#0d1604] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] shadow-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
          {(isIntersecting) => (
            <>
              {/* Subtle Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none transform-gpu" />

              <TypewriterText
                text="Driving scalable B2B growth and enterprise demand generation across SaaS & FinTech markets."
                isIntersecting={isIntersecting}
                className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-md"
              />

              <div className="pt-8">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-sans font-medium text-white tracking-tight leading-none">
                  <CountNumber
                    value={348}
                    suffix="%"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-sm sm:text-base font-sans font-medium text-primary uppercase tracking-wider mt-3">
                  Peak conversion growth
                </div>
              </div>
            </>
          )}
        </BentoCard>

        {/* Card 2: Top Right - Community Card with Real Avatars (270K) */}
        <BentoCard className="lg:col-span-5 bg-[#121316] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] shadow-2xl group hover:border-zinc-700 transition-all duration-300">
          {(isIntersecting) => (
            <>
              {/* Real People Community Avatars */}
              <div className="flex items-center space-x-0 -space-x-2">
                {avatars.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#121316] shadow-md"
                  >
                    <Image
                      src={src}
                      alt="LinkedIn Community Leader"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-[#121316] flex items-center justify-center text-xs font-medium text-primary">
                  +270k
                </div>
              </div>

              <div className="pt-8">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-sans font-medium text-primary tracking-tight leading-none">
                  <CountNumber
                    value={270}
                    suffix="K"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium text-zinc-400 uppercase tracking-widest mt-3">
                  LinkedIn community built
                </div>
              </div>
            </>
          )}
        </BentoCard>

        {/* Card 3: Middle Left - Pipeline Card ($149K) */}
        <BentoCard className="lg:col-span-7 bg-[#121316] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] shadow-2xl group hover:border-zinc-700 transition-all duration-300">
          {(isIntersecting) => (
            <>
              <TypewriterText
                text="Sourced high-intent enterprise opportunity pipeline in a single 30-day execution window."
                isIntersecting={isIntersecting}
                className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-md"
              />

              <div className="pt-6">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-sans font-medium text-primary tracking-tight leading-none">
                  <CountNumber
                    value={149}
                    prefix="$"
                    suffix="K"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-sm font-sans font-medium text-zinc-400 uppercase tracking-wider mt-3">
                  Pipeline sourced (1 mo.)
                </div>
              </div>
            </>
          )}
        </BentoCard>

        {/* Card 4: Middle Right - Organic Impressions (1.8M) */}
        <BentoCard className="lg:col-span-5 bg-[#121316] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] shadow-2xl group hover:border-zinc-700 transition-all duration-300">
          {(isIntersecting) => (
            <>
              <TypewriterText
                text="Multi-channel organic authority & executive thought leadership reach"
                isIntersecting={isIntersecting}
                className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed"
              />

              <div className="pt-6">
                <div className="text-5xl sm:text-6xl font-sans font-medium text-primary tracking-tight leading-none">
                  <CountNumber
                    value={1.8}
                    decimals={1}
                    suffix="M"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium text-zinc-400 uppercase tracking-wider mt-3">
                  Organic impressions
                </div>
              </div>
            </>
          )}
        </BentoCard>

        {/* Card 5: Bottom Left - SAL Inbound Card (28%) */}
        <BentoCard className="lg:col-span-6 bg-[#121316] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 flex flex-col justify-between min-h-[240px] shadow-2xl group hover:border-primary/40 transition-all duration-300">
          {(isIntersecting) => (
            <>
              <p className="text-xs sm:text-sm font-sans font-bold text-primary uppercase tracking-widest">
                Inbound Engine
              </p>

              <div className="pt-6">
                <div className="text-5xl sm:text-6xl font-sans font-medium text-primary tracking-tight leading-none">
                  <CountNumber
                    value={28}
                    suffix="%"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium text-zinc-300 uppercase tracking-wider mt-3">
                  Organic → #1 inbound (of SALs)
                </div>
              </div>
            </>
          )}
        </BentoCard>

        {/* Card 6: Bottom Right - Incremental Event Revenue ($75K+) */}
        <BentoCard className="lg:col-span-6 bg-[#121316] border border-zinc-800/80 rounded-[2.25rem] p-8 sm:p-10 flex flex-col justify-between min-h-[240px] shadow-2xl group hover:border-primary/40 transition-all duration-300">
          {(isIntersecting) => (
            <>
              <p className="text-xs sm:text-sm font-sans font-medium text-zinc-400 uppercase tracking-widest">
                Event Revenue
              </p>

              <div className="pt-6">
                <div className="text-5xl sm:text-6xl font-sans font-medium text-primary tracking-tight leading-none">
                  <CountNumber
                    value={75}
                    prefix="$"
                    suffix="K+"
                    isIntersecting={isIntersecting}
                  />
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium text-zinc-300 uppercase tracking-wider mt-3">
                  Incremental event revenue
                </div>
              </div>
            </>
          )}
        </BentoCard>
      </div>
    </section>
  );
}
