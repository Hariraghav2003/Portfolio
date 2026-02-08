export const personalInfo = {
  name: "Hariraghav.S",
  title: "MERN Stack Developer",
  subtitle: "2+ Years Experience",
  email: "hariraghava21s@gmail.com",
  location: "Madurai Tamilnadu India",
  github: "https://github.com/hariraghav2003",
  linkedin: "https://www.linkedin.com/in/hariraghav962003",
  resume: "/resume.pdf",
};

export const aboutMe = {
  summary: `Software Engineer with hands-on experience in full-stack MERN development, backend API engineering, and 
  DevOps automation. Skilled in building scalable applications, designing RESTful APIs, containerizing services with 
  Docker, configuring SSL, and managing Linux-based production environments. Experienced in deploying and maintaining 
  live systems, including Amadeus-certified travel booking platforms`,
  highlights: [
    "Built 5+ production-ready web applications",
    "Experienced in RESTful API design and implementation",
    "Strong understanding of database design and optimization",
    "Passionate about clean code and best practices",
  ],
};

export const skills = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "MongoDB", level: 90, category: "Database" },
  { name: "REST APIs", level: 93, category: "Backend" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "AWS", level: 80, category: "Cloud" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "NGINX", level: 82, category: "DevOps" },
  { name: "CI/CD (GitHub Actions, GitLab CI)", level: 88, category: "DevOps" },
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Notasco Technologies India Pvt Ltd",
    location: "Madurai, Tamil Nadu",
    duration: "September 2024 - Present",
    type: "Full-time",
    description: [
      "Developed and maintained 5+ client web applications using MERN stack",
      "Developed and deployed full-stack applications using the MERN stack, ensuring smooth integration between frontend and backend components.",
      "Managed Linux-based server environments, hosted multiple applications, configured SSL certificates, and maintained production reliability.",
      "Built custom CI/CD pipelines using GitHub Actions and GitLab CI with YAML workflows to automate deployments and reduce manual effort.",
      "Deployed PHP-based applications using Docker, created containerized environments, and implemented automated build and release processes.",
      "Performed database restoration, SSL proxy setup, NGINX configuration, and routine server maintenance using shell scripts.",
      "Tested and validated Android and web applications to ensure performance, functionality, and stability across deployments.",
      "Mentored junior developers on React best practices",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "PHP (Yii2)",
      "RESTful APIs",
      "MongoDB",
      "SQL",
      "Docker",
      "Git",
      "GitHub Actions",
      "GitLab CI",
      "CI/CD Pipelines",
      "NGINX",
      "Linux",
      "Shell Scripting",
      "YAML",
      "GitOps",
      "AWS",
      "SSL Configuration",
      "Amadeus Live API",
      "Payment Gateway Integration",
      "XML Parsing",
      "Microservices",
      "Node.js Schedulers",
      "Email Services",
      "Application Testing",
      "Deployment Automation",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "WeeFly - Travel Booking OTA Platform",
    description:
      "WeeFly is a scalable B2C online travel booking platform designed to provide real-time flight search, booking, and ticketing services. The system integrates multiple global aggregators and Amadeus Live APIs to ensure accurate availability and dynamic pricing. It supports secure multi-payment gateway processing and automated email notifications to enhance customer experience. The backend is optimized using a microservices architecture and efficient database design for high performance and reliability. The platform manages complete booking operations including PNR creation, fare validation, and ticket issuance.",
    image:
      "https://res.cloudinary.com/dklu1umul/image/upload/v1770552389/WeeFly_usffqq.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "Microservices Architecture",
      "XML Parsing",
      "Payment Gateway Integration",
      "Email Services",
      "CI/CD Pipelines",
      "Docker",
      "NGINX",
      "Linux",
    ],

    features: [
      "Real-time flight search and booking using Amadeus Live API and external aggregators",
      "Secure multi-payment gateway integration for safe online transactions",
      "Automated PNR creation, fare validation, and ticket issuance",
      "High-performance RESTful APIs with scalable microservices architecture",
      "Automated email notifications and booking confirmations",
    ],
    github: "https://github.com/hariraghav2003",
    live: "https://weefly.africa",
    category: "Full Stack / DevOps",
  },
  {
    id: 2,
    title: "QR Code Generator",
    description:
      "A Secure QR code generator with customizable options likeQR Studio is a simple and powerful platform for generating high-quality QR codes. It allows users to create standard QR codes or QR codes with custom logos. With a clean and modern interface, QR Studio ensures fast and easy generation. logo and real-time preview.",
    image:
      "https://res.cloudinary.com/dklu1umul/image/upload/v1770545432/QRCodeGeneratorapp_rq7qd8.png",
    technologies: [
      "React JS",
      "Node.js",
      "Express",
      "Cryptojs",
      "RESTful APIs",
    ],
    features: [
      "QR code generation",
      "QR code with custom logo",
      "Real-time preview & download",
      "Secure data handling with encryption",
    ],
    github: "https://github.com/Hariraghav2003/QR-Code-Generator.git",
    live: "https://qr-code-generator-ochre-tau.vercel.app",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "MERN CRUD Application - Dashboard",
    description:
      "This project is a MERN CRUD Dashboard application that supports multiple databases: MongoDB,SQL,DynamoDB (via Docker) It provides a full-stack dashboard with CRUD operations, API integration, and containerized database support.",
    image:
      "https://res.cloudinary.com/dklu1umul/image/upload/v1770550707/MERNCRUDApp_zxdivg.png",
    technologies: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "SQL",
      "DynamoDB",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "CRUD operations",
      "Multi-database support (MongoDB, SQL, DynamoDB)",
    ],
    github: "https://github.com/Hariraghav2003/MERN-CRUD-APP.git",
    live: "https://mern-crud-app-theta.vercel.app",
    category: "Full Stack / DevOps",
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat application with real-time messaging, file sharing, and group chat functionality.",
    image:
      "https://res.cloudinary.com/dklu1umul/image/upload/v1770554284/Chatly_nafzu2.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
    features: [
      "Real-time messaging",
      "File sharing",
      "Group chats",
      "Message encryption",
    ],
    github: "https://github.com/hariraghav2003",
    live: "https://chatapp-inky-theta.vercel.app",
    category: "In Progress",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
