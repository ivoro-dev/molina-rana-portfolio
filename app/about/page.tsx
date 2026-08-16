import dynamic from "next/dynamic";
import { AboutHero } from "@/components/sections/about/about-hero";

const AboutPhilosophy = dynamic(() =>
  import("@/components/sections/about/about-philosophy").then((mod) => mod.AboutPhilosophy)
);
const WhyChooseMe = dynamic(() =>
  import("@/components/sections/about/why-choose-me").then((mod) => mod.WhyChooseMe)
);
const CareerTimeline = dynamic(() =>
  import("@/components/sections/about/career-timeline").then((mod) => mod.CareerTimeline)
);
const RecognitionCredentials = dynamic(() =>
  import("@/components/sections/about/recognition-credentials").then((mod) => mod.RecognitionCredentials)
);
const CTASection = dynamic(() =>
  import("@/components/sections/home/cta-section").then((mod) => mod.CTASection)
);

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





