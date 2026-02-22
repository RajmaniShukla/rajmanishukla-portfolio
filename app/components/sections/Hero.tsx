import { personalInfo } from "@/app/data";
import { Button } from "@/app/components/ui";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 sm:pb-20 w-full">
        <div className="animate-fade-in">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight">
            {personalInfo.name}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 font-medium">
            {personalInfo.title}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Button href={personalInfo.resumeUrl} size="lg" className="w-full sm:w-auto justify-center">
              <span className="mr-2">📄</span> View Resume
            </Button>
            <Button 
              href="#contact" 
              variant="secondary" 
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              <span className="mr-2">💬</span> Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {personalInfo.socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300"
              >
                {link.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
