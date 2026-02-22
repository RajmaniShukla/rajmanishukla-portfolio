import { Skill } from "@/app/types";

export const skills: Skill[] = [
  { name: "Cloud Infrastructure & Scaling", category: "Infrastructure" },
  { name: "AI/ML Production Systems", category: "AI/ML" },
  { name: "Platform Reliability & DevOps", category: "Infrastructure" },
  { name: "Backend & System Design", category: "Engineering" },
  { name: "Technical Leadership", category: "Leadership" },
  { name: "Mentoring & Coaching", category: "Leadership" },
];

// Technical skills from resume
export const technicalSkills = {
  languages: ["Python", "C/C++", "SQL", "i4GL"],
  frameworks: ["Flask", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  cloud: ["AWS", "GCP"],
  mlops: ["YOLO", "Faster R-CNN", "OpenCV", "NLTK"],
  infrastructure: ["Linux", "Docker", "CI/CD"],
  tools: ["Matlab", "Git", "Monitoring"],
};

// Certifications and Achievements
export const achievements = [
  {
    id: "gate-2020",
    title: "GATE 2020 Qualified",
    description: "Graduate Aptitude Test in Engineering",
    year: "2020",
  },
  {
    id: "ceh-v9",
    title: "CEHv9 Certified",
    description: "Certified Ethical Hacker v9",
    year: "2018 - 2021",
  },
  {
    id: "hackathon-iitg",
    title: "Hackathon Runner-up",
    description: "IIT Guwahati Hackathon",
  },
];
