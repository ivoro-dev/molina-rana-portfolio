"use client";

import { useState } from "react";
import { ArrowUpRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-[#111315] border border-primary/40 text-center space-y-6 animate-in fade-in duration-300 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
          <CheckCircleIcon className="w-10 h-10" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">
          Message Sent Successfully!
        </h3>
        <p className="text-sm sm:text-base text-zinc-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. I have received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-3 rounded-full border border-zinc-700 text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:border-primary transition-colors cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Step 01: Name */}
        <div className="group bg-[#111315]/80 hover:bg-[#15181c] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 focus-within:border-primary/70 focus-within:shadow-[0_0_25px_rgba(208,245,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-light">
              01
            </span>
            <label className="text-sm sm:text-base font-sans font-light text-white">
              What’s your name?
            </label>
          </div>
          <input
            type="text"
            required
            placeholder="Type your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-b border-zinc-800/80 py-2.5 text-white text-base placeholder-zinc-500 focus:border-primary focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Step 02: Email */}
        <div className="group bg-[#111315]/80 hover:bg-[#15181c] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 focus-within:border-primary/70 focus-within:shadow-[0_0_25px_rgba(208,245,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-light">
              02
            </span>
            <label className="text-sm sm:text-base font-sans font-light text-white">
              What’s your email address?
            </label>
          </div>
          <input
            type="email"
            required
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-zinc-800/80 py-2.5 text-white text-base placeholder-zinc-500 focus:border-primary focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Step 03: Phone Number */}
        <div className="group bg-[#111315]/80 hover:bg-[#15181c] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 focus-within:border-primary/70 focus-within:shadow-[0_0_25px_rgba(208,245,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-light">
              03
            </span>
            <label className="text-sm sm:text-base font-sans font-light text-white">
              Phone number <span className="text-xs text-zinc-500 font-light">(Optional)</span>
            </label>
          </div>
          <input
            type="tel"
            placeholder="+91 99105 52504"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-transparent border-b border-zinc-800/80 py-2.5 text-white text-base placeholder-zinc-500 focus:border-primary focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Step 04: Company */}
        <div className="group bg-[#111315]/80 hover:bg-[#15181c] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 focus-within:border-primary/70 focus-within:shadow-[0_0_25px_rgba(208,245,0,0.12)]">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-light">
              04
            </span>
            <label className="text-sm sm:text-base font-sans font-light text-white">
              Company / organization name
            </label>
          </div>
          <input
            type="text"
            placeholder="Type your company name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-transparent border-b border-zinc-800/80 py-2.5 text-white text-base placeholder-zinc-500 focus:border-primary focus:outline-none transition-colors duration-200"
          />
        </div>
      </div>

      {/* Row 3: Project Message (Full Width) */}
      <div className="group bg-[#111315]/80 hover:bg-[#15181c] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 sm:p-6 transition-all duration-300 focus-within:border-primary/70 focus-within:shadow-[0_0_25px_rgba(208,245,0,0.12)]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-light">
            05
          </span>
          <label className="text-sm sm:text-base font-sans font-light text-white">
            Tell us about your project
          </label>
        </div>
        <textarea
          rows={4}
          required
          placeholder="Please type your project description, key objectives, or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-b border-zinc-800/80 py-2.5 text-white text-base placeholder-zinc-500 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
        />
      </div>

      {/* Submit Action Row */}
      <div className="pt-4 flex items-center justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-primary text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 cursor-pointer disabled:opacity-50 group"
        >
          <span>{isSubmitting ? "Sending Message..." : "SEND MESSAGE"}</span>
          <ArrowUpRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}
