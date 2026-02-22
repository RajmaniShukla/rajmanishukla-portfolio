import { experiences } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="group">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
              {exp.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {exp.company}
              {exp.location && ` (${exp.location})`} | {exp.period}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {exp.description}
            </p>
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
