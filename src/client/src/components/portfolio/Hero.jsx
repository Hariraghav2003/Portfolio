import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

// Hero section - the first thing visitors see
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative section-container text-center py-20">
        {/* Greeting */}
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up opacity-0 stagger-1">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-fade-up opacity-0 stagger-2">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display mb-2 animate-fade-up opacity-0 stagger-3">
          <span className="gradient-text">{personalInfo.title}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-up opacity-0 stagger-4">
          {personalInfo.subtitle}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground mb-10 animate-fade-up opacity-0 stagger-5">
          I build exceptional, high-performance web applications using the MERN stack. 
          Focused on creating seamless user experiences and robust backend solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover-lift"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: "0.7s" }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
