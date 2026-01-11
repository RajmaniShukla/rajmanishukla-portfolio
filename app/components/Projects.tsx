const projects = [
  {
    title: "AI-Driven Inventory Platform",
    desc: "Designed and scaled infrastructure supporting real-time AI predictions for a US startup.",
    tech: ["Python", "Cloud", "ML Pipelines", "APIs"]
  },
  {
    title: "MLOps Production Pipeline",
    desc: "Built automated training, deployment, and monitoring pipelines for machine learning models.",
    tech: ["Python", "CI/CD", "Monitoring"]
  },
  {
    title: "Scalable Backend Platform",
    desc: "Led architecture and reliability improvements for high-availability backend services.",
    tech: ["System Design", "Databases", "Cloud"]
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Projects & Systems
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div 
            key={p.title} 
            className="group p-6 border border-gray-800/50 rounded-xl hover:border-gray-700 hover:bg-gray-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors">
              {p.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span 
                  key={t} 
                  className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 group-hover:border-gray-600 group-hover:bg-gray-800 transition-all"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
