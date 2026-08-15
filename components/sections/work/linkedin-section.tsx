"use client";

import Image from "next/image";
import {
  ArrowUpRightIcon,
  HandThumbUpIcon,
  ChatBubbleLeftEllipsisIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { linkedinPostsData, LinkedInPost } from "@/data/content/work-data";

export function LinkedInSection() {
  return (
    <section className="w-full bg-[#0a0a0b] py-24 sm:py-32 lg:py-40 select-none">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 w-full">
        {/* Outstanding Centralized Header Block */}
        <div className="text-center mx-auto max-w-4xl mb-16 sm:mb-24 space-y-4">
          <span className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest text-primary block">
            Executive Influence & Thought Leadership
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08]">
            Insights That Move Markets.<br />
            <span className="text-zinc-400">Content That Drives Inbound.</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-sans font-normal text-zinc-300 leading-relaxed max-w-3xl mx-auto pt-3">
            From C-suite frameworks to B2B growth tear-downs — selected LinkedIn posts that earned 2.5M+ impressions, sparked executive conversations, and transformed organic social into a high-converting revenue channel.
          </p>
        </div>

        {/* LinkedIn Posts Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {linkedinPostsData.map((post: LinkedInPost, idx: number) => {
            let gridColClass = "lg:col-span-2";
            if (idx === 3) {
              gridColClass = "lg:col-start-2 lg:col-span-2";
            } else if (idx === 4) {
              gridColClass = "lg:col-span-2 md:col-span-2 md:lg:col-span-2 md:max-w-[calc(50%-1rem)] lg:max-w-none md:mx-auto lg:mx-0 w-full";
            }

            return (
              <article
                key={post.id}
                className={`group relative flex flex-col justify-between rounded-3xl bg-[#111315] border border-zinc-800/80 overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/10 ${gridColClass}`}
              >
              {/* Post Visual Header */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Post Content Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-sans font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                </div>

                {/* Engagement Metrics Strip */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5" title="Reactions">
                    <HandThumbUpIcon className="w-4 h-4 text-primary" />
                    <span>{post.reactions}</span>
                  </div>

                  <div className="flex items-center gap-1.5" title="Comments">
                    <ChatBubbleLeftEllipsisIcon className="w-4 h-4 text-zinc-400" />
                    <span>{post.comments}</span>
                  </div>

                  <div className="flex items-center gap-1.5" title="Impressions">
                    <ChartBarIcon className="w-4 h-4 text-zinc-400" />
                    <span>{post.impressions}</span>
                  </div>
                </div>

                {/* Bottom Read Post CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors duration-300"
                  >
                    <span>Read Full Post</span>
                    <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
