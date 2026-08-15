export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  secondaryPhone?: string;
  location: string;
  socials: {
    name: string;
    href: string;
  }[];
}

export const contactInfoData: ContactInfo = {
  email: "molinarana05@gmail.com",
  phone: "+91 99105 52504",
  location: "Available Globally",
  socials: [
    { name: "Email", href: "mailto:molinarana05@gmail.com" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/molina-rana/" },
    { name: "Phone", href: "tel:+919910552504" },
  ],
};

export const serviceOptions = [
  "Brand Strategy & Positioning",
  "B2B Demand Generation Engine",
  "AI Search & GEO Optimization",
  "Executive Thought Leadership",
  "GTM Systems & Marketing Ops",
];

export const budgetOptions = [
  "< $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

export const faqData: FAQItem[] = [
  {
    question: "What types of engagements do you offer?",
    answer:
      "I partner with B2B SaaS, FinTech, and enterprise teams in three main formats: 1) Full-Funnel Advisory & GTM Strategy, 2) Interim/Fractional Marketing Leadership, and 3) Targeted High-Impact Programs (AI Search/GEO, Brand Architecture, Executive Influence).",
  },
  {
    question: "How quickly can we expect to see results?",
    answer:
      "For GEO and AI search optimization, initial citations and organic pipeline impact typically occur within 60 to 90 days. Executive branding flywheels build momentum in 30–45 days, while full brand re-positioning programs are executed across 8 to 12 weeks.",
  },
  {
    question: "How do you measure marketing ROI and attribution?",
    answer:
      "Every program is tied to business revenue metrics: qualified sales-accepted leads (SALs), organic pipeline velocity, conversion rate lift, and customer acquisition cost (CAC) reduction. We set clear benchmark KPIs before launching.",
  },
  {
    question: "Do you work with early-stage scaleups or enterprise companies?",
    answer:
      "Both. I have led growth engines for enterprise giants like Grant Thornton and Bajaj Finserv, as well as Series A/B high-velocity scaleups like Centime, HighRadius, and Aviso AI.",
  },
  {
    question: "What happens after I submit this form?",
    answer:
      "I will personally review your project inquiry and reach out within 24 hours to schedule a 30-minute discovery call where we can discuss your growth objectives, scope, and timeline.",
  },
];
