"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Preloader() {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const progressObj = useRef({ value: 0 });

  useEffect(() => {
    // Disable body scroll while preloading
    document.body.style.overflow = "hidden";

    // Track asset loading
    let realProgress = 0;

    const updateRealProgress = () => {
      // Basic heuristic: check document readyState & fonts
      let fontLoaded = false;
      try {
        fontLoaded = document.fonts.status === "loaded";
      } catch {
        fontLoaded = true;
      }

      const readyState = document.readyState;
      if (readyState === "loading") realProgress = 30;
      else if (readyState === "interactive") realProgress = 70;
      else if (readyState === "complete" && fontLoaded) realProgress = 100;
    };

    updateRealProgress();

    const handleLoad = () => {
      realProgress = 100;
    };

    window.addEventListener("load", handleLoad);
    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (document.readyState === "complete") {
          realProgress = 100;
        }
      });
    }

    // Smooth GSAP progress tween from 0 to 100%
    const tween = gsap.to(progressObj.current, {
      value: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.floor(progressObj.current.value);
        if (fillRef.current) {
          fillRef.current.style.height = `${val}%`;
        }
        if (textRef.current) {
          textRef.current.textContent = `${val} %`;
        }
      },
      onComplete: () => {
        // Trigger slide-up exit animation
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: "power4.inOut",
            onComplete: () => {
              document.body.style.overflow = "";
              if (typeof window !== "undefined") {
                (window as any).__preloaderDone = true;
                window.dispatchEvent(new CustomEvent("preloaderComplete"));
              }
              setIsDone(true);
            },
          });
        }
      },
    });

    return () => {
      window.removeEventListener("load", handleLoad);
      tween.kill();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0a0a0b] p-6 sm:p-12 select-none"
    >
      {/* Top spacing */}
      <div className="flex justify-between items-center text-xs tracking-widest uppercase text-zinc-500 font-sans">
        <span>Molina Rana</span>
        <span>Portfolio</span>
      </div>

      {/* Main Centered Wordmark with Liquid Wave Fill */}
      <div className="relative w-full flex flex-col items-center justify-center py-12">
        <div className="relative inline-block w-full text-center">
          {/* Base Unfilled Layer (Dark Gray) */}
          <h1 className="text-[20vw] sm:text-[18vw] font-black tracking-tighter leading-none text-zinc-800 font-sans uppercase">
            Molina
          </h1>

          {/* Liquid Wave Fill Layer (White) clipped by height % */}
          <div
            ref={fillRef}
            className="absolute inset-0 overflow-hidden transition-all duration-75 ease-out"
            style={{
              height: "0%",
              bottom: 0,
              top: "auto",
            }}
          >
            {/* Wave SVG positioned at top edge of the liquid level */}
            <div className="absolute top-0 left-0 w-[200%] -translate-y-1/2 animate-wave opacity-90">
              <svg
                className="w-full h-8 sm:h-12 text-white fill-current"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
              </svg>
            </div>

            {/* Filled White Text locked in exact alignment */}
            <div className="absolute bottom-0 left-0 w-full text-center">
              <h1 className="text-[20vw] sm:text-[18vw] font-black tracking-tighter leading-none text-white font-sans uppercase">
                Molina
              </h1>
            </div>
          </div>
        </div>

        {/* Progress Counter - Positioned bottom right under text */}
        <div className="w-full flex justify-end mt-4 px-2">
          <span className="text-sm sm:text-base font-sans tracking-wide text-zinc-400 font-medium">
            loading... <span ref={textRef} className="text-primary font-bold font-mono">0 %</span>
          </span>
        </div>
      </div>

      {/* Bottom status / credits */}
      <div className="flex justify-between items-center text-xs tracking-wider text-zinc-600 font-sans">
        <span>Brand & Growth Leadership</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
