import { HeroSection } from "@/components/sections/home/hero-section";
import { StatsBento } from "@/components/sections/home/stats-bento";
import { ExpertiseSection } from "@/components/sections/home/expertise-section";
import { SelectedWorkSection } from "@/components/sections/home/selected-work-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { CTASection } from "@/components/sections/home/cta-section";

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


