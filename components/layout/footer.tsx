"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0b] text-[#f4f4f6] pt-16 sm:pt-24 pb-10 px-6 sm:px-12 lg:px-16 border-t border-zinc-900/80 select-none relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto space-y-16 sm:space-y-20">
        {/* Multi-Column Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Column 1: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary block">
              [ NAVIGATION ]
            </span>
            <ul className="space-y-2.5 font-sans font-medium text-base text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-white transition-colors duration-200"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Expertise */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary block">
              [ EXPERTISE ]
            </span>
            <ul className="space-y-2.5 font-sans font-medium text-base text-zinc-400">
              <li>B2B Brand Strategy</li>
              <li>Demand Generation Systems</li>
              <li>Marketing Automation & Lifecycle</li>
              <li>Executive & Thought Leadership</li>
            </ul>
          </div>

          {/* Column 3: Social & Connect */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary block">
              [ CONNECT ]
            </span>
            <ul className="space-y-2.5 font-sans font-medium text-base text-zinc-400">
              <li>
                <a
                  href="mailto:molinarana05@gmail.com"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors duration-200 group"
                >
                  <span>Email: molinarana05@gmail.com</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/molina-rana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors duration-200 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919910552504"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors duration-200 group"
                >
                  <span>Phone: +91 99105 52504</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top Button */}
          <div className="lg:col-span-2 flex flex-col justify-start items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-primary hover:text-[#0a0a0b] hover:border-primary transition-all duration-300 text-xs font-sans font-bold uppercase tracking-wider group cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUpIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Giant Awwwards Brand Display Wordmark */}
        <div className="pt-8 pb-4 flex items-center justify-center border-t border-zinc-900/80">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-sans font-black tracking-tighter text-zinc-800/40 hover:text-primary/20 transition-colors duration-500 text-center leading-none uppercase select-none w-full">
            MOLINA RANA
          </h1>
        </div>

        {/* Bottom Sub-Footer Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-900/60 text-xs font-sans font-medium text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Molina Rana. All rights reserved.
          </div>
          <div>
            Architecting High-Growth B2B Marketing Systems.
          </div>
        </div>
      </div>
    </footer>
  );
}
