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
  location: "Your Location",
  headline: "Building seamless digital experiences from concept to deployment",
  about: "I'm a full stack developer passionate about creating modern, performant web applications. With expertise spanning frontend and backend technologies, I deliver end-to-end solutions that solve real problems. I focus on clean code, scalability, and user experience.",
  availability: "Available for projects",
  contact: {
    email: "aly@example.com",
    whatsappUrl: "https://wa.me/XXXXXXXXXXX",
    githubRepoUrl: "https://github.com/yourusername",
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
      id: "0",
      title: "FunnelCraft",
      description: "A powerful marketing funnel builder with drag-and-drop interface, real-time analytics, and seamless integrations for creating high-converting sales funnels.",
      stack: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      live: "https://funnel-craft-green.vercel.app/",
      image: "/Screenshot 2025-12-16 160108.png",
      featured: true,
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
      id: "2",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      id: "2",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      stack: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      id: "3",
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and integrations.",
      stack: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/yourusername/taskapp",
      live: "https://taskapp-demo.vercel.app",
    },
    {
      id: "4",
      title: "AI Chat Interface",
      description: "Modern chat application with AI integration, message history, and user authentication.",
      stack: ["Next.js", "OpenAI API", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/aichat",
      live: "https://aichat-demo.vercel.app",
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills with glassmorphism design.",
      stack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Tech Startup Inc",
      title: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Led development of customer-facing web applications and internal tools",
      highlights: [
        "Architected and built scalable microservices using Node.js and Docker",
        "Improved frontend performance by 45% through code splitting and lazy loading",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: "2",
      company: "Digital Agency",
      title: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed web applications for various clients across different industries",
      highlights: [
        "Built responsive web applications using React and modern CSS techniques",
        "Implemented RESTful APIs and database optimization strategies",
        "Collaborated with designers and product managers on 20+ projects",
      ],
    },
    {
      id: "3",
      company: "Freelance Developer",
      title: "Independent Developer",
      period: "2018 - 2020",
      description: "Provided full-stack development services to startups and small businesses",
      highlights: [
        "Delivered 15+ successful projects from concept to deployment",
        "Maintained client satisfaction with 98% repeat business rate",
        "Specialized in custom web applications and WordPress development",
      ],
    },
  ],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { label: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
    { label: "Upwork", url: "https://www.upwork.com/freelancers/~alyhamad", icon: "upwork" },
  ],
};
