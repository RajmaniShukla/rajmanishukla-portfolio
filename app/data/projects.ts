import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: "ai-inventory",
    title: "AI-Powered Inventory Management System",
    description:
      "Developed a real-time inventory management system using object detection and segmentation models. Increased operational efficiency by 20% through enhanced automation and accuracy.",
    technologies: ["Python", "YOLO", "OpenCV", "Cloud", "ML Pipelines"],
  },
  {
    id: "ears",
    title: "EARS (Employee Attendance & Reporting System)",
    description:
      "Developed an automated Employee Attendance and Reporting System using i4GL. Integrated seamlessly with wage package to track attendance, leaves, overtime, and short leaves.",
    technologies: ["i4GL", "Database", "Enterprise Systems"],
  },
  {
    id: "predict-name-nlp",
    title: "Predict Name (NLP)",
    description:
      "Obtained vector representation of texts using CBOW and skip-gram methods. Used tokenization to tag parts of speech and predict named entities in sentences using NLTK library.",
    technologies: ["Python", "NLTK", "NLP", "Word2Vec", "CBOW"],
  },
  {
    id: "bio-identity",
    title: "Bio Identity (Matlab)",
    description:
      "Developed a biometric identification system using deep learning to analyze face, iris, and fingerprint data. Implemented feature extraction algorithms with majority voting for accuracy.",
    technologies: ["Matlab", "Deep Learning", "Biometrics", "Computer Vision"],
  },
  {
    id: "digital-kisan",
    title: "Digital Kisan (Android App)",
    description:
      "Agricultural app using historical data and predictive models to suggest best crops for each season. Allows users to plan and track activities with reminders and updates.",
    technologies: ["Android", "Java", "Machine Learning", "Mobile App"],
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Production Pipeline",
    description:
      "Built automated training, deployment, and monitoring pipelines for machine learning models.",
    technologies: ["Python", "CI/CD", "Monitoring", "Docker", "Kubernetes"],
  },
  {
    id: "backend-platform",
    title: "Scalable Backend Platform",
    description:
      "Led architecture and reliability improvements for high-availability backend services.",
    technologies: ["System Design", "Databases", "Cloud", "AWS", "GCP"],
  },
];
