import { skills } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="What I Do">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/30 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
