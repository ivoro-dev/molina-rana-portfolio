"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Header() {
  const pathname = usePathname();
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let currentScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== currentScrolled) {
        currentScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "py-4 bg-[#0a0a0b]/80 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-8xl  mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {!logoError ? (
            <Image
              src="/logos/logo.png"
              alt="Molina Rana"
              width={280}
              height={80}
              priority
              sizes="(max-width: 768px) 200px, 280px"
              className="h-16 sm:h-[4.75rem] w-auto object-contain transition-transform group-hover:scale-105"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              Molina<span className="text-primary font-sans text-3xl">.</span>
            </span>
          )}
        </Link>

        {/* Right Side Desktop Navigation Bar (White Pill Container) */}
        <nav className="hidden md:flex items-center bg-white/95 text-[#111315] rounded-full p-1.5 shadow-xl shadow-black/20 border border-white/20">
          <div className="flex items-center gap-1 px-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 text-xs uppercase font-bold tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? "bg-primary text-black shadow-sm font-extrabold"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-white bg-zinc-900 rounded-full border border-zinc-800 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-primary" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-[#121417] border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm uppercase tracking-widest font-semibold rounded-2xl transition-colors ${
                  pathname === link.href
                    ? "bg-zinc-800 text-primary font-bold"
                    : "text-zinc-300 hover:bg-zinc-800/50 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
