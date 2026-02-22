import { personalInfo } from "@/app/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800/50 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {personalInfo.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Optional tagline */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800/50 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {personalInfo.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
