import { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    id: "shelfex",
    title: "Tech Lead – Infrastructure & Operations",
    company: "ShelfEx LLC",
    location: "USA (Remote)",
    period: "Feb 2025 – Present",
    description:
      "Leading infrastructure initiatives and operations for a high-growth startup, designing scalable systems that support AI/ML workloads.",
    highlights: [
      "Architecting cloud infrastructure for real-time AI predictions",
      "Building and scaling ML pipelines for production workloads",
      "Leading a team of engineers on infrastructure reliability",
    ],
  },
  {
    id: "wassetstoff",
    title: "AI/ML Engineer",
    company: "Wassetstoff Pvt. Ltd.",
    period: "Oct 2024 – Feb 2025",
    description:
      "Developed and deployed machine learning models in production, building robust ML pipelines and infrastructure.",
    highlights: [
      "Built end-to-end ML pipelines from data ingestion to deployment",
      "Implemented model monitoring and automated retraining systems",
      "Reduced inference latency by 40% through optimization",
    ],
  },
];
