import { personalInfo } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

const codingPlatforms = [
  { name: "HackerRank", icon: "💻", color: "from-green-500 to-emerald-600", bgHover: "hover:bg-green-50 dark:hover:bg-green-900/20" },
  { name: "LeetCode", icon: "🧩", color: "from-yellow-500 to-orange-500", bgHover: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20" },
  { name: "GeeksforGeeks", icon: "📚", color: "from-green-600 to-teal-600", bgHover: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20" },
];

export default function CodingProfiles() {
  const codingLinks = personalInfo.socialLinks.filter((link) =>
    codingPlatforms.some((p) => p.name === link.name)
  );

  if (codingLinks.length === 0) return null;

  return (
    <SectionWrapper id="coding-profiles" title="Coding Profiles">
      <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
        Check out my problem-solving skills and coding journey on these platforms.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {codingLinks.map((link) => {
          const platform = codingPlatforms.find((p) => p.name === link.name);
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800/50
                ${platform?.bgHover || ""}
                hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-300 card-lift
                flex flex-col items-center text-center
              `}
            >
              <div className={`
                w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${platform?.color || "from-gray-500 to-gray-600"}
                flex items-center justify-center mb-4 
                group-hover:scale-110 transition-transform shadow-lg
              `}>
                <span className="text-2xl sm:text-3xl">{platform?.icon || "🔗"}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                View Profile
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </p>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
