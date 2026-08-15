"use client";

import { ContactHero } from "./contact-hero";
import { ContactForm } from "./contact-form";
import { ContactSidebar } from "./contact-sidebar";

export function ContactFormSection() {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 px-6 sm:px-12 lg:px-16 max-w-[1600px] mx-auto w-full select-none overflow-hidden">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0e_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)]" />
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Hero Header Block */}
      <ContactHero />

      {/* Form & Sidebar Grid */}
      <div className="relative z-10 pt-16 sm:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Step-by-Step Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

        {/* Right: Contact Sidebar & Quick Actions */}
        <div className="lg:col-span-4">
          <ContactSidebar />
        </div>
      </div>
    </section>
  );
}
