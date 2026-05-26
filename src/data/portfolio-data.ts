export const personalInfo = {
  name: "Amr Mahran",
  firstName: "Amr",
  lastName: "Mahran",
  title: "React & Front-End Developer",
  email: "amrmahran200018@gmail.com",
  phone: "01121145208",
  location: "Cairo, Egypt",
  locationFull: "Cairo, Egypt",
  status: "Open to opportunities",
  bio: "A React & Front-End Developer specializing in building fast, beautiful, and scalable web applications powered by modern tools like Next.js, TypeScript, Shadcn UI, and Supabase.",
  heroDescription:
    "I craft pixel-perfect, high-performance web applications using React, Next.js, TypeScript, and Supabase — turning ideas into polished digital products.",
  quote:
    '"Always learning, always building, always pushing the boundaries of what\'s possible on the web."',
};

export const socialLinks = {
  github: "https://github.com/mahrandev",
  linkedin: "https://www.linkedin.com/in/amr-mahran-21a34b298/",
  whatsapp: "https://wa.me/201121145208",
  email: "mailto:amrmahran200018@gmail.com",
};

export const heroTechStack = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "TanStack Query", icon: "reactquery" },
  { name: "Supabase", icon: "supabase" },
];

export const specialties = [
  "React & Next.js Apps",
  "TypeScript Development",
  "Supabase Architecture",
  "Shadcn UI & Tailwind",
  "TanStack Query Flow",
];

export const designPhilosophy = [
  {
    icon: "zap",
    title: "Fast",
    description: "Optimized performance.",
  },
  {
    icon: "accessibility",
    title: "Inclusive",
    description: "Accessible to all.",
  },
  {
    icon: "code",
    title: "Clean",
    description: "Maintainable code.",
  },
  {
    icon: "sparkles",
    title: "Smart",
    description: "User-first design.",
  },
];

export const technicalArsenal = [
  "React.js & Next.js",
  "TypeScript",
  "Tailwind CSS & Shadcn UI",
  "TanStack Query",
  "Supabase (Auth, DB, Storage)",
  "Git & GitHub & Vercel",
];

export const skillCategories = [
  {
    icon: "settings",
    title: "React & Next.js",
    description:
      "Building fast, scalable, and production-ready applications with the React ecosystem and Next.js App Router.",
    techs: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "JSX",
      "App Router",
    ],
  },
  {
    icon: "code",
    title: "Styling & UI Libraries",
    description:
      "Designing polished, accessible, and responsive interfaces using modern utility-first CSS and component libraries.",
    techs: ["Tailwind CSS", "Shadcn UI", "Framer Motion", "CSS Modules"],
  },
  {
    icon: "layers",
    title: "Data Fetching & State Management",
    description:
      "Managing server state, caching, optimistic updates, and client-side state for seamless user experiences.",
    techs: ["TanStack Query", "React Context API", "Zustand", "SWR"],
  },
  {
    icon: "database",
    title: "Supabase & Backend-as-a-Service",
    description:
      "Leveraging Supabase as a full backend solution — database, real-time subscriptions, auth, and file storage.",
    techs: [
      "Supabase Auth",
      "Supabase Database",
      "Supabase Storage",
      "PostgreSQL",
      "Row-Level Security",
    ],
  },
  {
    icon: "wrench",
    title: "Developer Tooling",
    description:
      "Maintaining clean, consistent, and high-quality codebases with modern development tools.",
    techs: ["Vite", "ESLint", "Prettier", "TypeScript Compiler", "npm"],
  },
  {
    icon: "gitBranch",
    title: "Version Control & Deployment",
    description:
      "Shipping production applications reliably using Git workflows and cloud deployment platforms.",
    techs: ["Git", "GitHub", "Vercel", "CI/CD", "Environment Variables"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Big Burger",
    description:
      "A premium, highly interactive landing page for a gourmet burger restaurant. Built using Next.js and Tailwind CSS v4, featuring a dynamic spotlight background color synced with burger selections, custom carousel animations, and immersive parallax ingredient effects.",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/images/burger.webp",
    liveUrl: "https://burger-pink-three.vercel.app",
  },
  {
    number: "02",
    title: "Dawlia Tourism ERP",
    description:
      "A comprehensive ERP system for tourism agencies. I refactored the project to manage bookings, invoices, and client relations smoothly. It also includes an integrated attendance management plugin to improve operational efficiency.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/tourism-erp.webp",
    liveUrl: "https://tourism-erp-management.vercel.app",
  },
  {
    number: "03",
    title: "Cairo Airport Ride",
    description:
      "A premium airport transfer platform enabling travelers to seamlessly book rides, browse vehicle fleets, and view fixed pricing through a clean and intuitive interface.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/cairo-airport-ride.webp",
    liveUrl: "https://cairoairportride.com",
  },
  {
    number: "04",
    title: "Exclusive E-Commerce",
    description:
      "A modern online store designed to showcase products clearly. Users can browse a wide catalog of items, add them to their shopping cart, and enjoy a seamless shopping experience with a fully responsive design.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/exclusive-ecommerce.webp",
    liveUrl: "https://exclusive-ecommerce-seven.vercel.app",
  },
  {
    number: "05",
    title: "LaslesVPN",
    description:
      "A premium, pixel-perfect landing page for a modern VPN provider. Built using semantic HTML5 and the latest Tailwind CSS v4, featuring a fully responsive mobile-first design, interactive custom animations, structured pricing matrices, and optimized SEO practices.",
    techs: ["HTML5", "Tailwind CSS", "JavaScript"],
    image: "/images/lasles-vpn.webp",
    liveUrl: "https://landing-sksb.vercel.app",
  },
];

export const workExperience = [
  {
    title: "Cairo Airport Ride (Transportation & Booking Platform)",
    company: "Freelance",
    location: "Egypt",
    period: "2026",
    points: [
      "Developed a fast and interactive user interface for a commercial airport transfer service using Next.js, React, and Tailwind CSS.",
      "Implemented a multilingual architecture to support both English and Arabic, providing a seamless experience for local and international travelers.",
      "Built dynamic vehicle selection and pricing pages to streamline the booking process for users.",
      "Integrated direct WhatsApp routing to facilitate instant customer communication and reservations.",
      "Optimized the platform for SEO and performance, ensuring fast loading times across all mobile and desktop devices.",
    ],
  },
  {
    title: "Tourism ERP System",
    company: "Freelance",
    location: "Egypt",
    period: "2025",
    points: [
      "Developed a robust front-end architecture for a comprehensive Tourism ERP platform to streamline complex business operations.",
      "Built an advanced CRM module to efficiently manage client profiles, communications, and booking history.",
      "Implemented a fully functional Attendance Management system to track staff schedules and daily logs accurately.",
      "Integrated secure Authentication and Role-Based Access Control to manage user permissions and protect sensitive data.",
      "Integrated TanStack Query with React and TypeScript for high-performance server-state management and seamless data fetching.",
      "Designed a responsive and modern user interface utilizing Shadcn UI and Tailwind CSS to deliver an optimal user experience.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Law",
    institution: "Ain Shams University",
    location: "Cairo, Egypt",
    period: "Class of 2026",
    description:
      "Developing strong analytical thinking, structured reasoning, and problem-solving methodologies that complement my software development logical path.",
  },
  {
    title: "Front-End Development & Programming Fundamentals Diploma",
    institution: "Almdrasa Platform",
    location: "Online",
    period: "Completed: 2025",
    description: "",
    points: [
      "Learned the core basics of programming and problem-solving.",
      "Specialized in front-end web development to build interactive (responding to user actions) user interfaces.",
    ],
  },
];
