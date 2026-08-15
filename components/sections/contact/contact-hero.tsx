"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function ContactHero() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 sm:pb-24 border-b border-zinc-900/90">
      {/* Left Title & Description */}
      <div className="lg:col-span-8 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase font-mono font-bold tracking-wider text-zinc-300">
            AVAILABLE FOR Q1/Q2 ENGAGEMENTS
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-sans font-black tracking-tighter text-white uppercase leading-[0.92]">
          Let’s build <br />
          <span className="text-primary font-serif italic font-normal lowercase">something extraordinary</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl font-sans font-normal text-zinc-300 leading-relaxed max-w-2xl pt-2">
          Have a project in mind or looking to accelerate your B2B growth engine? Fill out the details below or email directly to schedule a strategy session.
        </p>
      </div>

      {/* Right Circular Rotating "START A PROJECT" Badge Stamp */}
      <div className="lg:col-span-4 flex justify-start lg:justify-end items-center pt-4 lg:pt-0">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          {/* Outer Rotating Text Circle */}
          <div className="absolute inset-0 animate-[spin_14s_linear_infinite]">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-mono uppercase font-bold tracking-[0.22em] fill-primary">
                <textPath href="#circlePath" startOffset="0%">
                  START A PROJECT • START A PROJECT •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Inner Badge Circle with Arrow */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-black flex items-center justify-center shadow-2xl shadow-primary/30 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <ArrowUpRightIcon className="w-8 h-8 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
