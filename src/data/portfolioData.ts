import { ProjectItem, TechItem, ExperienceItem, EducationInfo } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Phan Thi Ngoc Mai",
  englishName: "Phan Thi Ngoc Mai",
  shortName: "Ngoc Mai",
  monogram: "MP",
  title: "Software Engineer • Frontend & QA Testing",
  headline: "Software Engineer — Frontend Development & Manual Software Testing",
  summary:
    "An Information Technology graduate with a background in web development and manual software testing. Experienced in functional testing, UI testing, API testing, test case design, and defect reporting. Eager to develop professionally in software quality assurance and contribute to delivering reliable software products.",
  school: "Ho Chi Minh City University of Technology and Education",
  degree: "Bachelor of Engineering in Software Engineering",
  major: "Software Engineering",
  graduation: "2021 – 2025",
  gpa: "3.23 / 4.0",
  toeic: "TOEIC 640 (Listening & Reading)",
  email: "maiphan03.work@gmail.com",
  phone: "0337273891",
  formattedPhone: "0337 273 891",
  location: "Ho Chi Minh City, Vietnam",
  availability: "Available for QA / Frontend Roles",
  github: "https://github.com/PhanMai03",
  linkedin: "https://www.linkedin.com/in/phanmai03",
  portfolioUrl: "https://maiphan.vercel.app/",
  cvUrl: "/Phan-Thi-Ngoc-Mai-CV.pdf",
  activities: [
    {
      title: "Consolation Prize — Cyber Security CTF Competition 2023",
      org: "HCMUTE",
      year: "2023",
      impact: "Awarded a Consolation Prize in Cyber Security CTF Competition 2023 at HCMUTE.",
    },
    {
      title: "ASEAN Student Contest on Information Security (ASCIS)",
      org: "VNISA & Ministry of Information and Communications",
      year: "2023",
      impact: "Participated in the ASEAN Student Contest on Information Security (ASCIS) 2023.",
    },
    {
      title: "Mastering IT Academic Competition",
      org: "HCMUTE",
      year: "2025",
      impact: "Competed in the Mastering IT Academic Competition 2025 at HCMUTE.",
    },
  ],
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "clothing-ecommerce-management",
    title: "Clothing E-Commerce Management",
    period: "01/2025 – 06/2025",
    shortDescription:
      "Full-featured e-commerce admin dashboard with authentication, RBAC, CRUD operations, and Postman API testing.",
    fullDescription:
      "Developed a full-featured e-commerce admin dashboard with authentication, role-based access control, and CRUD operations for managing products, orders, and users. Implemented order workflows and admin analytics dashboards. Designed and executed manual test cases for functional and UI testing, performed API testing with Postman, and reported defects with clear reproduction steps.",
    features: [
      "Developed a full-featured e-commerce admin dashboard with authentication, role-based access control, and CRUD operations for managing products, orders, and users.",
      "Implemented responsive admin interfaces and management dashboards.",
      "Designed and executed manual test cases for functional and UI testing, performed API testing with Postman, and reported defects with clear reproduction steps.",
    ],
    technologies: ["ReactJS", "NextJS", "Tailwind CSS", "RESTful APIs", "Postman"],
    role: "Frontend Developer & Manual Tester",
    repository: "https://github.com/PhanMai03/E-commerce-Management-System",
    liveUrl: "https://share-and-care-admin-lovat.vercel.app/",
    image: "/projects/Management.png",
    badge: "E-Commerce & QA",
    metrics: ["RBAC Access Control", "Postman Verified", "CRUD Management"],
  },
  {
    id: "book-website",
    title: "Book Website",
    period: "04/2024 – Present",
    shortDescription:
      "Full-featured online bookstore platform with advanced search, category-based filtering, shopping cart, COD checkout, order tracking, and role-based admin dashboard.",
    fullDescription:
      "Developed a full-featured online bookstore platform with advanced search, category-based filtering, shopping cart, COD checkout, and order tracking. Implemented role-based access control (Admin/User) and built an admin dashboard for managing books, categories, inventory, users, and orders. Integrated RESTful APIs and optimized state management for dynamic data rendering and responsive user interactions. Collaborated on UI/UX improvements to enhance usability and customer shopping experience.",
    features: [
      "Developed a full-featured online bookstore platform with advanced search, category-based filtering, shopping cart, COD checkout, and order tracking.",
      "Implemented role-based access control (Admin/User) and built an admin dashboard for managing books, categories, inventory, users, and orders.",
      "Integrated RESTful APIs and optimized state management for dynamic data rendering and responsive user interactions.",
      "Collaborated on UI/UX improvements to enhance usability and customer shopping experience.",
    ],
    technologies: ["ReactJS", "Tailwind CSS", "RESTful APIs", "JavaScript"],
    role: "Frontend Developer",
    repository: "https://github.com/PhanMai03/book-website",
    liveUrl: "https://book-website-xi-eight.vercel.app/",
    image: "/projects/Book.png",
    badge: "Web Platform",
    metrics: ["Advanced Search", "COD Checkout Flow", "Admin Dashboard"],
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    period: "09/2024 – Present",
    shortDescription:
      "Clinical and hospital administration software verified through comprehensive manual, functional, UI, and API verification cycles.",
    fullDescription:
      "Performed manual and functional testing for a mission-critical hospital management system based on business requirements. Designed and executed test cases, verified UI and data behavior across clinical workflows, and reported defects using Jira with Excel test data management.",
    features: [
      "Perform manual and functional testing for a hospital management system based on business requirements.",
      "Design and execute test cases, verify UI and data behavior, and retest fixed defects.",
      "Report and track defects using Jira; manage test data with Excel.",
    ],
    technologies: ["Web UI Testing", "Functional Testing", "API Testing", "Jira", "Excel"],
    role: "Manual Tester Intern",
    repository: "https://github.com/PhanMai03",
    liveUrl: null,
    image: "/projects/Agrigo.png",
    badge: "Healthcare QA",
    metrics: ["Clinical Test Scenarios", "Jira Defect Lifecycle", "Excel Test Data"],
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: "Healthcare Solution Viet Nam",
    role: "Manual Tester Intern",
    period: "09/2024 – Present",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Perform manual and functional testing for a hospital management system based on business requirements.",
    achievements: [
      "Perform manual and functional testing for a hospital management system based on business requirements.",
      "Design and execute test cases, verify UI and data behavior, and retest fixed defects.",
      "Report and track defects using Jira; manage test data with Excel.",
    ],
    technologies: ["Web UI Testing", "Functional Testing", "API Testing", "Test Case Design", "Defect Reporting", "Jira", "Excel"],
  },
  {
    company: "FPT Software",
    role: "Frontend Developer Intern",
    period: "06/2024 – 09/2024",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Collaborated in an 18-member Agile team to build a responsive Single Page Application (SPA) for an internal automation system.",
    achievements: [
      "Collaborated in an 18-member Agile team to build a responsive Single Page Application (SPA) for an internal automation system.",
      "Implemented front-end features using ReactJS and Tailwind CSS with an emphasis on reusable components and scalable structure.",
      "Integrated RESTful APIs and dynamically rendered data according to functional specifications.",
      "Maintained code quality and improved UI performance to deliver a smoother user experience.",
    ],
    technologies: ["ReactJS", "Tailwind CSS", "TypeScript", "JavaScript", "RESTful APIs", "Agile / Scrum", "SPA"],
  },
];

export const EDUCATION_DATA: EducationInfo = {
  school: "Ho Chi Minh City University of Technology and Education",
  degree: "Major in Software Engineering",
  major: "Software Engineering",
  period: "2021 – 2025",
  graduationYear: "2025",
  gpa: "3.23 / 4.0",
  toeic: "TOEIC 640 (Listening & Reading)",
  focus: [
    "Software Quality Assurance (Functional, UI, API Testing)",
    "Web Application Development (ReactJS, NextJS, TypeScript, Tailwind CSS)",
    "Test Case Design & Defect Reporting (Jira, Postman, Excel)",
    "Database Systems (SQL Server, RESTful APIs, NodeJS)",
  ],
};

export const CV_SKILLS_CATEGORIES = [
  {
    id: "testing-qa",
    title: "Testing & QA",
    skills: ["Web UI Testing", "Functional Testing", "API Testing", "Test Case Design", "Defect Reporting"],
    description: "Manual and functional verification for web platforms and mission-critical hospital systems.",
  },
  {
    id: "frontend",
    title: "Front-end Development",
    skills: ["ReactJS", "NextJS", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    description: "Responsive Single Page Applications with reusable component architecture and smooth UI performance.",
  },
  {
    id: "backend",
    title: "Back-end & APIs",
    skills: ["NodeJS", "RESTful APIs"],
    description: "API contract consumption and dynamic data rendering.",
  },
  {
    id: "tools-database",
    title: "Tools & Database",
    skills: ["Postman", "Git / GitHub", "Jira", "Figma", "SQL Server", "Microsoft Office / Excel", "AI-assisted tools"],
    description: "Industry-standard engineering, testing, sprint management, and defect triage toolsets.",
  },
];
