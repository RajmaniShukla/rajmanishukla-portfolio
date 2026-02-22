import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Education,
  Achievements,
  CodingProfiles,
  Contact,
} from "@/app/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
