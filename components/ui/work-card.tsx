"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export interface WorkCardProps {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  className?: string;
}

export function WorkCard({
  title,
  subtitle,
  image,
  href = "/work",
  className = "",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col justify-between ${className}`}
    >
      {/* Folder Card Body Container */}
      <div className="bg-[#f6f6f8] text-[#0a0a0b] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(204,255,0,0.15)] border border-white/20">
        {/* Project Image Display */}
        <div className="w-full h-64 sm:h-72 lg:h-80 relative flex items-center justify-center my-2 overflow-hidden rounded-xl bg-zinc-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Bottom Footer Info */}
        <div className="flex items-end justify-between pt-6 border-t border-zinc-300/80 mt-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#0a0a0b] tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-xs sm:text-sm font-sans font-bold text-zinc-500 tracking-wider uppercase mt-1">
              {subtitle}
            </p>
          </div>

          {/* Primary Accent Circle Action Button */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-[#0a0a0b] flex items-center justify-center group-hover:bg-[#0a0a0b] group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-md shrink-0">
            <ArrowUpRightIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
