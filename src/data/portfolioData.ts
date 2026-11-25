import { ProjectItem, TechItem, ExperienceItem, EducationInfo } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Phan Thi Ngoc Mai",
  englishName: "Phan Thi Ngoc Mai",
  shortName: "Ngoc Mai",
  monogram: "MP",
  title: "Fullstack Developer Intern • React & QA Testing",
  headline: "Fullstack Developer Intern with strong hands-on experience in React frontend architecture, RESTful API integration, and relational data workflows.",
  summary:
    "Fullstack Developer Intern with strong hands-on experience in React frontend architecture, RESTful API integration, and relational data workflows. Skilled in building scalable UI components, optimizing web performance, and delivering reliable web applications.",
  school: "Ho Chi Minh City University of Technology and Education",
  degree: "Software Engineering",
  major: "Software Engineering",
  graduation: "2021 – 2025",
  gpa: "3.23 / 4.0",
  toeic: "TOEIC 640 (Listening & Reading)",
  email: "maiphan03.work@gmail.com",
  phone: "(+84) 337 273 891",
  formattedPhone: "(+84) 337 273 891",
  location: "Ho Chi Minh City, Vietnam",
  availability: "Available for Developer / QA Roles",
  github: "https://github.com/PhanMai03",
  linkedin: "https://www.linkedin.com/in/phanmai03",
  portfolioUrl: "https://maiphan.vercel.app/",
  cvUrl: "/Phan-Thi-Ngoc-Mai-CV.pdf",
  activities: [
    {
      title: "Consolation Prize — Cyber Security CTF Competition (2023)",
      org: "HCMUTE",
      year: "2023",
      impact: "Awarded Consolation Prize in Cyber Security CTF Competition (2023) at HCMUTE.",
    },
    {
      title: "Participant — ASEAN Student Contest on Information Security (ASCIS)",
      org: "VNISA & Ministry of Information and Communications",
      year: "2023",
      impact: "Participated in ASEAN Student Contest on Information Security (ASCIS) 2023.",
    },
    {
      title: "Competitor — Mastering IT Academic Competition (2025)",
      org: "HCMUTE",
      year: "2025",
      impact: "Competed in Mastering IT Academic Competition (2025) at HCMUTE.",
    },
  ],
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "sharecare",
    title: "ShareCare",
    period: "Mar 2025 – May 2025",
    shortDescription:
      "Administrative e-commerce platform for clothing management with real-time workflows and access control.",
    fullDescription:
      "Built a centralized admin dashboard with RBAC, revenue analytics, and product/order CRUD operations, integrating WebSockets for real-time customer chat and live status updates.",
    features: [
      "Built a centralized admin dashboard with RBAC, revenue analytics, and product/order CRUD operations.",
      "Integrated WebSockets for real-time customer chat and live status updates.",
      "Verified API contracts and endpoints with Postman test collections.",
    ],
    technologies: ["React", "NextJS", "Tailwind CSS", "WebSocket", "Postman", "RESTful APIs"],
    role: "Frontend Developer",
    repository: "https://github.com/PhanMai03/E-commerce-Management-System",
    liveUrl: "https://share-and-care-admin-lovat.vercel.app/",
    image: "/projects/Management.png",
    badge: "E-Commerce & Real-time",
    metrics: ["RBAC Access Control", "WebSocket Chat", "Postman Verified"],
  },
  {
    id: "bookstore",
    title: "BookStore",
    period: "Apr 2026 – Sep 2026",
    shortDescription:
      "Online bookstore platform offering smooth catalog browsing, order processing, and inventory management.",
    fullDescription:
      "Built an interactive storefront with multi-filter search, category browsing, and cart checkout, backed by role-based admin inventory controls and RESTful API integration.",
    features: [
      "Built an interactive storefront with multi-filter search, category browsing, and cart checkout.",
      "Backed by role-based admin inventory controls and RESTful API integration.",
      "Optimized responsive interactions with Tailwind CSS and React state workflows.",
    ],
    technologies: ["React", "Tailwind CSS", "RESTful APIs", "JavaScript"],
    role: "Frontend Developer",
    repository: "https://github.com/PhanMai03/book-website",
    liveUrl: "https://book-website-xi-eight.vercel.app/",
    image: "/projects/Book.png",
    badge: "Web Storefront",
    metrics: ["Multi-filter Search", "Cart Checkout", "Admin Inventory"],
  },
  {
    id: "agrigomarket",
    title: "AgrigoMarket",
    period: "Nov 2026 – Present",
    shortDescription:
      "Agricultural e-commerce platform connecting local farmers directly with consumers and wholesalers.",
    fullDescription:
      "Developed multi-criteria filtering (harvest date, organic certification, location), cart/checkout flows, and real-time order tracking, validated via cross-viewport manual UI and API testing.",
    features: [
      "Developed multi-criteria filtering (harvest date, organic certification, location).",
      "Engineered cart/checkout flows and real-time order tracking with WebSockets.",
      "Validated platform via cross-viewport manual UI and comprehensive API testing.",
    ],
    technologies: ["React", "Tailwind CSS", "WebSocket", "Postman", "RESTful APIs"],
    role: "Frontend Developer",
    repository: "https://github.com/PhanMai03/agrigo-web",
    liveUrl: "https://agrigo-web.vercel.app/",
    image: "/projects/Agrigo.png",
    badge: "AgriTech Marketplace",
    metrics: ["Multi-criteria Filter", "Real-time Tracking", "Postman API Verified"],
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: "Healthcare Solution Viet Nam",
    role: "Fullstack Developer Intern",
    period: "Sep 2026 – Present",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Develop modular React components, RBAC workflows, and localized UIs for a Hospital Information System (HIS).",
    achievements: [
      "Develop modular React components, RBAC workflows, and localized UIs for a Hospital Information System (HIS).",
      "Optimize initial page load speed using route-based code splitting and lazy loading across core clinical modules.",
      "Integrate RESTful APIs, handle async states, and validate data flows via Postman and SQL Server.",
    ],
    technologies: ["React", "RBAC", "Code Splitting", "Lazy Loading", "RESTful APIs", "Postman", "SQL Server"],
  },
  {
    company: "FPT Software",
    role: "Frontend Developer Intern",
    period: "Jun 2024 – Sep 2024",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Collaborated in an 18-member Agile team to build a responsive SPA using React and Tailwind CSS.",
    achievements: [
      "Collaborated in an 18-member Agile team to build a responsive SPA using React and Tailwind CSS.",
      "Integrated RESTful APIs to dynamically render data according to functional specifications.",
      "Resolved UI defects and edge-case errors to ensure cross-browser compatibility.",
    ],
    technologies: ["React", "Tailwind CSS", "SPA", "RESTful APIs", "Agile / Scrum", "Cross-browser QA"],
  },
];
