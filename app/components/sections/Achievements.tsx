import { achievements } from "@/app/data";
import { SectionWrapper, Card } from "@/app/components/ui";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" title="Achievements & Certifications">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="text-center">
            <div className="mb-3">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {achievement.title}
            </h3>
            {achievement.description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {achievement.description}
              </p>
            )}
            {achievement.year && (
              <p className="text-gray-500 dark:text-gray-500 text-xs">
                {achievement.year}
              </p>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
