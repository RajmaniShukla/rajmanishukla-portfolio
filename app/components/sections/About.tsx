import { personalInfo, contactDetails } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main about text */}
        <div className="lg:col-span-2">
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {personalInfo.about}
          </p>
        </div>
        
        {/* Quick info card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-800/50">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                    {contactDetails?.location || "India"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-lg">📧</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium hover:underline break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-lg">💼</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">Status</p>
                  <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
