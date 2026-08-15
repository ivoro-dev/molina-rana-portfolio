import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutPhilosophy } from "@/components/sections/about/about-philosophy";
import { WhyChooseMe } from "@/components/sections/about/why-choose-me";
import { CareerTimeline } from "@/components/sections/about/career-timeline";
import { RecognitionCredentials } from "@/components/sections/about/recognition-credentials";
import { CTASection } from "@/components/sections/home/cta-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f4f6]">
      <AboutHero />
      <AboutPhilosophy />
      <WhyChooseMe />
      <CareerTimeline />
      <RecognitionCredentials />
      <CTASection />
    </main>
  );
}





