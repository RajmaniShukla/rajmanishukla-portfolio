import { projects } from "@/app/data";
import { SectionWrapper, Card, TechBadge } from "@/app/components/ui";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects & Systems">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
            {(project.link || project.github) && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800/50 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
