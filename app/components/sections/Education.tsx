import { education, keySubjects } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {education.map((edu, index) => (
          <Card key={edu.id} className="group card-lift">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {edu.institution}
                  {edu.year && (
                    <span className="ml-2 text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-500">
                      ({edu.year})
                    </span>
                  )}
                </h3>
                {edu.degree && (
                  <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium">
                    {edu.degree}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Key Subjects */}
      {keySubjects && keySubjects.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800/50">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            Key Subjects
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {keySubjects.map((subject) => (
              <span
                key={subject}
                className="px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
