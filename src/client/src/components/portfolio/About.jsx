import { Code, Rocket, Users, Coffee } from "lucide-react";
import { aboutMe, personalInfo } from "@/data/portfolioData";

// About section with professional summary and highlights
const About = () => {
  const stats = [
    { icon: Code, value: "10+", label: "Projects Completed" },
    { icon: Rocket, value: "2+", label: "Years Experience" },
    { icon: Users, value: "5+", label: "Happy Clients" }
  ];

  return (
    <section id="about" className="pt-0 pb-20 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl -rotate-3" />
              
              {/* Main card */}
              <div className="relative glass-card p-8 h-full flex flex-col justify-center">
                <div className="text-6xl mb-6">👨‍💻</div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  Based in {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {aboutMe.summary}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {aboutMe.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Resume Download */}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Download Resume
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-lift"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-display font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
