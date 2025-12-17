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
      tech: ["React", "MongoDB", "WebSockets", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    }
    
  ],

  timeline: [
    {
      id: 1,
      title: "Computer Engineering Student",
      company: "",
      period: "2021 - Present",
      description: "Learning about CS concepts DSA, CN, DBMS, AI/ML, Mathematics.",
      type: "study"
    },
    {
      id: 2,
      title: "Science Student",
      company: "KIST College & SS",
      period: "2019 - 2021",
      description: "Studied and Learned High School Physics, Maths, Chemistry and Computer Science.",
      type: "work"
    },
    {
      id: 3,
      title: "Student",
      company: "Siddharth Boarding School",
      period: "childhood - 2021",
      description: "Studied Until Class 10(SEE).",
      type: "work"
    }
  ],

  terminalCommands: [
    { command: "whoami", output: "boharey" },
    { command: "cat about.txt", output: "Computer Engineer | Full Stack Developer | Problem Solver" },
    { command: "ls skills/", output: "frontend/  backend/  devops/  databases/  languages/" },
    { command: "cat skills/frontend/*", output: "React, Tailwind CSS, TypeScript" },
    { command: "cat skills/backend/*", output: "Python, FastAPI, Django, GraphQL" },
    { command: "cat skills/devops/*", output: "Git, Github, Linux" },
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
