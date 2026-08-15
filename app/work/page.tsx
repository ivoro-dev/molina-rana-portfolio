import { Metadata } from "next";
import { WorkHero } from "@/components/sections/work/work-hero";
import { CaseStudiesSection } from "@/components/sections/work/case-studies-section";
import { LinkedInSection } from "@/components/sections/work/linkedin-section";
import { CTASection } from "@/components/sections/home/cta-section";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | Molina Rana",
  description:
    "Explore strategic B2B marketing case studies, GTM systems, brand positionings, demand generation engines, and executive LinkedIn thought leadership by Molina Rana.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f4f6]">
      <WorkHero />
      <CaseStudiesSection />
      <LinkedInSection />
      <CTASection />
    </main>
  );
}
