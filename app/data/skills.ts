import { Skill } from "@/app/types";

export const skills: Skill[] = [
  { name: "Cloud Infrastructure & Scaling", category: "Infrastructure" },
  { name: "AI/ML Production Systems", category: "AI/ML" },
  { name: "Platform Reliability & DevOps", category: "Infrastructure" },
  { name: "Backend & System Design", category: "Engineering" },
  { name: "Technical Leadership", category: "Leadership" },
  { name: "Mentoring & Coaching", category: "Leadership" },
];

// Technical skills for a more detailed view (optional use)
export const technicalSkills = {
  languages: ["Python", "TypeScript", "Go", "SQL"],
  cloud: ["AWS", "GCP", "Azure"],
  mlops: ["MLflow", "Kubeflow", "SageMaker"],
  infrastructure: ["Kubernetes", "Docker", "Terraform"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "CI/CD", "Prometheus", "Grafana"],
};
