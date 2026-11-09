import { ProjectItem, TechItem, ExperienceItem, AchievementItem, EducationInfo } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Phan Thi Ngoc Mai",
  shortName: "Ngoc Mai",
  title: "Full-Stack Software Engineer",
  headline: "Full-Stack Development & Modern Software Engineering",
  subtitle:
    "Software Engineering graduate from HCMUTE (GPA 3.23, TOEIC 640). Building modern full-stack web applications with React, Next.js, Node.js, and scalable databases (SQL Server, MongoDB). Leveraging AI-accelerated tooling to engineer robust, high-performance systems.",
  school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
  major: "Software Engineering",
  graduation: "2025",
  gpa: "3.23/4.0",
  toeic: "640",
  email: "maiphan03.work@gmail.com",
  phone: "0337273891",
  github: "https://github.com/PhanMai03",
  linkedin: "https://www.linkedin.com/in/phanmai03",
  portfolioUrl: "https://maiphan.vercel.app",
  cvUrl: "https://drive.google.com/file/d/16beiSwcN8t9mFwE-s0K7pcD7sLySw49-/view?usp=sharing",
  location: "Ho Chi Minh City, Vietnam",
  availability: "Available for full-time opportunities",
  focusAreas: [
    "Full-Stack Web Development (React, Next.js, Node.js)",
    "Database Engineering (SQL Server, MongoDB)",
    "API Architecture & Verification (Postman, RESTful)",
    "AI-Augmented Engineering (Antigravity, Gemini, ChatGPT)",
  ],
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "clothing-ecommerce-management",
    title: "Clothing E-commerce Management",
    shortDescription:
      "Comprehensive administration suite designed for high-volume apparel commerce, inventory control, and multi-tier user authorization.",
    fullDescription:
      "A production-oriented e-commerce back-office management console engineered for apparel retail operations. The system delivers end-to-end administration capabilities spanning real-time stock auditing, product catalog lifecycle management, dynamic sales metrics visualization, and strict role-based access control (RBAC).",
    features: [
      "Role-Based Access Control (Admin, Inventory Manager, Sales Staff) with protected route guards.",
      "Real-time inventory mutation tracking and low-stock automated threshold alerts.",
      "Comprehensive order lifecycle pipeline (Pending, Paid, Shipped, Returned) with invoice generation.",
      "Dynamic data analytics charts for revenue, popular SKUs, and user traffic metrics.",
      "Optimized data grid with multi-column sorting, debounced search, and batch actions.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API", "Chart.js"],
    role: "Frontend / Full-stack Developer",
    repository: "https://github.com/PhanMai03/E-commerce-Management-System",
    liveUrl: null,
    image: "/projects/Management.png",
    badge: "Enterprise System",
    metrics: ["Role-Based ACL", "Inventory Tracking", "Sub-second Mutations"],
    screenshots: [
      { title: "Dashboard & Real-time Metrics", image: "/projects/Management.png" },
      { title: "Inventory Control & Catalog Grid", image: "/projects/Management.png" },
      { title: "Order Pipeline & Invoice Status", image: "/projects/Management.png" },
    ],
  },
  {
    id: "book-website",
    title: "Book Website",
    shortDescription:
      "Modern digital bookstore and reader platform featuring instant faceted filtering, responsive cart state, and user reviews.",
    fullDescription:
      "An interactive web platform tailored for discovering, exploring, and purchasing books across curated literary categories. Built with modern component architecture, providing smooth client-side routing, localized shopping cart persistence, dynamic search, and comprehensive book preview pages.",
    features: [
      "Dynamic faceted search and filtering across genre, author, rating, and price ranges.",
      "Synchronized shopping cart with client-side state caching and instant checkout flow.",
      "Detailed book showcase view with user reviews, synopsis, and related book suggestions.",
      "Personal bookmarked reading list and user favorites management.",
      "Fluid, responsive UI engineered with mobile-first layout principles.",
    ],
    technologies: ["ReactJS", "Tailwind CSS", "JavaScript", "REST API", "HTML5/CSS3"],
    role: "Frontend Developer",
    repository: "https://github.com/PhanMai03/book-website",
    liveUrl: null,
    image: "/projects/Book.png",
    badge: "Consumer Web Application",
    metrics: ["Instant Search", "Responsive UI", "Cart State Sync"],
    screenshots: [
      { title: "Book Catalog & Faceted Search", image: "/projects/Book.png" },
      { title: "Book Details & Reader Reviews", image: "/projects/Book.png" },
      { title: "Shopping Cart & Checkout Flow", image: "/projects/Book.png" },
    ],
  },
  {
    id: "agrigo-web",
    title: "Agrigo Web",
    shortDescription:
      "Digital agricultural marketplace connecting farm-to-table supply chains with real-time produce ordering and vendor dispatching.",
    fullDescription:
      "A specialized agricultural e-commerce and supply distribution platform engineered to bridge local producers directly with wholesale and retail buyers. Implements real-time product stock tracking, regional order dispatch workflows, and responsive customer shopping journeys.",
    features: [
      "Dynamic agricultural produce catalog with freshness grading, pricing tiers, and seasonal filtering.",
      "Integrated shopping cart and localized order placement pipeline with delivery schedule selection.",
      "Vendor and farm dispatch dashboard tracking fulfillment status from harvest to doorstep.",
      "Mobile-responsive client architecture optimized for low-bandwidth rural connectivity.",
      "Secure REST API integration with real-time inventory and pricing synchronization.",
    ],
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "REST API", "Node.js"],
    role: "Frontend / Full-stack Developer",
    repository: "https://github.com/PhanMai03/agrigo-web",
    liveUrl: null,
    image: "/projects/Agrigo.png",
    badge: "AgriTech Platform",
    metrics: ["Direct Supply Chain", "Sub-second Catalog", "Order Dispatch Pipeline"],
    screenshots: [
      { title: "Produce Catalog & Freshness Grading", image: "/projects/Agrigo.png" },
      { title: "Farm Delivery Scheduling & Cart", image: "/projects/Agrigo.png" },
      { title: "Vendor Dispatch & Supply Tracking", image: "/projects/Agrigo.png" },
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  // Programming Languages
  { name: "JavaScript", tag: "Core Language", category: "Languages" },
  { name: "TypeScript", tag: "Strict Type Safety", category: "Languages" },

  // Frameworks & Runtimes
  { name: "React", tag: "UI Component Architecture", category: "Frameworks" },
  { name: "NextJS", tag: "Full-Stack & SSR", category: "Frameworks" },
  { name: "NodeJS", tag: "Backend Runtime", category: "Frameworks" },

  // Databases
  { name: "SQL Server", tag: "Relational Database", category: "Databases" },
  { name: "MongoDB", tag: "Document Database", category: "Databases" },

  // Tools
  { name: "Postman", tag: "API Verification", category: "Tools" },
  { name: "Git/GitHub", tag: "Version Control & CI", category: "Tools" },
  { name: "Jira", tag: "Agile Project Tracking", category: "Tools" },
  { name: "Figma", tag: "UI/UX Mockups", category: "Tools" },

  // AI Tools
  { name: "Antigravity", tag: "AI Coding Assistant", category: "AI Tools" },
  { name: "Google Gemini", tag: "Multimodal AI", category: "AI Tools" },
  { name: "ChatGPT", tag: "Generative Reasoning", category: "AI Tools" },
  { name: "Codex", tag: "Code Synthesis", category: "AI Tools" },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: "Healthcare Solution Viet Nam",
    role: "Manual Tester Intern",
    period: "08/2026 – Present",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Working within a professional software development environment, collaborating cross-functionally with engineers to verify feature behavior and hospital management system quality.",
    achievements: [
      "Collaborated closely with engineering team members to execute functional, integration, and user-flow validation on clinical hospital software.",
      "Authored and executed structured test cases against detailed functional specifications, verifying system reliability.",
      "Identified, documented, and triaged system defects with clear reproduction steps, speeding up developer bug resolution cycles.",
      "Observed and contributed to quality assurance standards in healthcare-grade software where data accuracy is mission-critical.",
    ],
    technologies: ["Hospital Management System", "Manual Testing", "Test Case Design", "Defect Triage", "QA Workflows"],
  },
  {
    company: "FPT Software",
    role: "Frontend Developer Intern",
    period: "06/2024 – 09/2024",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Participated in production web application development utilizing React and TypeScript within an enterprise Agile/Scrum delivery environment.",
    achievements: [
      "Participated in frontend development for responsive web application modules utilizing ReactJS and TypeScript.",
      "Collaborated within an Agile/Scrum framework with daily standups, sprint reviews, and estimation poker.",
      "Employed GitLab version control for feature branching, code reviews, and pull request workflows.",
      "Ensured component reusability, cross-browser compatibility, and seamless integration with backend RESTful APIs.",
    ],
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "GitLab", "RESTful APIs", "Agile / Scrum"],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
  degree: "Bachelor of Engineering",
  major: "Software Engineering",
  period: "2021 – 2025",
  graduationYear: "2025",
  gpa: "3.23 / 4.0",
  toeic: "640",
  focus: [
    "Object-Oriented Software Design & Architecture",
    "Web Application Engineering (Frontend & Backend)",
    "Relational Database Systems (PostgreSQL, SQL)",
    "Data Structures, Algorithms & Distributed Patterns",
  ],
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "Cyber Security CTF 2023",
    year: "2023",
    award: "Consolation Prize (Giải Khuyến Khích)",
    organization: "HCMUTE Security Division",
    description:
      "Competed in Capture The Flag technical challenges testing vulnerability analysis, web exploitation defenses, and cryptographic problem solving.",
  },
  {
    title: "ASCIS 2023",
    year: "2023",
    award: "Contestant Participant",
    organization: "ASEAN Student Contest on Information Security",
    description:
      "Participated in the premier ASEAN collegiate information security competition, applying analytical security and system defense skills.",
  },
  {
    title: "Mastering IT 2025",
    year: "2025",
    award: "Academic & Tech Competitor",
    organization: "University Information Technology Division",
    description:
      "Participated in advanced software development and computer science problem-solving symposium representing Software Engineering.",
  },
];

