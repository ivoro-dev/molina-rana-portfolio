export interface WorkHeroData {
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  showreel: {
    title: string;
    caption: string;
    image: string;
    duration?: string;
  };
  subtitle: {
    highlight: string;
    body: string;
  };
  meta: {
    categoryLabel: string;
    categoryValue: string;
    timelineLabel: string;
    timelineValue: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const workHeroData: WorkHeroData = {
  headline: {
    line1: "BRAND",
    line2: "SELECTED",
    line3: "WORKS",
  },
  showreel: {
    title: "Habito Showreels",
    caption: "Selected Brand & Media Reel",
    image: "/images/work-showreel.png",
    duration: "01:45",
  },
  subtitle: {
    highlight: "Real work. Real impact.",
    body: "Branding and growth engines built for today’s high-velocity digital products and enterprise software.",
  },
  meta: {
    categoryLabel: "Client Focus",
    categoryValue: "B2B & SaaS",
    timelineLabel: "Timeline",
    timelineValue: "2023–2026",
    ctaLabel: "Explore Studies",
    ctaHref: "#case-studies",
  },
};

export interface CaseStudySlide {
  image: string;
  link?: string;
  caption?: string;
}

export interface DetailedCaseStudy {
  id: string;
  company: string;
  industry: string;
  focus: string;
  role: string;
  title: string;
  description: string;
  stats: {
    number: string;
    label: string;
  }[];
  pdfLink?: {
    label: string;
    href: string;
  };
  visitLink?: {
    label: string;
    href: string;
  };
  slides: (string | CaseStudySlide)[];
}

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: "centime-ai-search",
    company: "Centime",
    industry: "B2B SaaS · FinTech",
    focus: "AEO / GEO · Full-funnel",
    role: "Senior Manager, Marketing · Marketing owner",
    title: "Winning AI search before the market caught up",
    description:
      "Owned Centime's full-funnel content engine end-to-end. Took the brand from 0 → 13 Google AI Overview citations as category leader in under 90 days (beating target by 60%), built the company messaging framework adopted as the single source of truth, and made organic the #1 inbound channel.",
    stats: [
      {
        number: "13",
        label: "AI Overview citations <90 days",
      },
      {
        number: "+28%",
        label: "Sales-accepted leads",
      },
      {
        number: "$149K",
        label: "Pipeline · 22 opps",
      },
    ],
    pdfLink: {
      label: "View Messaging Framework",
      href: "/images/case-studies/centime-messaging-framework.pdf",
    },
    visitLink: {
      label: "View Engine",
      href: "https://www.centime.com/blog",
    },
    slides: [
      {
        image: "/images/case-studies/study-11.jpg",
        link: "https://www.google.com/search?q=unified+ap+ar+and+cash+management+platform",
        caption: "Unified AP, AR & Cash Management Platform",
      },
      {
        image: "/images/case-studies/study-12.jpg",
        link: "https://www.google.com/search?q=best+cash+flow+forecasting+software+for+mid-sized+businesses",
        caption: "Cash Flow Forecasting for Mid-sized Businesses",
      },
      {
        image: "/images/case-studies/study-13.jpg",
        link: "https://www.centime.com/posts/agentic-finance-b2b-payment-optimization",
        caption: "Agentic Finance & B2B Payment Optimization",
      },
      {
        image: "/images/case-studies/study-14.jpg",
        link: "https://www.google.com/search?q=cash+flow+forecasting+software+for+mid-market",
        caption: "Cash Flow Forecasting for Mid-market",
      },
      {
        image: "/images/case-studies/study-15.jpg",
        link: "https://www.centime.com/posts/netsuite-ap-automation-why-specialists-exist",
        caption: "NetSuite AP Automation: Why Specialists Exist",
      },
    ],
  },
  {
    id: "highradius-linkedin-community",
    company: "HighRadius",
    industry: "B2B SaaS",
    focus: "Social · Community · Events",
    role: "Manager, Marketing · Social & Email",
    title: "Scaling a category-leading LinkedIn community",
    description:
      "Grew LinkedIn from 150K → 270K (+80%) in 9 months, adding 35K relevant NA/EMEA followers through persona intelligence (10K+ titles analysed), and held the #1 competitor ranking. Turned the Radiance Conference into a revenue channel: +$75K and 120 registrations.",
    stats: [
      {
        number: "+80%",
        label: "Follower growth · 9 mo.",
      },
      {
        number: "+$75K",
        label: "Event social revenue",
      },
      {
        number: "#1",
        label: "vs. competitors",
      },
    ],
    pdfLink: {
      label: "View Architecture",
      href: "/images/case-studies/Nurture_Sequence_Architecture.pdf",
    },
    visitLink: {
      label: "View Event",
      href: "https://www.linkedin.com/showcase/radiance-highradius/",
    },
    slides: [
      {
        image: "/images/case-studies/study-21.jpg",
        link: "https://www.linkedin.com/posts/finsider-ordertocash-treasury-ugcPost-7232707336027430912-HIyL/",
        caption: "FinSider Order to Cash & Treasury",
      },
      {
        image: "/images/case-studies/study-22.jpg",
        link: "https://lnkd.in/p/gYUHR3i6",
        caption: "HighRadius Community Spotlight",
      },
      {
        image: "/images/case-studies/study-23.jpg",
        link: "https://radiance.highradius.com/radiance-2024-largest-unconference-for-the-office-of-the-cfo/",
        caption: "Radiance 2024 CFO Unconference",
      },
      {
        image: "/images/case-studies/study-24.jpg",
        link: "https://www.highradius.com/",
        caption: "HighRadius Autonomous Finance Platform",
      },
      {
        image: "/images/case-studies/study-25.jpg",
        link: "https://lnkd.in/p/gakuYXnR",
        caption: "Executive Thought Leadership Campaign",
      },
    ],
  },
  {
    id: "aviso-ai-exec-branding",
    company: "Aviso AI",
    industry: "B2B SaaS · AI",
    focus: "Brand · Exec branding · Community",
    role: "Manager, Marketing · Brand, Community & Comms",
    title: "Building executive influence & a brand refresh",
    description:
      "Ghostwrote for the CEO, growing his profile 5K → 16.8K, scaled the company page 24K → 37K and lifted NA audience from 5% → 17%. Ran advocacy for 200+ employees and 50+ advisors for 1.8M+ impressions and led a full brand positioning & visual-identity refresh. The stage moments on the right, from the London Stock Exchange to Lenovo panels, are the platform that program built.",
    stats: [
      {
        number: "3.4×",
        label: "CEO audience growth",
      },
      {
        number: "+65%",
        label: "Engagement",
      },
      {
        number: "+38%",
        label: "Inbound demos QoQ",
      },
    ],
    pdfLink: {
      label: "View CEO Profile",
      href: "https://www.linkedin.com/in/trevortemplar/",
    },
    visitLink: {
      label: "View Post",
      href: "https://www.linkedin.com/posts/trevortemplar_unfairadvantage-avisoai-dreamforce2025-share-7381332977869471746-PubI/",
    },
    slides: [
      {
        image: "/images/case-studies/study-31.jpg",
        link: "https://www.linkedin.com/posts/trevortemplar_unfairadvantage-avisoai-dreamforce2025-share-7381332977869471746-PubI/",
        caption: "Dreamforce Executive Keynote",
      },
      {
        image: "/images/case-studies/study-32.jpg",
        link: "https://www.linkedin.com/posts/trevortemplar_unfairadvantage-avisoai-dreamforce2025-share-7381332977869471746-PubI/",
        caption: "CEO Thought Leadership Post",
      },
      {
        image: "/images/case-studies/study-33.jpg",
        link: "https://www.linkedin.com/in/trevortemplar/",
        caption: "Trevor Templar CEO Profile",
      },
      {
        image: "/images/case-studies/study-34.jpg",
        link: "https://www.linkedin.com/feed/update/urn:li:share:7383542623992479745/",
        caption: "Aviso AI Category Positioning",
      },
      {
        image: "/images/case-studies/study-35.jpg",
        link: "https://www.aviso.com/",
        caption: "Aviso AI Platform Homepage",
      },
      {
        image: "/images/case-studies/study-36.jpg",
        link: "https://www.aviso.com/halo",
        caption: "Aviso AI Halo Intelligence",
      },
      {
        image: "/images/case-studies/study-37.jpg",
        link: "https://www.linkedin.com/in/trevortemplar/",
        caption: "Executive Influence & Network",
      },
    ],
  },
  {
    id: "grant-thornton-demand-engine",
    company: "Grant Thornton",
    industry: "B2B Consulting",
    focus: "SEO/SEM · Marketing Ops",
    role: "Assistant Manager, Marketing · Communications",
    title: "An SEO + automation demand engine",
    description:
      "Drove 50% organic traffic growth to 10,000 daily users through SEO & SEM, and delivered 20% lead & SAL growth with a 15% ops-cost reduction via SFMC + Pardot automation and segmentation, plus internal comms for 7,500+ employees.",
    stats: [
      {
        number: "+50%",
        label: "Organic traffic",
      },
      {
        number: "10K",
        label: "Daily users",
      },
      {
        number: "−15%",
        label: "Ops cost",
      },
    ],
    pdfLink: {
      label: "View Automation Playbook",
      href: "/images/case-studies/GT_Marketing_Automation_Playbook.pdf",
    },
    visitLink: {
      label: "Visit Site",
      href: "https://www.grantthornton.in/",
    },
    slides: [
      {
        image: "/images/case-studies/study-41.jpg",
        link: "https://lnkd.in/p/gVJ243SB",
        caption: "Grant Thornton Marketing Automation",
      },
      {
        image: "/images/case-studies/study-42.jpg",
        link: "https://www.google.com/search?q=dealtracker+india+m%26a+report",
        caption: "Dealtracker India M&A Report",
      },
      {
        image: "/images/case-studies/study-43.jpg",
        link: "https://www.grantthornton.in/insights/union-budget-2026/",
        caption: "Union Budget Insights",
      },
      {
        image: "/images/case-studies/study-44.jpg",
        link: "https://www.linkedin.com/posts/grant-thornton-bharat-llp_gtbharat-lifeatgt-throwbackthursday-activity-7042021902093070336-CYrY/",
        caption: "GT Bharat Employee & Culture Campaign",
      },
      {
        image: "/images/case-studies/study-45.jpg",
        link: "https://www.google.com/search?q=women+in+business+report+india+push+for+parity",
        caption: "Women in Business Report India",
      },
      {
        image: "/images/case-studies/study-46.jpg",
        link: "https://www.grantthornton.in/insights/",
        caption: "Grant Thornton Insights Hub",
      },
    ],
  },
  {
    id: "bajaj-finserv-performance-scale",
    company: "Bajaj Finserv",
    industry: "B2B",
    focus: "Performance · Web+App ecosystem",
    role: "Unit Manager, Marketing · Web Business & Group",
    title: "Performance at scale, spend down, ROI up",
    description:
      "Achieved 348% conversion growth via a strategic keyword portfolio, cut ad spend 60% while lifting ROI 40%, managed 100+ agencies and 3,000+ app screens. Recognised with the Emerging Star award for B2B web+app ecosystem leadership.",
    stats: [
      {
        number: "+348%",
        label: "Conversion growth",
      },
      {
        number: "−60%",
        label: "Ad spend",
      },
      {
        number: "+40%",
        label: "ROI",
      },
    ],
    pdfLink: {
      label: "View Live Ad",
      href: "https://adstransparency.google.com/?region=IN&domain=bajajfinserv.in",
    },
    visitLink: {
      label: "Download App",
      href: "https://play.google.com/store/apps/details?id=com.bfl.merchant",
    },
    slides: [
      {
        image: "/images/case-studies/study-51.jpg",
        link: "https://www.bajajfinserv.in/bbps-bharat-bill-payment-system",
        caption: "BBPS Bharat Bill Payment System",
      },
      {
        image: "/images/case-studies/study-52.jpg",
        link: "https://adstransparency.google.com/?region=IN&domain=bajajfinserv.in",
        caption: "Google Ads Transparency Hub",
      },
      {
        image: "/images/case-studies/study-53.jpg",
        link: "https://www.bajajfinserv.in/",
        caption: "Bajaj Finserv Ecosystem",
      },
      {
        image: "/images/case-studies/study-54.jpg",
        link: "https://play.google.com/store/apps/details?id=com.bfl.merchant",
        caption: "Bajaj Finserv Merchant App",
      },
      {
        image: "/images/case-studies/study-55.jpg",
        link: "https://adstransparency.google.com/?region=IN&domain=bajajfinserv.in",
        caption: "Performance Ad Campaigns",
      },
      {
        image: "/images/case-studies/study-56.jpg",
        link: "https://play.google.com/store/apps/details?id=com.bfl.merchant",
        caption: "Merchant Ecosystem App",
      },
      {
        image: "/images/case-studies/study-57.jpg",
        link: "https://adstransparency.google.com/?region=IN&domain=bajajfinserv.in",
        caption: "Paid Acquisition Transparency",
      },
      {
        image: "/images/case-studies/study-58.jpg",
        link: "https://play.google.com/store/apps/details?id=com.bfl.merchant",
        caption: "Merchant Mobile App Download",
      },
    ],
  },
  {
    id: "paytm-authorship-seo",
    company: "Paytm",
    industry: "B2B",
    focus: "Content · Authorship · SEO",
    role: "Team Lead, Marketing · Content",
    title: "Authoring content that ranks & retains",
    description:
      "Authored a Top-3 ranked \"Consumer Behavior\" e-book on Google & Bing, lifted page engagement +66% through SEO audits, improved retention 8% via lifecycle push strategy, and built brand partnerships with IRCTC, Medanta and TOI.",
    stats: [
      {
        number: "Top 3",
        label: "E-book ranking",
      },
      {
        number: "+66%",
        label: "Page engagement",
      },
      {
        number: "+8%",
        label: "User retention",
      },
    ],
    pdfLink: {
      label: "View Blog",
      href: "https://medium.com/paytm-blog/a-merchants-guide-to-payment-gateway-settlements-25aa2d6c746c",
    },
    visitLink: {
      label: "Visit Site",
      href: "https://www.paytmpayments.com/payment-gateway",
    },
    slides: [
      {
        image: "/images/case-studies/study-61.jpg",
        link: "https://www.google.com/search?q=irctc+train+tickets+on+paytm",
        caption: "IRCTC Train Ticket Partnerships",
      },
      {
        image: "/images/case-studies/study-62.jpg",
        link: "https://tickets.paytm.com/trains/",
        caption: "Paytm Trains Booking Platform",
      },
      {
        image: "/images/case-studies/study-63.jpg",
        link: "https://medium.com/paytm-blog/a-merchants-guide-to-payment-gateway-settlements-25aa2d6c746c",
        caption: "Merchant Payment Gateway Guide",
      },
      {
        image: "/images/case-studies/study-64.jpg",
        link: "https://www.paytmpayments.com/payment-gateway",
        caption: "Paytm Payment Gateway Platform",
      },
      {
        image: "/images/case-studies/study-65.jpg",
        link: "https://tickets.paytm.com/trains/",
        caption: "Paytm Travel & Ticketing Ecosystem",
      },
    ],
  },
];

export interface LinkedInPost {
  id: string;
  title: string;
  snippet: string;
  category: string;
  image: string;
  reactions: string;
  comments: string;
  impressions: string;
  link: string;
  date: string;
}

export const linkedinPostsData: LinkedInPost[] = [
  {
    id: "post-1",
    title: "Zomato is the most expensive middleman in history.",
    snippet: "",
    category: "FoodTech & Strategy",
    image: "/images/posts/post-1.jpg",
    reactions: "3.9K",
    comments: "209",
    impressions: "376K",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7406965571386277888/",
    date: "2025",
  },
  {
    id: "post-2",
    title: "How to destroy a marketing team in 3 easy steps.",
    snippet: "",
    category: "Marketing Leadership",
    image: "/images/posts/post-2.jpg",
    reactions: "1.2K",
    comments: "93",
    impressions: "102K",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7416728212803567616/",
    date: "2025",
  },
  {
    id: "post-3",
    title: "The most underpaid role in tech is not engineering. It is marketing.",
    snippet: "",
    category: "Tech Talent & Career",
    image: "/images/posts/post-3.jpg",
    reactions: "913",
    comments: "147",
    impressions: "80K",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7450792664255438848/",
    date: "2025",
  },
  {
    id: "post-4",
    title: "Day 1 as Head of Marketing. Here is my exact strategy.",
    snippet: "",
    category: "GTM & Strategy",
    image: "/images/posts/post-4.jpg",
    reactions: "591",
    comments: "55",
    impressions: "89K",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7412198488991510532/",
    date: "2025",
  },
  {
    id: "post-5",
    title: "Marketing is the only job where the CEO thinks they are better than the expert.",
    snippet: "",
    category: "Executive Strategy",
    image: "/images/posts/post-5.jpg",
    reactions: "484",
    comments: "91",
    impressions: "32K",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7432310942467579905/",
    date: "2025",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  impact: string;
  description: string;
  image: string;
  href: string;
  featured?: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "centime-ai-search",
    title: "Winning AI search before the market caught up",
    category: "SEO & AI Search",
    client: "Centime",
    year: "2025",
    impact: "13 AI Overview citations <90 days",
    description:
      "Took the brand from 0 → 13 Google AI Overview citations as category leader in under 90 days.",
    image: "/images/case-studies/study-11.jpg",
    href: "#case-studies",
  },
];
