import type { LucideIcon } from "lucide-react";
import { BrainCircuit, BriefcaseBusiness, Code2, Database, Rocket, ShieldCheck } from "lucide-react";

export const profile = {
  name: "Kutraleeswaran",
  handle: "Kutraleeswaran",
  role: "Computer Science graduate and solo product builder",
  email: "pekutraleeswaran2003@gmail.com",
  phone: "+91 95975 81629",
  github: "https://github.com/kutral",
  linkedin: "https://linkedin.com/in/kutraleeswaranb/",
  cv: "assets/Kutraleeswaran_CV.pdf",
};

export const navItems = [
  { label: "Profile", href: "#hero" },
  { label: "Experience", href: "#about" },
  { label: "Apps", href: "#features" },
  { label: "Systems", href: "#systems" },
  { label: "Hire me", href: "#contact" },
];

export const apps = [
  {
    name: "CantSleep",
    storeName: "CantSleep: Sleep Aid & Sounds",
    description: "Rescue Mode, breathing exercises, sleep sounds, journaling, reminders, and local habit insights for restless nights.",
    icon: "assets/app-cantsleep.webp",
    href: "https://play.google.com/store/apps/details?id=com.cantsleep.app",
  },
  {
    name: "Essara",
    storeName: "Essara-Expense & Bill Tracker",
    description: "India-first private expense, bill, subscription, receipt, budget, and investment tracking without bank login.",
    icon: "assets/app-essara.webp",
    href: "https://play.google.com/store/apps/details?id=space.essara.app",
  },
  {
    name: "OneThing",
    storeName: "OneThing: Focus & Tasks",
    description: "A focused, offline-first productivity app for choosing one important task and working through clean focus sessions.",
    icon: "assets/app-onething.webp",
    href: "https://play.google.com/store/apps/details?id=com.essara.onething",
  },
];

export const featureCards: Array<{
  eyebrow: string;
  title: string;
  icon: "playstore" | "java" | "zoho";
  points: string[];
  linkLabel: string;
  href: string;
}> = [
  {
    eyebrow: "01",
    title: "Play Store portfolio.",
    icon: "playstore",
    points: [
      "Solo-developed and launched 3 Android products end to end.",
      "Handled product design, debugging, release builds, and Play publishing.",
      "Built with AI-assisted workflows, prompt engineering, and agentic iteration.",
      "Kept user-facing copy honest, focused, and launch-ready.",
    ],
    linkLabel: "View apps",
    href: "#features",
  },
  {
    eyebrow: "02",
    title: "Java and API foundations.",
    icon: "java",
    points: [
      "Built Knowledge Nexus with Servlets, JSP, JDBC, MySQL, and JSON APIs.",
      "Implemented CRUD, borrow-return flows, login, and prepared statements.",
      "Designed console systems with MVC and MVP architecture patterns.",
    ],
    linkLabel: "See systems",
    href: "#systems",
  },
  {
    eyebrow: "03",
    title: "Zoho-trained engineering.",
    icon: "zoho",
    points: [
      "Completed Zoho School incubation in Java, OOP, design patterns, and SOLID.",
      "Practiced data structures, algorithmic problem solving, and debugging.",
      "Explored modern AI tools to sharpen development speed and software design.",
    ],
    linkLabel: "Experience",
    href: "#about",
  },
];

export const skills: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Java", icon: Code2 },
  { label: "REST APIs", icon: Rocket },
  { label: "MySQL", icon: Database },
  { label: "Testing", icon: ShieldCheck },
  { label: "AI Workflows", icon: BrainCircuit },
  { label: "Product Shipping", icon: BriefcaseBusiness },
];

export const timeline = [
  {
    marker: "Graduate Studies",
    date: "Jul 2025 - Jan 2026",
    title: "Incubation Intern",
    org: "School for Graduate Studies, Zoho, Vellore",
    detail: "Completed rigorous training at Zoho in core Java, OOP, design patterns, SOLID principles, data structures, debugging methods, and real-world web application development.",
  },
  {
    marker: "B.TECH",
    date: "2020 - 2024",
    title: "B.Tech, Computer Science and Engineering",
    org: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
    detail: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai. CGPA 8.18.",
  },
];
