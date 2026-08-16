import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/home/hero-section";

const StatsBento = dynamic(() =>
  import("@/components/sections/home/stats-bento").then((mod) => mod.StatsBento)
);
const ExpertiseSection = dynamic(() =>
  import("@/components/sections/home/expertise-section").then((mod) => mod.ExpertiseSection)
);
const SelectedWorkSection = dynamic(() =>
  import("@/components/sections/home/selected-work-section").then((mod) => mod.SelectedWorkSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/home/testimonials-section").then((mod) => mod.TestimonialsSection)
);
const CTASection = dynamic(() =>
  import("@/components/sections/home/cta-section").then((mod) => mod.CTASection)
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f4f6]">
      <HeroSection />
      <StatsBento />
      <ExpertiseSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}


