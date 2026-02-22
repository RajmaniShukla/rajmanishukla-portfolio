import { personalInfo } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

const codingPlatforms = [
  { name: "HackerRank", icon: "💻", color: "hover:bg-green-50 dark:hover:bg-green-900/20" },
  { name: "LeetCode", icon: "🧩", color: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20" },
  { name: "GeeksforGeeks", icon: "📚", color: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20" },
];

export default function CodingProfiles() {
  const codingLinks = personalInfo.socialLinks.filter((link) =>
    codingPlatforms.some((p) => p.name === link.name)
  );

  if (codingLinks.length === 0) return null;

  return (
    <SectionWrapper id="coding-profiles" title="Coding Profiles">
      <div className="grid md:grid-cols-3 gap-6">
        {codingLinks.map((link) => {
          const platform = codingPlatforms.find((p) => p.name === link.name);
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group p-6 rounded-xl border border-gray-200 dark:border-gray-800/50
                ${platform?.color || ""}
                hover:border-gray-300 dark:hover:border-gray-700
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                flex flex-col items-center text-center
              `}
            >
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {platform?.icon || "🔗"}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {link.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                View Profile →
              </p>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
