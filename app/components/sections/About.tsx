import { personalInfo } from "@/app/data";
import { SectionWrapper } from "@/app/components/ui";

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      <p className="text-gray-700 dark:text-gray-300 max-w-3xl text-lg leading-relaxed">
        {personalInfo.about}
      </p>
    </SectionWrapper>
  );
}
