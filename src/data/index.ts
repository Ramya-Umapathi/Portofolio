import { Skill, Experience, Project } from '../types';

export const SKILLS: Skill[] = [
  { name: "HTML", level: 98, color: "#e34f26" },
  { name: "CSS", level: 90, color: "#3178c6" },
  { name: "Bootstrap", level: 90, color: "#42b883" },
  { name: "jQuery", level: 60, color: "#0769ad"},
  { name: "Elementor", level: 50, color: "#f24e1e"},
  { name: "React", level: 15, color: "#61dafb" },
  { name: "Angular UI", level: 85, color: "#dd0031" },
  { name: "Tailwind", level: 70, color: "#38bdf8" },
  { name: "JavaScript", level: 50, color: "#f7df1e"},
  { name: "WordPress", level: 50, color: "#21759b"},
  { name: "Shopify", level: 15, color: "#96bf48" },
  { name: "BigCommerce", level: 15, color: "#a066ff" },
  { name: "Web Flow", level: 30, color: "#dd0031"},

];

export const EXPERIENCE: Experience[] = [
  {
    period: "2025 – Present",
    role: "Senior UI Developer",
    color: "#a78bfa",
    projects: ["Native Residence", "Supply Chain POC", "Vinsinfo Revamp", "Metaforge", "Zifo Site Revamp"],
    desc: "Leading UI architecture for enterprise-grade platforms. Building scalable component systems and driving design-to-code workflows.",
  },
  {
    period: "2024 - 2025",
    role: "UI Developer",
    color: "#818cf8",
    projects: ["Innova Marketing", "Coacharya", "PMS", "Some POC Projects"],
    desc: "Developed marketing dashboards and coaching platform UIs with custom layouts and reusable Vue component libraries.",
  },
  {
    period: "2023 - 2024",
    role: "UI Developer",
    color: "#c084fc",
    projects: ["BSafe Platform", "Cypress", "Playwright", "Mckee Garden", "Thompson"],
    desc: "BSafe is a construction safety approval tool where site instruments go through a structured checklist-based review process and are only approved for use on construction works once all checklist items are verified , Navidok building Angular and Ionic UIs for the Navidok Mobile App and Navidok Web App. Going forward implementing a dynamic or static content feed for Terrance Daily Updates. Developing a product catalogue with checkout for Blade Kits. Creating a user-friendly garden visit and third-party event booking website for Mckee Garden. Showcasing surgical instrument platform for Thompson, and writing end-to-end automated tests for the Navidok Web App using both Cypress and Playwright to ensure cross-browser reliability."
  },
  {
    period: "2022 – 2023",
    role: "Associate Software Developer",
    color: "#7dd3fc",
    projects: ["Navidok Mobile App", "Navidok Web App", "Terrance Daily Updates", "Blade Kits"],
    desc: "During my time at Navidok, I contributed to six diverse products — starting with the Navidok Mobile App and Navidok Web App, where I built core Angular and Ionic UI components for both mobile and web platforms, then extended my work to Terrance Daily Updates by implementing a dynamic content feed with real-time filtering, followed by Blade Kits where I crafted a product catalogue with comparison and checkout flows",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Native Residence",
    tag: "Real Estate Platform",
    desc: "Native Residence is a building sales management platform that provides detailed information about property owners and residential properties. It acts as a portfolio system for showcasing buildings available for sale and helps manage the sales process efficiently.",
    color: "#a78bfa",
  },
  {
    name: "Supply Chain POC",
    tag: "Blockchain App",
    desc: "Developed a responsive frontend using React and TypeScript for a blockchain-based supply chain tracking platform powered by **Hyperledger Fabric. The system enables end-to-end product lifecycle tracking from manufacturing to customer delivery with transparent status updates at every stage.",
    color: "#818cf8",

  },
  {
    name: "Metaforge",
    tag: "NFT Marketplace",
    desc: "Developed a responsive frontend using React and TypeScript for an NFT marketplace built on the **Ethereum blockchain. Implemented UI features for NFT minting, listing, and trading with crypto wallet integration via MetaMask..",
    color: "#c084fc",
  },
  {
    name: "Innova Marketing",
    tag: "Marketing Platform",
    desc: "Campaign dashboards and analytics interface for a multi-channel marketing SaaS.",
    color: "#7dd3fc",
  },
  {
    name: "Coacharya",
    tag: "Coaching Center",
    desc: "Professional coaching training institute it teaches people how to become certified coaches for leadership, career, and personal development, often used by managers, HR professionals, and consultants",
    color: "#f0abfc",
  },
  {
    name: "BSafe Platform",
    tag: "Approval Platform",
    desc: "Construction safety approval tool where site instruments go through a structured checklist-based review process and are only approved for use on construction works once all checklist items are verified and signed off.",
    color: "#a5f3fc",
  },
    {
    name: "PMS",
    tag: "Parking Management System",
    desc: "PMS (Parking Management System) is a smart object detection platform that uses sensor-based scanning to identify and classify objects within parking slots — such as cars, bikes, or humans — by scanning up to 3/4 of the slot area to determine occupancy type, with all detected data stored across dual storage systems comprising a local database and cloud storage for real-time monitoring and historical tracking",
    color: "#38bdf8",
  },
     {
    name: "Navidok",
    tag: "",
    desc: "Navidok - building Angular and Ionic UIs for the Navidok Mobile App and Navidok Web App",
    color: "#e34f26",
  },
];
