import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "StockPulse: Stock Market Analysis & Prediction",
    description:
      "Developed a finance-focused data science project that analyzes historical stock market data to identify trends, patterns, and investment insights.",
    image: "/projects/ChatGPT Image Jun 4, 2026, 03_04_58 PM.png",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
      "Machine Learning",
    ],
    link:
      "https://github.com/stiwari0223-ux/stockpulse-finance-project",
    github:
      "https://github.com/stiwari0223-ux/stockpulse-finance-project",
  },

  {
    title: "Student Placement Prediction System",
    description:
      "Built a machine learning model to predict student placement outcomes based on academic performance, skills, and other relevant factors.",
    image: "/projects/ChatGPT Image Jun 4, 2026, 03_03_06 PM.png",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
      "Machine Learning",
    ],
    link:
      "https://github.com/stiwari0223-ux/Student-Placement-Prediction-using-Machine-Learning",
    github:
      "https://github.com/stiwari0223-ux/Student-Placement-Prediction-using-Machine-Learning",
  },

  {
    title: "sales-data-cleaning-visualization",
    description:
      "Sales Data Cleaning & Visualization is a data analysis project focused on cleaning, processing, and visualizing sales data to identify trends, patterns, and business insights. It uses Python, Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, EDA, and visualization.",
    image:
      "/projects/ChatGPT Image Aug 18, 2026, 08_11_08 PM.png",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "EDA",
      "Data Visualization",
      "Sales Analysis",
    ],
    link:
      "https://github.com/stiwari0223-ux/sales-data-cleaning-visualization",
    github:
      "https://github.com/stiwari0223-ux/sales-data-cleaning-visualization",
  },

  {
    title: "PhishGuard",
    description:
      "PhishGuard is a client-based AI-powered phishing detection system designed to identify potentially malicious websites by analyzing URL characteristics and network indicators. The project focuses on real-time threat detection without backend dependency, making it lightweight, fast, and privacy-friendly.",
    image: "/projects/Screenshot 2026-06-04 145548.png",
    tags: [
      "React",
      "Rust",
      "JavaScript",
      "HTML/CSS",
    ],
    link:
      "https://phishguard-kappa.vercel.app/",
    github:
      "https://github.com/stiwari0223-ux/PhishShield-AI",
  },

  {
    title: "DataVoyage-Titanic-EDA-Project",
    description:
      "DataVoyage – Titanic EDA is a data analysis project that explores the Titanic dataset to uncover patterns in passenger survival based on factors such as age, gender, passenger class, and fare. It uses Python, Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, exploratory analysis, and visualization.",
    image:
      "/projects/ChatGPT Image Aug 16, 2026, 01_12_18 PM.png",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Data Analysis",
      "Data Visualization",
      "Titanic Dataset",
    ],
    link:
      "https://github.com/stiwari0223-ux/DataVoyage-Titanic-EDA-Project",
    github:
      "https://github.com/stiwari0223-ux/DataVoyage-Titanic-EDA-Project",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glows */}
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

          {visibleProjects.map((project, idx) => (

            <div
              key={project.title}
              className="
                group
                glass
                rounded-2xl
                overflow-hidden
                animate-fade-in
                md:row-span-1
              "
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-card
                    via-card/50
                    to-transparent
                    opacity-60
                  "
                />

                {/* Overlay Links */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    gap-4
                    opacity-100
                    md:opacity-0
                    md:group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                >

                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="
                      p-3
                      rounded-full
                      glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      cursor-pointer
                      touch-manipulation
                    "
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="
                      p-3
                      rounded-full
                      glass
                      hover:bg-primary
                      hover:text-primary-foreground
                      transition-all
                      cursor-pointer
                      touch-manipulation
                    "
                  >
                    <Github className="w-5 h-5" />
                  </a>

                </div>

              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                {/* Title */}
                <div className="flex items-start justify-between">

                  <h3
                    className="
                      text-xl
                      font-semibold
                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      w-5
                      h-5
                      text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />

                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag, tagIdx) => (

                    <span
                      key={`${project.title}-${tagIdx}`}
                      className="
                        px-4
                        py-1.5
                        rounded-full
                        bg-surface
                        text-xs
                        font-medium
                        border
                        border-border/50
                        text-muted-foreground
                        hover:border-primary/50
                        hover:text-primary
                        transition-all
                        duration-300
                      "
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

          <AnimatedBorderButton
            onClick={() => setShowAll((prev) => !prev)}
          >

            {showAll ? "Show Less" : "View All Projects"}

            {showAll ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}

          </AnimatedBorderButton>

        </div>

      </div>
    </section>
  );
};
