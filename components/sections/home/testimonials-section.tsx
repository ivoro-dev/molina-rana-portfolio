"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Mouse Drag Scroll States
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

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
              ".testimonial-card",
              { opacity: 0, x: 40, scale: 0.96 },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.12,
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

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -480, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const testimonials: Testimonial[] = [
    {
      id: "hashir-siddiqui",
      quote:
        "Molina has this instinct for what will actually land with people versus what just sounds good in a strategy deck. She reads the room, whether that's employees who need to become advocates or audiences scrolling through noise, and packages content in ways that feel human, not corporate, which is rare in B2B.",
      author: "Hashir Siddiqui",
      role: "Senior Product Marketing Manager",
      company: "B2B SaaS GTM",
      avatar: "/images/testimonial-1.jpg",
    },
    {
      id: "aparupa-chakravarty",
      quote:
        "Whether managing big teams with utmost grace or writing about the most mundane things and making them interesting, she does it with passion, precision and dedication. Molina stands out and tall in her professional accomplishments at every organisation she becomes a part of.",
      author: "Aparupa Chakravarty",
      role: "Former Manager",
      company: "Justitiële Informatiedienst",
      avatar: "/images/testimonial-2.jpg",
    },
    {
      id: "kanan-k",
      quote:
        "A good lead, an exceptional writer, and a person whose speed is impeccable. Working with her has motivated me to soar in content. Time and again, Molina has proven to be a great leader.",
      author: "Kanan K",
      role: "Content @ HP",
      company: "ex-Paytm, Zepto, Ola",
      avatar: "/images/testimonial-3.jpg",
    },
    {
      id: "kartik-gill",
      quote:
        "Wise, clever and a brilliant writer who can be trusted with any project that requires the very best in media writing. No matter how complex the subject is, she will always come up with an elegant, stylistic way of drawing content around it.",
      author: "Kartik Gill",
      role: "SaaS Sales & Customer Engagement",
      company: "Media Writing",
      avatar: "/images/testimonial-4.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0a0a0b] py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto select-none  border-zinc-900/60 overflow-hidden"
    >
      {/* Top Header Block */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
        {/* Left Title */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-sm font-sans font-medium uppercase tracking-widest text-primary block">
            Customers love ME
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-semibold text-white tracking-tight leading-[1.05]">
            Preferred by product-led companies
          </h2>
        </div>

        {/* Right 5-Star Rating */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 fill-primary" />
              ))}
            </div>
            <span className="text-xs font-sans font-semibold text-zinc-400">
              5.0 out of 5 stars from executive clients
            </span>
          </div>
        </div>
      </div>

      {/* Testimonials Drag-to-Scroll Slider Track (No Scrollbar) */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 -mx-6 px-6 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16 cursor-grab active:cursor-grabbing select-none"
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="testimonial-card opacity-0 shrink-0 w-[340px] sm:w-[440px] lg:w-[500px] bg-[#121316] border border-zinc-800/80 rounded-2xl p-7 sm:p-9 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] shadow-2xl hover:border-primary/40 transition-all duration-300 group"
          >
            {/* Quote Body Text */}
            <p className="text-base sm:text-lg font-sans text-zinc-300 font-normal leading-relaxed group-hover:text-white transition-colors duration-200 pointer-events-none">
              &ldquo;{item.quote}&rdquo;
            </p>

            {/* Card Footer: Avatar, Author & Company */}
            <div className="pt-8 border-t border-zinc-800/80 mt-6 flex items-center justify-between gap-4 pointer-events-none">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-zinc-700/80 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-sans font-bold text-white leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-medium text-zinc-300 leading-tight mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Company Logo Wordmark */}
              <span className="text-sm sm:text-base font-sans font-black tracking-wider text-white/90 uppercase shrink-0">
                {item.company}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Slider Control Buttons (Left & Right Arrows) */}
      <div className="flex items-center justify-end gap-3 mt-8 pr-2">
        <button
          onClick={scrollLeft}
          aria-label="Previous Testimonials"
          className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-primary hover:text-[#0a0a0b] hover:border-primary flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-lg group"
        >
          <ChevronLeftIcon className="w-5 h-5 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={scrollRight}
          aria-label="Next Testimonials"
          className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-primary hover:text-[#0a0a0b] hover:border-primary flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-lg group"
        >
          <ChevronRightIcon className="w-5 h-5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
