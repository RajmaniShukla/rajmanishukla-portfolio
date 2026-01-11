"use client";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Rajmani Shukla
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-4 font-light">
            Tech Lead – Infrastructure & Operations | AI/ML Engineer
          </p>
          <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-10 leading-relaxed">
            Building scalable, reliable, and production-ready systems for high-growth startups.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              View Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/rajmani-shukla/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white/30 rounded-lg font-medium hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About
        </h2>
        <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
          I am a Tech Lead specializing in Infrastructure, Operations, and AI/ML systems, currently working with a US-based startup (ShelfEx LLC).
          I design and lead scalable platforms that support modern machine learning and backend workloads.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="group p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white group-hover:text-gray-100 transition-colors">
              Tech Lead – Infrastructure & Operations
            </h3>
            <p className="text-gray-400 mb-3">ShelfEx LLC (USA) | Feb 2025 – Present</p>
            <p className="text-gray-300 leading-relaxed">
              Leading infrastructure initiatives and operations for a high-growth startup, designing scalable systems that support AI/ML workloads.
            </p>
          </div>
          <div className="group p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white group-hover:text-gray-100 transition-colors">
              AI/ML Engineer
            </h3>
            <p className="text-gray-400 mb-3">Wassetstoff Pvt. Ltd. | Oct 2024 – Feb 2025</p>
            <p className="text-gray-300 leading-relaxed">
              Developed and deployed machine learning models in production, building robust ML pipelines and infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Projects />

      {/* What I Do Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          What I Do
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Cloud Infrastructure & Scaling",
            "AI/ML Production Systems",
            "Platform Reliability & DevOps",
            "Backend & System Design",
            "Technical Leadership",
            "Mentoring & Coaching"
          ].map((item, index) => (
            <li 
              key={index}
              className="p-4 rounded-lg border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 text-gray-300 hover:text-white transition-all duration-300 cursor-default"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300">
            <p className="text-gray-300 text-lg font-medium">IIIT Hyderabad</p>
            <p className="text-gray-400">PG Program in Software Engineering with Data Science</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300">
            <p className="text-gray-300 text-lg font-medium">Dr. A.P.J. Abdul Kalam Technical University</p>
            <p className="text-gray-400">B.Tech CSE</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300">
            <p className="text-gray-300 text-lg font-medium">GATE Qualified 2020</p>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
