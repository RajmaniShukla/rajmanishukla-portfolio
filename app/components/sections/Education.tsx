import { education } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu) => (
          <Card key={edu.id}>
            <p className="text-gray-900 dark:text-gray-300 text-lg font-medium">
              {edu.institution}
              {edu.year && ` (${edu.year})`}
            </p>
            {edu.degree && (
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
            )}
            {edu.description && (
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                {edu.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
