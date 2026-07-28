// Mock data for Ubuntu-inspired portfolio

export const mockData = {
  user: {
    name: "Boharey",
    title: "Computer Engineer",
    tagline: "Building innovative solutions with code",
    email: "utsav.bohara.dev@gmail.com",
    phone: "9868491151",
    leetcode: "https://leetcode.com/u/Boharey",
    location: "Pokhara, Nepal",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&style=pixel-art&gender=male",
    avatarEmoji: "👨‍💻",
    bio: "Computer Engineering Student passionate in Web-Development, System Design and Problem-Solving. ",
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
      items: ["React", "Tailwind CSS", "Framer Motion", "Redux", "HTML5/CSS3"]
    },
    {
      category: "Backend Development",
      items: [ "FastAPI", "Django", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "DevOps & Tools",
      items: [ "Git/GitHub", "CI/CD", "Linux"]
    },
    {
      category: "Other",
      items: ["System Design", "Algorithms", "Microservices", "WebSockets"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "NEC Practice",
      description: "A responsive web platform for Nepal Engineering Council (NEC) Computer Engineering license exam preparation featuring syllabus-wise study materials, chapter-based practice questions, and mock examinations for effective self-paced learning.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      link: "https://nec-computer-engineering.vercel.app",
      github: "https://github.com/Boharey/nec-practice"
    },
    {
      id: 2,
      title: "Dummy-Gen",
      description: "A comprehensive dummy data generation tool for testing and development. Generates realistic mock data for various use cases including user profiles, transactions, and API responses.",
      tech: ["Python", "FastAPI", "MongoDB", "React"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      link: "https://github.com/boharey/dummygen",
      github: "https://github.com/boharey/dummygen"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "An OS-themed interactive portfolio website showcasing projects, skills, and experience with a unique desktop-like user interface.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      link: "https://os-themed-website.vercel.app",
      github: "https://github.com/boharey/os-themed-website"
    }
  ],

  timeline: [
    {
      id: 1,
      title: "Engineering Student",
      company: {
        name : "Pashimanchal College,IOE",
        url : "https://ioepas.edu.np/"
      },
      period: "2021 - Present",
      description: "Learning about CS concepts like DSA, CN, DBMS, AI/ML, DSAP etc.",
      type: "study"
    },
    {
      id: 2,
      title: "Science Student",
      company: {
        name : "KIST College & SS",
        url : "https://kist.edu.np/"
      } ,
      period: "2019 - 2021",
      description: "Studied and Learned High School Physics, Maths, Chemistry and Computer Science.",
      type: "study"
    },
    {
      id: 3,
      title: "Student",
      company: {
        name : "Siddharth Boarding School",
        url : "https://siddharth.edu.np"
      },
      period: "childhood - 2019",
      description: "Studied Until Class 10(SEE).",
      type: "study"
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
