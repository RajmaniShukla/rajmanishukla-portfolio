import { achievements } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

const achievementIcons: Record<string, string> = {
  "gate-2020": "🎓",
  "ceh-v9": "🔐",
  "hackathon-iitg": "🏆",
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => (
          <Card 
            key={achievement.id} 
            className="group card-lift text-center sm:text-left"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform">
                {achievementIcons[achievement.id] || "🏆"}
              </div>
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {achievement.description}
                  </p>
                )}
                {achievement.year && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
                    {achievement.year}
                  </span>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
