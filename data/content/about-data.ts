export interface AboutHeroData {
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  images: {
    portrait: {
      url: string;
      alt: string;
    };
    landscape: {
      url: string;
      alt: string;
    };
  };
}

export interface AboutPhilosophyData {
  highlightText: string;
  normalText: string;
}

export interface WhyChooseMeCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface WhyChooseMeData {
  tagline: string;
  title: string;
  cards: WhyChooseMeCard[];
}

export interface CareerItem {
  id: string;
  date: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  category: string;
  location: string;
  highlights: string[];
}

export interface CareerTimelineData {
  tagline: string;
  title: string;
  subtitle: string;
  items: CareerItem[];
}

export interface AwardItem {
  id: string;
  title: string;
  icon: string;
  company: string;
  year: string;
  description: string;
  metrics: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface RecognitionCredentialsData {
  tagline: string;
  title: string;
  awards: AwardItem[];
  educationSubtitle: string;
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: string[];
  locationStatus: {
    city: string;
    workingModel: string;
    relocation: string;
  };
}

export const aboutHeroData: AboutHeroData = {
  tagline: "[ EXECUTIVE STORY & PHILOSOPHY ]",
  title: "ABOUT",
  titleHighlight: "MOLINA",
  description:
    "I bring brand, growth, content, and marketing operations together to build cohesive GTM systems that turn strategy into measurable business impact. My approach blends data, creativity, and a deep understanding of what makes audiences act.",
  cta: {
    label: "TALK TO ME",
    href: "/contact",
  },
  images: {
    portrait: {
      url: "/images/molina.jpg",
      alt: "Molina Rana - B2B Brand & Growth Leader",
    },
    landscape: {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Strategic Marketing & Growth Executive Session",
    },
  },
};

export const aboutPhilosophyData: AboutPhilosophyData = {
  highlightText:
    "I’m a B2B Brand & Growth Marketing Leader with 6+ years of experience working across SaaS, FinTech, Consulting, and B2C.",
  normalText:
    " My work sits at the intersection of brand, content, demand generation, marketing operations, and executive visibility; bringing these functions together into cohesive GTM systems. From building brand frameworks and content engines to optimizing campaigns, automation, and audience journeys, I focus on creating marketing that is not only compelling, but commercially meaningful. Across global markets, I’ve helped drive measurable growth in conversion, pipeline, engagement, and revenue while building systems that scale with the business.",
};

export const whyChooseMeData: WhyChooseMeData = {
  tagline: "Why choose me",
  title: "WHY CHOOSE ME",
  cards: [
    {
      id: "01",
      number: "01.",
      title: "B2B Growth Architect",
      description:
        "Over a decade architecting high-converting GTM engines, scaling ARR across enterprise SaaS and complex B2B technology ecosystems.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      alt: "Data & B2B Growth Strategy Analytics",
    },
    {
      id: "02",
      number: "02.",
      title: "Data-Led Brand Storytelling",
      description:
        "Merging analytical rigor with compelling brand positioning to elevate companies into undisputed category leaders.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      alt: "Executive Brand Storytelling Session",
    },
    {
      id: "03",
      number: "03.",
      title: "Full-Funnel Demand Gen",
      description:
        "Designing integrated campaign ecosystems spanning ABM, multi-channel acquisition, sales enablement, and marketing automation.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      alt: "Integrated Demand Generation Campaign Workspace",
    },
    {
      id: "04",
      number: "04.",
      title: "C-Suite & GTM Alignment",
      description:
        "Unifying marketing, sales, product, and executive leadership behind shared revenue metrics and operational velocity.",
      image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80",
      alt: "Executive Team Alignment & Strategy Meeting",
    },
  ],
};

export const careerTimelineData: CareerTimelineData = {
  tagline: "CAREER MILESTONES & LEADERSHIP",
  title: "CAREER EVOLUTION",
  subtitle:
    "A track record of building, scaling, and leading marketing engines across high-growth B2B SaaS, fintech, consulting, and digital enterprise ecosystems.",
  items: [
    {
      id: "centime",
      date: "Feb 2026 - Present",
      isCurrent: true,
      role: "Senior Manager, Marketing (Full-Funnel)",
      company: "Centime",
      category: "B2B SaaS",
      location: "Remote",
      highlights: [
        "Architecting full-funnel marketing strategies connecting brand positioning with demand generation.",
        "Scaling marketing automation & lead-to-revenue pipeline velocity across target B2B segments.",
      ],
    },
    {
      id: "aviso",
      date: "Aug 2024 - Jan 2026",
      isCurrent: false,
      role: "Manager, Marketing (Brand, Community & Comms)",
      company: "Aviso AI",
      category: "B2B SaaS",
      location: "Remote",
      highlights: [
        "Led brand positioning, executive communications, and strategic community growth.",
        "Spearheaded enterprise thought leadership campaigns across AI & Revenue Intelligence markets.",
      ],
    },
    {
      id: "highradius",
      date: "Jun 2023 - Aug 2024",
      isCurrent: false,
      role: "Manager, Marketing (Social & Email)",
      company: "HighRadius",
      category: "B2B SaaS",
      location: "Hyderabad",
      highlights: [
        "Directed multi-channel email lifecycle campaigns and global corporate social demand engine.",
        "Drove customer acquisition & retention metrics for enterprise Treasury & O2C solutions.",
      ],
    },
    {
      id: "grant-thornton",
      date: "Jul 2022 - Jun 2023",
      isCurrent: false,
      role: "Assistant Manager, Marketing (Comms)",
      company: "Grant Thornton Bharat",
      category: "Consulting",
      location: "New Delhi",
      highlights: [
        "Managed strategic PR, corporate communications, and brand reputation across national business press.",
        "Collaborated with C-suite partners to publish executive insights and industry reports.",
      ],
    },
    {
      id: "bajaj-finserv",
      date: "Nov 2021 - Jul 2022",
      isCurrent: false,
      role: "Unit Manager, Marketing (Web & Group)",
      company: "Bajaj Finserv",
      category: "Fintech / Group",
      location: "Pune",
      highlights: [
        "Oversaw web marketing operations, corporate portal performance, and UX optimization.",
        "Executed group-level digital campaigns across financial services product lines.",
      ],
    },
    {
      id: "paytm",
      date: "Jun 2020 - Oct 2021",
      isCurrent: false,
      role: "Team Lead, Marketing (Content)",
      company: "Paytm",
      category: "Fintech",
      location: "Noida",
      highlights: [
        "Led content marketing strategy and a team of strategists driving organic user growth.",
        "Scaled content operations for key financial products and B2B merchant solutions.",
      ],
    },
    {
      id: "mentormind",
      date: "Jun 2019 - Jun 2020",
      isCurrent: false,
      role: "Associate, Marketing (Content & Ops)",
      company: "Mentormind",
      category: "EdTech",
      location: "Hyderabad",
      highlights: [
        "Executed multi-channel digital campaigns, content creation, and early-stage marketing ops.",
        "Optimized user onboarding and social engagement pipelines.",
      ],
    },
  ],
};

export const recognitionCredentialsData: RecognitionCredentialsData = {
  tagline: "HONORS, ACADEMICS & GLOBAL MOBILITY",
  title: "CREDENTIALS & RECOGNITION",
  awards: [
    {
      id: "highflyer",
      title: "HighFlyer Award",
      icon: "🏆",
      company: "HighRadius",
      year: "2024",
      description:
        "Awarded for audience profiling and performance-driven social strategy: the persona intelligence engine behind major acquisition metrics and category leadership.",
      metrics: ["35K Relevant New Followers", "#1 Competitor Ranking"],
    },
    {
      id: "emerging-star",
      title: "Emerging Star Award",
      icon: "⭐",
      company: "Bajaj Finserv",
      year: "2022",
      description:
        "Recognised for innovation and leadership across the B2B web + app ecosystem, driving massive digital efficiency and conversion growth.",
      metrics: ["+348% Conversion Growth", "-60% Ad Spend", "+40% ROI Increase"],
    },
  ],
  educationSubtitle: "Trained to think. Certified to execute.",
  education: [
    {
      id: "psychology",
      degree: "M.A. Organizational Psychology",
      institution: "Specialized Graduate Study",
      grade: "9 CGPA",
      description:
        "How people decide, trust and act at work: the behavioural science behind audience insight, persona intelligence and messaging that converts.",
    },
    {
      id: "history",
      degree: "B.A. (Hons.) History",
      institution: "University of Delhi",
      grade: "8 CGPA",
      description:
        "Research rigour and narrative craft: finding the story in scattered evidence and telling it so people remember it.",
    },
  ],
  certifications: [
    { title: "AI in Marketing", issuer: "Darden (UVA)" },
    { title: "Viral Marketing", issuer: "Wharton (CXL)" },
    { title: "Social Media", issuer: "HubSpot" },
    { title: "Advanced SEO", issuer: "LinkedIn Learning" },
    { title: "UX Research", issuer: "Journey Mapping" },
  ],
  languages: ["English", "Hindi", "Dutch"],
  locationStatus: {
    city: "Based in New Delhi",
    workingModel: "Settled & remote-first since 2024",
    relocation: "Open to remote / relocation",
  },
};
