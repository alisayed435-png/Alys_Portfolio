export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Profile {
  name: string;
  title: string;
  location?: string;
  headline: string;
  about: string;
  availability: string;
  contact: {
    email: string;
    whatsappUrl: string;
    githubRepoUrl: string;
    upworkProfileUrl: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  socialLinks: Array<{
    label: string;
    url: string;
    icon: string;
  }>;
}

export const profile: Profile = {
  name: "Aly Hamad",
  title: "Full Stack Developer",
  location: "Munich, Germany",
  headline: "Building seamless digital experiences from concept to deployment",
  about: "I build practical web applications, automation tools, and data-driven workflows. My focus is on solutions that solve real business problems and deliver tangible value in daily work.",
  availability: "Available for projects",
  contact: {
    email: "aly.hamad.duwang@gmail.com",
    whatsappUrl: "https://chat.whatsapp.com/IytJHQDI1fIH8WqmZFp4eM",
    githubRepoUrl: "https://github.com/alisayed435-png",
    upworkProfileUrl: "https://www.upwork.com/freelancers/~alyhamad",
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "TailwindCSS", icon: "tailwind" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Framer Motion", icon: "framer" },
        { name: "Vue.js", icon: "vue" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "Python", icon: "python" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Vercel", icon: "vercel" },
        { name: "AWS", icon: "aws" },
        { name: "CI/CD", icon: "cicd" },
      ],
    },
  ],
  projects: [
    {
      id: "5",
      title: "Interactive Design Studio",
      description: "A visually stunning digital innovation studio landing page featuring 3D geometric animations, smooth parallax effects, and modern dark-themed design.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Three.js"],
      github: "https://github.com/alisayed435-png/interactive_design_site",
      live: "https://interactive-design-site.vercel.app/",
      image: "/interactive-design-screenshot.png",
    },
    {
      id: "4",
      title: "Farmlyest",
      description: "A farm-to-table marketplace platform connecting local farmers with consumers. Features fresh produce discovery, nearby farm finder, and seamless ordering experience.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/alisayed435-png/FarmlyestProp",
      live: "https://farmlyest-sigma.vercel.app/",
      image: "/farmlyest-screenshot.png",
    },
    {
      id: "3",
      title: "Absentify Clone",
      description: "A pixel-perfect clone of Absentify - an absence management and vacation tracking platform. Features modern UI with smooth animations and responsive design.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/alisayed435-png/AbsentifyProp",
      live: "https://absentify-clone.vercel.app/",
      image: "/absentify-clone-screenshot.png",
    },
    {
      id: "2",
      title: "FunnelCraft SaaS",
      description: "A powerful marketing funnel builder with drag-and-drop interface, real-time analytics, and seamless integrations for creating high-converting sales funnels.",
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      live: "https://funnel-craft-green.vercel.app/",
      image: "/Screenshot 2025-12-16 160108.png",
    },
    {
      id: "1",
      title: "TripFlow - Travel Planner",
      description: "Modern travel planning application with smart itinerary creation, destination explorer, packing lists, and booking management.",
      stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      live: "https://travel-planner-flame.vercel.app/",
      image: "/Screenshot 2025-12-17 201930.png",
    },
    {
      id: "0",
      title: "CaseCraft - Legal Practice Management",
      description: "Comprehensive legal practice management platform with client intelligence, case orchestration, and analytics. Features workflow automation and strategic growth tools.",
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      github: "https://github.com/alisayed435-png/CaseCraft",
      live: "https://case-craft-alpha.vercel.app/",
      image: "/screencapture-case-craft-alpha-vercel-app-2025-12-18-21_42_03.png",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Freelance Developer",
      title: "Full Stack Developer",
      period: "2022 - Present",
      description: "Building web applications and automation solutions for clients worldwide",
      highlights: [
        "Developed custom web applications for businesses across various industries",
        "Built automated workflows and data pipelines for improved efficiency",
        "Created responsive, accessible interfaces with modern frontend technologies",
      ],
    },
    {
      id: "2",
      company: "Digital Agency",
      title: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed web applications for various clients across different industries",
      highlights: [
        "Built responsive web applications using React and modern CSS techniques",
        "Implemented RESTful APIs and database optimization strategies",
        "Collaborated with designers and product managers on 20+ projects",
      ],
    },
  ],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/alisayed435-png", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/alyhamad", icon: "linkedin" },
    { label: "Upwork", url: "https://www.upwork.com/freelancers/~alyhamad", icon: "upwork" },
  ],
};
