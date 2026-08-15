"use client";

import { useState } from "react";
import { faqData, FAQItem } from "@/data/content/contact-data";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0a0a0b] py-24 sm:py-32 border-t border-zinc-900/90 select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        {/* Header Block */}
        <div className="text-center mx-auto max-w-4xl mb-16 sm:mb-20 space-y-4">
          <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest text-primary block">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl font-sans font-normal text-zinc-300 leading-relaxed max-w-2xl mx-auto pt-2">
            Everything you need to know about engagement models, timelines, marketing ROI attribution, and getting started.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto divide-y divide-zinc-800/80 border-t border-b border-zinc-800/80">
          {faqData.map((item: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors duration-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer focus:outline-none"
                >
                  <span className={`text-xl sm:text-2xl font-sans font-bold transition-colors duration-200 ${
                    isOpen ? "text-primary" : "text-white group-hover:text-primary"
                  }`}>
                    {item.question}
                  </span>

                  <div className={`p-2 rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-primary text-primary bg-primary/10"
                      : "border-zinc-800 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white"
                  }`}>
                    {isOpen ? (
                      <MinusIcon className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="pt-4 pr-12 text-base sm:text-lg font-sans font-normal text-zinc-300 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
