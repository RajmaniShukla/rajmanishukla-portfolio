import { projects } from "@/app/data";
import { SectionWrapper, Card, TechBadge } from "@/app/components/ui";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects & Systems">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group card-lift flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Project icon/number */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 group-hover:scale-110 transition-transform">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.slice(0, 4).map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
            
            {(project.link || project.github) && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800/50 flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
