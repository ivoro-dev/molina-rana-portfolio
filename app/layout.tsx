import type { Metadata } from "next";
import { instrumentSans, instrumentSerif } from "@/lib/fonts";
import { Preloader } from "@/components/ui/preloader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Molina Rana | B2B Brand & Growth Marketing Leader",
  description:
    "Executive portfolio of Molina Rana. Strategic B2B Brand & Growth Marketing Leader specializing in brand strategy, demand generation, GTM systems, and data-led storytelling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-[#f4f4f6] font-sans">
        <Preloader />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

