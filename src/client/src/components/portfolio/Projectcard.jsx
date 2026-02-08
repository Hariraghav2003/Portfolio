import { Github, ExternalLink } from "lucide-react";

// Reusable ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card overflow-hidden hover-lift group">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
          {project.category}
        </span>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs text-muted-foreground"
            >
              • {feature}
            </span>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
