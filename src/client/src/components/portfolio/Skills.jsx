import React from "react";
import { skills } from "@/data/portfolioData";

// Skills section with visual skill bars
const Skills = () => {
  // Group skills by category
  //   const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-primary font-mono">
                  {skill.level}%
                </span>
              </div>

              {/* Skill bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
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
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 glass-card font-mono text-sm hover:border-primary transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
