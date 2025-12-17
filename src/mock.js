// Mock data for Ubuntu-inspired portfolio

export const mockData = {
  user: {
    name: "Boharey",
    title: "Computer Engineer",
    tagline: "Building innovative solutions with code",
    email: "boharey@example.com",
    phone: "xxxxxxxxx",
    location: "Pokhara, Nepal",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Boharey",
    bio: "Computer Engineering Student passionate in web-development, system design, and problem-solving. ",
    social: {
      github: "https://github.com/boharey",
      linkedin: "https://linkedin.com/in/boharey",
      twitter: "https://twitter.com/boharey"
    }
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C" , "C++"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Tailwind CSS","Framer Motion", "Redux", "HTML5/CSS3"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "FastAPI", "Django", "Express", "GraphQL", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "DevOps & Tools",
      items: [ "AWS", "Git", "CI/CD", "Linux"]
    },
    {
      category: "Other",
      items: ["System Design", "Algorithms", "Microservices", "WebSockets"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Real-Time Analytics Dashboard",
      description: "Built a comprehensive analytics platform with real-time data visualization, user behavior tracking, and custom reporting features.",
      tech: ["React", "Node.js", "MongoDB", "WebSockets", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Developed a full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "AI-Powered Chat Application",
      description: "Created an intelligent chat system with natural language processing, sentiment analysis, and automated responses.",
      tech: ["Python", "FastAPI", "React", "OpenAI", "Redis"],
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Built a collaborative task management tool with team features, notifications, and project tracking capabilities.",
      tech: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Cloud Storage Solution",
      description: "Developed a secure cloud storage platform with file sharing, encryption, and multi-device synchronization.",
      tech: ["Go", "React", "AWS S3", "PostgreSQL", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "DevOps Automation Pipeline",
      description: "Implemented CI/CD pipeline with automated testing, deployment, and monitoring for microservices architecture.",
      tech: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    }
  ],

  timeline: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications and mentoring junior developers. Architected microservices infrastructure handling 1M+ daily requests.",
      type: "work"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using modern JavaScript frameworks. Improved application performance by 40% through optimization.",
      type: "work"
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Built MVP products from scratch and contributed to full product lifecycle. Worked with cross-functional teams to deliver high-quality software.",
      type: "work"
    },
    {
      id: 4,
      title: "Bachelor of Science in Computer Engineering",
      company: "State University",
      period: "2014 - 2018",
      description: "Graduated with honors. Focused on software engineering, algorithms, and system design. Led multiple academic projects and hackathons.",
      type: "education"
    }
  ],

  terminalCommands: [
    { command: "whoami", output: "boharey" },
    { command: "cat about.txt", output: "Computer Engineer | Full Stack Developer | Problem Solver" },
    { command: "ls skills/", output: "frontend/  backend/  devops/  databases/  languages/" },
    { command: "cat skills/frontend/*", output: "React, Next.js, Vue.js, Tailwind CSS, TypeScript" },
    { command: "cat skills/backend/*", output: "Node.js, Python, FastAPI, Django, GraphQL" },
    { command: "cat skills/devops/*", output: "Docker, Kubernetes, AWS, CI/CD, Linux" },
    { command: "git status", output: "On branch main\nYour branch is up to date with 'origin/main'." },
    { command: "echo $PASSION", output: "Building elegant solutions to complex problems" },
    { command: "./run_projects.sh", output: "6 projects executed successfully ✓" }
  ],

  systemInfo: {
    os: "Boharey OS 1.0",
    kernel: "Portfolio-Kernel 5.15.0",
    uptime: "Always Online",
    shell: "bash 5.0",
    terminal: "xterm-256color"
  }
};
