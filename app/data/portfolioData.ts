export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  icon: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Kulani Baloyi",
  initials: "KB",
  titles: [
    "Full Stack Developer",
    "Java & Spring Boot Engineer",
    "React & Node.js Developer",
    "System Analyst",
  ],
  headline: "Turning complex institutional and enterprise requirements into robust, high-performance software systems.",
  currentRole: "Software Developer / System Analyst",
  currentCompany: "University of Venda",
  summary:
    "Full Stack Developer and System Analyst with a National Diploma in Information Technology (Software Development) from Tshwane University of Technology. Experienced in architecting secure web-based systems, building RESTful APIs, integrating relational databases, and crafting responsive user experiences using Java, Spring Boot, React, Node.js, and MySQL.",
  location: "Pretoria, Gauteng, South Africa",
  email: "kulaniledge@gmail.com",
  phone: "076 599 2459",
  linkedIn: "https://www.linkedin.com/in/kulani-baloyi-b00443148",
  github: "https://github.com/Ledgekb/Portfolio",
  education: {
    qualification: "National Diploma in Information Technology (Software Development)",
    institution: "Tshwane University of Technology",
    years: "2018 – 2025",
  },
};

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "C++", "Python (Basic)", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "Node.js", "Express.js", "RESTful APIs", "WebSockets"],
  },
  {
    category: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS", "Responsive Web Design", "Vite", "Next.js"],
  },
  {
    category: "Databases & Tools",
    skills: ["MySQL", "Relational Database Design", "Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "XAMPP", "Azure"],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Developer / System Analyst",
    company: "University of Venda",
    period: "2025 – Present",
    description:
      "Develop and maintain institutional web software systems with focus on robust backend services and seamless system integration.",
    highlights: [
      "Engineered the production-ready Univen Intern Register System utilizing Spring Boot, REST APIs, and MySQL.",
      "Integrated GPS geofencing, facial recognition attendance verification, and WebSocket real-time monitoring.",
      "Conducted extensive API testing, debugging, and database optimization.",
    ],
    icon: "/cards/card-1.png",
    link: "https://intern-register-frontend.azurewebsites.net/login",
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "TechCode Hive",
    period: "2025",
    description:
      "Developed full-stack web applications with modern frontend technologies and relational database persistence.",
    highlights: [
      "Built 'Delicious Buffet', a full-stack restaurant ordering web application using React, Node.js, and MySQL/XAMPP.",
      "Implemented role-based access control, cart workflows, order fulfillment tracking, and menu CRUD functionality.",
      "Created responsive and intuitive user interfaces tailored for customers and staff.",
    ],
    icon: "/cards/card-2.png",
    link: "https://delicious-buffet.vercel.app",
  },
  {
    id: 3,
    role: "HR Dashboard Developer",
    company: "University of Venda",
    period: "2025",
    description:
      "Collaborated on an enterprise human resources dashboard supporting institutional staff tracking and administrative metrics.",
    highlights: [
      "Engineered business logic and RESTful endpoints using Java and Spring Boot.",
      "Integrated backend services with an Angular frontend and MySQL database.",
      "Executed functional verification, API endpoint validation, and debugging workflows.",
    ],
    icon: "/cards/card-3.png",
    link: "https://github.com/Ledgekb/Portfolio",
  },
  {
    id: 4,
    role: "IT Technician Intern",
    company: "Department of Education",
    period: "2024",
    description:
      "Delivered technical support, computer setup, and infrastructure maintenance across institutional departments.",
    highlights: [
      "Diagnosed and resolved hardware, software, and local network issues for department personnel.",
      "Configured client workstations, managed operating systems, and supported IT documentation.",
      "Maintained system uptime and hardware reliability across administrative offices.",
    ],
    icon: "/cards/card-4.png",
    link: "https://github.com/Ledgekb/Portfolio",
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Univen Intern Register System",
    subtitle: "Enterprise Attendance & Leave Management with Geofencing & Biometrics",
    description:
      "The Univen Intern Register System is a role-based web platform developed for the University of Venda to streamline and automate intern administration, daily attendance tracking, and leave management. Designed for interns, supervisors, and administrators, the system enforces verified attendance using GPS geolocation fencing and facial recognition during clock-ins and clock-outs, enables real-time attendance monitoring via WebSockets, digitizes the leave application and approval workflow, and provides departmental reporting with PDF and Excel export capabilities.",
    image: "/projects/univen-intern-register.png",
    link: "https://intern-register-frontend.azurewebsites.net/login",
    tags: ["Spring Boot", "Java", "MySQL", "REST APIs", "Facial Recognition", "GPS Geofencing", "WebSockets", "Azure"],
  },
  {
    id: 2,
    title: "Delicious Buffet",
    subtitle: "Full-Stack Restaurant Ordering, Stock & Fleet Management System",
    description:
      "Delicious Buffet is a full-stack restaurant ordering and management web application built with React, Vite, Tailwind CSS, Node.js/Express, and MySQL. It features role-based access control for customers, administrators, and delivery drivers—allowing customers to browse categorized menu items, manage their cart, submit orders, select payment methods, and track order deliveries in real time. Administrators can oversee order fulfillment, track live stock quantities, and perform full CRUD operations on menu items (including image uploads and pricing discounts), while delivery drivers can view and update active order delivery statuses.",
    image: "/projects/delicious-buffet.png",
    link: "https://delicious-buffet.vercel.app",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Role-Based Auth"],
  },
  {
    id: 3,
    title: "Real-Time Global Weather Application",
    subtitle: "Angular 19 Meteorological Dashboard & City Forecaster",
    description:
      "An Angular 19 single-page weather application that fetches and displays real-time weather information, meteorological metrics, temperature graphs, wind dynamics, and multi-day forecasts for any city worldwide or dynamically resolved based on the user's device geolocation.",
    image: "/projects/project-2.png",
    link: "https://weather-app-opal-kappa-47.vercel.app/",
    tags: ["Angular 19", "TypeScript", "Tailwind CSS", "Weather APIs", "Geolocation"],
  },
];
