// Self-executing function to encapsulate the entire script
(function () {
  // Portfolio Data
  const portfolioData = {
    experience: [
      {
        company: "IBM",
        location: "Bengaluru, Karnataka",
        role: "Software Developer",
        dates: "August 2022 – Present",
        impact: "Enterprise-scale learning management systems",
        highlights: [
          "Architected and maintained microservices using FastAPI, Spring Boot, and Express.js for IBM's global learning platforms.",
          "Designed RESTful APIs and integrated complex web services, optimizing database performance across MongoDB and SQL systems.",
          "Led collaboration with frontend teams, delivering React-based analytics dashboards for internal stakeholders.",
          "Established robust CI/CD pipelines with Docker and GitHub Actions, reducing deployment time by 40%.",
        ],
      },
      {
        company: "Tiger Analytics",
        location: "Chennai, Tamil Nadu",
        role: "Data Engineer Intern",
        dates: "February 2022 – July 2022",
        impact: "Data engineering and big data technologies",
        highlights: [
          "Built comprehensive ETL pipelines using Python and SQL for large-scale analytics workflows.",
          "Researched and evaluated big data technologies including Apache Spark and advanced Pandas operations.",
        ],
      },
    ],
    professionalProjects: [
      {
        name: "HeRmes",
        stack: "Python, MongoDB, FastAPI",
        description:
          "Enterprise automation platform for Return-to-Office monitoring that transformed manual HR processes, providing real-time insights and reducing administrative overhead by 60%.",
        impact: "Reduced manual effort by 60%",
        type: "Confidential",
      },
      {
        name: "HaRmony",
        stack: "Java, Spring Boot, MongoDB, JavaFX",
        description:
          "Strategic integration platform to seamlessly onboard acquired companies into IBM's ecosystem, providing unified access to talent management and compensation data.",
        impact: "Streamlined company integration",
        type: "Confidential",
      },
      {
        name: "HectoR",
        stack: "JavaScript, Node.js, Express, React",
        description:
          "Large-scale talent review automation system serving 27,000+ IBM managers worldwide, featuring real-time notifications and comprehensive analytics dashboards.",
        impact: "Serves 27k+ managers",
        type: "Confidential",
      },
    ],
    personalProjects: [
      {
        name: "ChessMaster Pro",
        stack: "React, Node.js, Socket.io, MongoDB",
        description:
          "A sophisticated online multiplayer chess platform featuring real-time gameplay, ELO rating system, game history, and spectator mode.",
        github: "https://github.com/chanduretineni/chessmaster-pro",
        demo: "https://chessmaster-pro.vercel.app",
        features: [
          "Real-time multiplayer",
          "ELO rating system",
          "Game analysis",
          "Tournament mode",
        ],
      },
      {
        name: "TaskFlow API",
        stack: "Python, FastAPI, PostgreSQL, Redis, JWT",
        description:
          "High-performance task management API with JWT authentication, Redis caching, automated email notifications, and analytics.",
        github: "https://github.com/chanduretineni/taskflow-api",
        demo: "https://taskflow-api-docs.herokuapp.com",
        features: [
          "JWT Authentication",
          "Redis caching",
          "Team collaboration",
          "Analytics dashboard",
        ],
      },
      {
        name: "BookHub Community",
        stack: "Java, Spring Boot, Thymeleaf, MySQL",
        description:
          "Social platform for book enthusiasts with reviews, personalized reading lists, user profiles, and an intelligent recommendation engine.",
        github: "https://github.com/chanduretineni/bookhub-community",
        demo: "https://bookhub-community.herokuapp.com",
        features: [
          "Social reviews",
          "Recommendation engine",
          "Reading lists",
          "Community features",
        ],
      },
    ],
    // NEW SKILLS DATA STRUCTURE
    skills: [
      { name: "Python", level: "expert" },
      { name: "Java", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Microservices", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "FastAPI", level: "expert" },
      { name: "SQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Spring Boot", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "Docker", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "System Design", level: "advanced" },
      { name: "Algorithms", level: "advanced" },
      { name: "HTML/CSS", level: "proficient" },
      { name: "Redis", level: "proficient" },
      { name: "AWS (EC2, S3)", level: "proficient" },
      { name: "Thymeleaf", level: "proficient" },
    ],
  };

  // DOM Elements
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  const confidentialModal = document.getElementById("confidential-modal");

  // Theme Management
  const themeManager = {
    init() {
      const savedTheme = localStorage.getItem("portfolio-theme") || "light";
      this.setTheme(savedTheme);
      themeToggle.addEventListener("click", () => this.toggleTheme());
    },
    setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-theme", theme);
      this.updateThemeIcon(theme);
    },
    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      this.setTheme(newTheme);
    },
    updateThemeIcon(theme) {
      const themeIcon = themeToggle.querySelector("i");
      if (themeIcon) {
        themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
      }
    },
  };

  // Content Injection
  const contentInjector = {
    experience() {
      const container = document.getElementById("experience-timeline");
      if (!container) return;
      container.innerHTML = portfolioData.experience
        .map(
          (exp) => `
                <div class="timeline-item fade-in">
                    <div class="timeline-content">
                        <div class="timeline-impact">${exp.impact}</div>
                        <h3 class="timeline-role">${exp.role}</h3>
                        <h4 class="timeline-company">${exp.company} @ ${
            exp.location
          }</h4>
                        <p class="timeline-dates">${exp.dates}</p>
                        <ul class="timeline-highlights">${exp.highlights
                          .map((h) => `<li>${h}</li>`)
                          .join("")}</ul>
                    </div>
                </div>`
        )
        .join("");
    },
    professionalProjects() {
      const container = document.getElementById("professional-projects-grid");
      if (!container) return;
      container.innerHTML = portfolioData.professionalProjects
        .map(
          (p) => `
                <div class="project-card fade-in">
                    <div class="project-type">${p.type}</div>
                    <h3 class="project-name">${p.name}</h3>
                    <p class="project-stack">${p.stack}</p>
                    <p class="project-description">${p.description}</p>
                    <div class="project-impact">Key Result: ${p.impact}</div>
                    <div class="project-links">
                        <button class="project-link project-link--disabled confidential-btn">
                            <i class="fas fa-lock"></i> Confidential
                        </button>
                    </div>
                </div>`
        )
        .join("");
    },
    personalProjects() {
      const container = document.getElementById("personal-projects-grid");
      if (!container) return;
      container.innerHTML = portfolioData.personalProjects
        .map(
          (p) => `
                <div class="project-card fade-in">
                    <h3 class="project-name">${p.name}</h3>
                    <p class="project-stack">${p.stack}</p>
                    <p class="project-description">${p.description}</p>
                    <ul class="project-features">${p.features
                      .map((f) => `<li>${f}</li>`)
                      .join("")}</ul>
                    <div class="project-links">
                        <a href="${
                          p.github
                        }" target="_blank" class="project-link"><i class="fab fa-github"></i> View Code</a>
                        <a href="${
                          p.demo
                        }" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    </div>
                </div>`
        )
        .join("");
    },
    skills() {
      const container = document.getElementById("skill-cloud-container");
      if (!container) return;
      // Shuffle skills for a more dynamic cloud appearance on each load
      const shuffledSkills = portfolioData.skills.sort(
        () => Math.random() - 0.5
      );
      container.innerHTML = shuffledSkills
        .map(
          (skill) => `
                <span class="skill-tag skill-tag--${skill.level} fade-in">${skill.name}</span>
            `
        )
        .join("");
    },
    runAll() {
      this.experience();
      this.professionalProjects();
      this.personalProjects();
      this.skills();
    },
  };

  // UI Interaction Handlers
  const uiHandlers = {
    setupNavigation() {
      navToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
      });
      document.addEventListener("click", (e) => {
        if (
          navMenu &&
          !navMenu.contains(e.target) &&
          !navToggle.contains(e.target)
        ) {
          navMenu.classList.remove("active");
          navToggle.classList.remove("active");
        }
      });
    },
    setupScrollSpy() {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-link");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinks.forEach((link) => {
                link.classList.toggle(
                  "active",
                  link.getAttribute("href") === `#${id}`
                );
              });
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      sections.forEach((section) => observer.observe(section));
    },
    setupAnimations() {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              // Add a delay for each item to create a staggered effect
              const delay = entry.target.classList.contains("skill-tag")
                ? index * 50
                : 0;
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, delay);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      document
        .querySelectorAll(".fade-in")
        .forEach((el) => observer.observe(el));
    },
    setupModal() {
      if (!confidentialModal) return;
      const closeBtn = confidentialModal.querySelector(".modal-close-btn");

      document.body.addEventListener("click", (e) => {
        if (e.target.closest(".confidential-btn")) {
          confidentialModal.classList.add("visible");
        }
      });

      closeBtn.addEventListener("click", () =>
        confidentialModal.classList.remove("visible")
      );
      confidentialModal.addEventListener("click", (e) => {
        if (e.target === confidentialModal) {
          confidentialModal.classList.remove("visible");
        }
      });
    },
    init() {
      this.setupNavigation();
      this.setupScrollSpy();
      this.setupAnimations();
      this.setupModal();
    },
  };

  // App Initialization
  function initializeApp() {
    themeManager.init();
    contentInjector.runAll();
    uiHandlers.init();
  }

  // Run the app when the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeApp);
  } else {
    initializeApp();
  }
})();
