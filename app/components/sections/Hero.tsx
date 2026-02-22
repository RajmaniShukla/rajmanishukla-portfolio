import { personalInfo } from "@/app/data";
import { Button } from "@/app/components/ui";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-32">
      <div className="animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light">
          {personalInfo.title}
        </p>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href={personalInfo.resumeUrl}>View Resume</Button>
          {personalInfo.socialLinks.slice(0, 2).map((link) => (
            <Button
              key={link.name}
              href={link.url}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
