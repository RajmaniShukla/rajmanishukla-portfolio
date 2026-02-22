import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: "ai-inventory",
    title: "AI-Driven Inventory Platform",
    description:
      "Designed and scaled infrastructure supporting real-time AI predictions for a US startup.",
    technologies: ["Python", "Cloud", "ML Pipelines", "APIs"],
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Production Pipeline",
    description:
      "Built automated training, deployment, and monitoring pipelines for machine learning models.",
    technologies: ["Python", "CI/CD", "Monitoring", "Docker"],
  },
  {
    id: "backend-platform",
    title: "Scalable Backend Platform",
    description:
      "Led architecture and reliability improvements for high-availability backend services.",
    technologies: ["System Design", "Databases", "Cloud", "Kubernetes"],
  },
];
