import { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/contact/contact-form-section";
import { ContactFAQSection } from "@/components/sections/contact/contact-faq-section";

export const metadata: Metadata = {
  title: "Contact & Book a Strategy Call | Molina Rana",
  description:
    "Get in touch with Molina Rana for B2B brand strategy, GTM demand generation, AI search (GEO) optimization, and executive thought leadership programs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-[#f4f4f6]">
      <ContactFormSection />
      <ContactFAQSection />
    </main>
  );
}
