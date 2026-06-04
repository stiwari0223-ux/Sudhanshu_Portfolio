import { ArrowUpRight, Github, } from "lucide-react";


import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
  title: "StockPulse: Stock Market Analysis & Prediction",
    description:
      "Developed a finance-focused data science project that analyzes historical stock market data to identify trends, patterns, and investment insights.",
    image: "/projects/project2.png",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook", "Machine Learning"],
    link: "#",
    github: "#",
  },

  {
  title: "Student Placement Prediction System",
    description:
      "Built a machine learning model to predict student placement outcomes based on academic performance, skills, and other relevant factors.",
    image: "/projects/project2.png",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook", "Machine Learning"],
    link: "https://github.com/stiwari0223-ux/Student-Placement-Prediction-using-Machine-Learning",
    github: "https://github.com/stiwari0223-ux/Student-Placement-Prediction-using-Machine-Learning",
  },
  {
  title: "MediCard: Healthcare Analytics & Disease Prediction (Team Project)",
    description:
      "Collaborated in a team to develop MediCard, a healthcare analytics platform that leverages machine learning and data analysis to assess patient health data and predict potential medical conditions.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    link: "#",
    github: "#",
  },
  {
    title: "PhishShield AI",
    description:
      "PhishShield AI is a client-based AI-powered phishing detection system designed to identify potentially malicious websites by analyzing URL characteristics and network indicators. The project focuses on real-time threat detection without backend dependency, making it lightweight, fast, and privacy-friendly.",
    image: "/projects/project2.jpeg",
    tags: ["React, Rust, JavaScript, HTML/CSS"],
    link: "https://github.com/stiwari0223-ux/PhishShield-AI",
    github: "https://github.com/stiwari0223-ux/PhishShield-AI",
  },
  {
    title: "CyberGuard AI",
    description:
      "CyberGuard AI is an AI-powered, multi-agent cybersecurity assistant developed during a Google AI 5-day program and hosted on Kaggle. The project is designed to educate users about cybersecurity threats and secure coding practices through intelligent analysis and real-world simulations.",
    image: "/public/projects/Screenshot 2026-06-04 145548.png",
    tags: ["Python, Multi-Agent AI, Google AI, Kaggle"],
    link: "https://www.kaggle.com/code/sudhanshutiwari2006/cyberedugen-personalized-learning-with-ai-agents",
    github: "https://www.kaggle.com/code/sudhanshutiwari2006/cyberedugen-personalized-learning-with-ai-agents",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
