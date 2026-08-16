"use client";

import { useState } from "react";
import { contactInfoData } from "@/data/content/contact-data";
import {
  DocumentDuplicateIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export function ContactSidebar() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfoData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#111315]/90 border border-zinc-800/90 p-8 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
        {/* Quick Email Copy Action Card */}
        <div className="space-y-3 pb-6 border-b border-zinc-800/80">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block">
            DIRECT EMAIL
          </span>
          <div className="flex items-center justify-between gap-3">
            <a
              href={`mailto:${contactInfoData.email}`}
              className="font-sans text-base sm:text-lg font-bold text-white hover:text-primary transition-colors truncate"
            >
              {contactInfoData.email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy Email"
              aria-label="Copy email address"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer shrink-0"
            >
              {copiedEmail ? (
                <CheckIcon className="w-4 h-4 text-emerald-400" />
              ) : (
                <DocumentDuplicateIcon className="w-4 h-4" />
              )}
            </button>
          </div>
          {copiedEmail && (
            <span className="text-xs font-mono text-emerald-400 block animate-in fade-in">
              ✓ Email copied to clipboard!
            </span>
          )}
        </div>

        {/* Direct Phone Numbers */}
        <div className="space-y-3 pb-6 border-b border-zinc-800/80">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block">
            CALL DIRECTLY
          </span>
          <div className="space-y-1 font-sans text-base sm:text-lg font-bold text-white">
            <a href={`tel:${contactInfoData.phone}`} className="block hover:text-primary transition-colors">
              {contactInfoData.phone}
            </a>
            {contactInfoData.secondaryPhone && (
              <a href={`tel:${contactInfoData.secondaryPhone}`} className="block hover:text-primary transition-colors">
                {contactInfoData.secondaryPhone}
              </a>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block">
            LOCATION
          </span>
          <p className="font-sans text-sm sm:text-base font-medium text-zinc-200 leading-relaxed">
            {contactInfoData.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block">
            CONNECT
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {contactInfoData.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 hover:text-primary hover:border-primary/50 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
