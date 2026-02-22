import { experiences } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="relative">
        {/* Timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-transparent"></div>
        
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative md:pl-20">
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:flex absolute left-6 top-6 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-950 shadow-lg items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <Card 
                className="group card-lift" 
                hover={true}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">
                      {exp.company}
                      {exp.location && <span className="text-gray-500 dark:text-gray-500"> • {exp.location}</span>}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
