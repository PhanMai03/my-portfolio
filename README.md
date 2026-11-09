<div align="center">

# 🌐 Phan Thi Ngoc Mai — Software Engineer Portfolio

<p align="center">
  <strong>A high-performance, interactive personal developer portfolio featuring physics-driven 3D WebGL graphics, an interconnected hexagonal skills hive, and modern responsive design.</strong>
</p>

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel_Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](./LICENSE)

<br />

[🔗 **Live Demo**](https://maiphan.vercel.app) • [📄 **Resume / CV**](https://drive.google.com/file/d/16beiSwcN8t9mFwE-s0K7pcD7sLySw49-/view?usp=sharing) • [💼 **LinkedIn**](https://linkedin.com/in/phanmai03) • [🐙 **GitHub**](https://github.com/PhanMai03) • [📧 **Email**](mailto:maiphan03.work@gmail.com)

</div>

---

## 📖 Overview

This repository hosts the source code for the personal portfolio of **Phan Thi Ngoc Mai**, a Software Engineering graduate from **Ho Chi Minh City University of Technology and Education (HCMUTE)**. 

Built with a strong focus on **performance**, **clean architecture**, and **creative engineering**, the portfolio showcases full-stack web applications, technical skillsets, and professional experience through interactive 3D elements and responsive UI layouts.

---

## ✨ Key Features

- **🪪 Interactive 3D Developer Access Pass**:
  - Real-time WebGL rendering powered by **Three.js** and **React Three Fiber**.
  - Natural rope physics and spring damping: click-to-flip, mouse-driven drag inspection, and ceiling-anchored woven lanyard.
  - Procedural high-resolution canvas textures with automated GPU VRAM memory disposal (`dispose()`) to eliminate memory leaks.
  - Fallback error boundary for low-spec hardware or devices without WebGL acceleration.

- **🐝 Interconnected Hexagonal Skills Hive**:
  - Custom mathematical SVG grid with pointy-top hexagonal geometry.
  - Strict domain clustering: **AI Tools**, **Databases**, **Languages**, **Frameworks & UI**, and **DevOps & Tools**.
  - Interactive Inspector card displaying proficiency level, engineering specifications, and production-applied projects upon node selection.

- **⏳ Alternating Experience Timeline**:
  - Central glowing axis detailing professional milestones at **Healthcare Solution Viet Nam** (Manual Tester Intern) and **FPT Software** (Frontend Developer Intern).
  - Clean, concise descriptions with contextual technology pills.

- **🎓 Integrated Academic & Credentials Strip**:
  - Highlights bachelor's degree in Software Engineering (HCMUTE, GPA 3.23 / 4.0), **TOEIC 640**, and awards (**Consolation Prize @ Cyber Security CTF 2023**, **ASEAN ASCIS**).

- **⚡ Linear / Raycast-Style Command Palette (`Cmd + K` / `Ctrl + K`)**:
  - Instant keyboard-driven navigation across sections, one-click email copying, resume download, and quick theme toggling.

- **📬 Production-Ready Contact System**:
  - Form validation with **EmailJS** integration, direct dispatch status indicators, and one-click email clipboard copy button.

- **🌓 System-Aware Dark / Light Theme**:
  - Smooth theme transitions with local storage persistence and system preference detection.

- **📱 100% Fully Responsive Architecture**:
  - Engineered from mobile devices up to ultra-wide displays using Tailwind CSS v4 container queries and flex/grid systems.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, React Router v7 |
| **Build & Tooling** | Vite 7, ESLint 9, Node.js |
| **3D & WebGL** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Styling & Design** | Tailwind CSS v4, Lucide React Icons |
| **Email & APIs** | EmailJS (`@emailjs/browser`) |
| **Deployment & CI/CD** | Vercel, GitHub Actions |

---

## 📁 Project Structure

```text
my-portfolio/
├── public/                     # Static assets & technology logos
│   ├── projects/               # Project screenshots & previews
│   └── tech/                   # Vector SVGs (Node.js, MongoDB, SQL Server, AI logos)
├── src/
│   ├── assets/                 # Brand assets & logos
│   ├── components/             # Modular UI sections & components
│   │   ├── 3d/                 # Three.js 3D Canvas & WebGL Lanyard Pass
│   │   │   └── DistributedNetwork3D.tsx
│   │   ├── AboutSection.tsx    # Bio narrative, avatar container & credentials strip
│   │   ├── CommandPaletteModal.tsx # Cmd + K interactive quick navigation
│   │   ├── ContactSection.tsx  # Contact form, direct links & footer colophon
│   │   ├── ExperienceSection.tsx # Vertical alternating work experience timeline
│   │   ├── HeroSection.tsx     # Hero headline, CTAs & social links
│   │   ├── Navbar.tsx          # Floating pill navigation bar & theme toggle
│   │   ├── ProjectsSection.tsx # Featured technical projects showcase
│   │   └── SkillsSection.tsx   # Interactive hexagonal skills hive
│   ├── context/                # React context providers (ThemeContext)
│   ├── data/                   # Decoupled static datasets
│   │   ├── portfolioData.ts    # Profile info, projects & experience records
│   │   └── skillsHiveData.ts   # Hexagonal node coordinates & metadata
│   ├── lib/                    # Pure math & geometry utilities
│   │   ├── hexagonGeometry.ts  # Pointy-top hexagon SVG math
│   │   └── utils.ts            # Tailwind merge & clsx helpers
│   ├── pages/                  # Route views (Home.tsx, NotFound.tsx)
│   ├── types/                  # Shared TypeScript interfaces & types
│   ├── App.tsx                 # Root application component with routing
│   ├── index.css               # Global styling & Tailwind directives
│   └── main.tsx                # React DOM entry point
├── jsconfig.json               # Path alias resolution for editor
├── tsconfig.json               # TypeScript compiler & alias configuration (@/*)
├── vite.config.js              # Vite build setup, manual chunks & tailwindcss plugin
└── package.json                # Project dependencies & npm scripts
```

---

## 🚀 Quick Start / Local Setup

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 2. Clone the Repository

```bash
git clone https://github.com/PhanMai03/my-portfolio.git
cd my-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables (Optional)

Create a `.env` file in the root directory if you want to use EmailJS for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Launch Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 6. Production Build & Linting

```bash
# Check code quality with ESLint
npm run lint

# Build production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Environment Variables

| Variable | Required | Description |
| :--- | :---: | :--- |
| `VITE_EMAILJS_SERVICE_ID` | Optional | Service ID provided by your EmailJS account. |
| `VITE_EMAILJS_TEMPLATE_ID` | Optional | Email template ID configured in EmailJS dashboard. |
| `VITE_EMAILJS_PUBLIC_KEY` | Optional | Public client key for authenticating API requests. |

*(Note: If omitted, the contact form defaults to standard simulated dispatch feedback without breaking the UI).*

---

## 📬 Contact & Connect

- **Engineer**: Phan Thi Ngoc Mai
- **Location**: Ho Chi Minh City, Vietnam
- **Email**: [maiphan03.work@gmail.com](mailto:maiphan03.work@gmail.com)
- **LinkedIn**: [linkedin.com/in/phanmai03](https://linkedin.com/in/phanmai03)
- **GitHub**: [github.com/PhanMai03](https://github.com/PhanMai03)
- **Portfolio**: [maiphan.vercel.app](https://maiphan.vercel.app)
- **Resume / CV**: [Google Drive Link](https://drive.google.com/file/d/16beiSwcN8t9mFwE-s0K7pcD7sLySw49-/view?usp=sharing)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — feel free to use and adapt this codebase for your own portfolio. Attribution is appreciated!

<div align="center">
  <sub>Designed &amp; Built with ❤️ by <a href="https://github.com/PhanMai03">Phan Thi Ngoc Mai</a>. © 2026. All rights reserved.</sub>
</div>
