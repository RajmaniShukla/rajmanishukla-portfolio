import { skills, technicalSkills } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="What I Do">
      {/* Core competencies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 cursor-default card-lift"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <span className="text-blue-600 dark:text-blue-400 text-lg">✦</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skills Grid */}
      <div className="bg-gray-50 dark:bg-gray-900/30 rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-800/50">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(technicalSkills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs sm:text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
