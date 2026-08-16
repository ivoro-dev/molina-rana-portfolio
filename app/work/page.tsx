import { Metadata } from "next";
import dynamic from "next/dynamic";
import { WorkHero } from "@/components/sections/work/work-hero";

const CaseStudiesSection = dynamic(() =>
  import("@/components/sections/work/case-studies-section").then((mod) => mod.CaseStudiesSection)
);
const LinkedInSection = dynamic(() =>
  import("@/components/sections/work/linkedin-section").then((mod) => mod.LinkedInSection)
);
const CTASection = dynamic(() =>
  import("@/components/sections/home/cta-section").then((mod) => mod.CTASection)
);

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
