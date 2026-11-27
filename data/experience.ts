export type ExperienceEntry = {
  company: string;
  role: string;
  date: string;
  mode: string;
  bullets: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: "MCM BPO",
    role: "Python Developer",
    date: "Jul 2026 — Sep 2026",
    mode: "On-site",
    tags: [
      "Python",
      "REST APIs",
      "SMPP",
      "PostgreSQL",
      "SQL",
      "React.js",
      "Git",
      "GitHub",
    ],
    bullets: [
      "Engineered Python-based REST APIs supporting 2 SMS workflows (single and bulk), CSV/XLSX data ingestion, and single-session SMPP communication for bulk message submissions.",
      "Integrated PostgreSQL and React.js with backend services, implementing recipient-level submission tracking, 3 reporting counters (total, submitted, failed), database operations, API integration, and backend debugging.",
    ],
    metrics: [
      {
        label: "SMS workflows",
        value: "2 · single + bulk",
      },
      {
        label: "Spreadsheet formats",
        value: "2 · CSV + XLSX",
      },
      {
        label: "SMPP communication",
        value: "Single session",
      },
      {
        label: "Reporting counters",
        value: "3 · total / submitted / failed",
      },
    ],
  },
  {
    company: "Brainwonders",
    role: "AI Intern",
    date: "Dec 2025 — Jan 2026",
    mode: "On-site",
    tags: [
      "Python",
      "OpenCV",
      "FastAPI",
      "Computer Vision",
      "Image Processing",
      "NLP",
      "Gemini API",
    ],
    bullets: [
      "Developed a contactless fingerprint processing pipeline using contour-based ROI extraction, CLAHE, 16-angle Gabor filtering, adaptive thresholding, and morphological operations, supporting batch processing of up to 50 fingerprint images through FastAPI.",
      "Engineered a 7-stage NLP pipeline using Gemini 2.5 Flash, supporting 3 document formats (PDF, DOCX, and TXT), semantic similarity analysis, curriculum mapping, automated gap identification, and recommendation generation.",
    ],
    metrics: [
      {
        label: "Gabor orientations",
        value: "16 angles",
      },
      {
        label: "Batch capacity",
        value: "Up to 50 images",
      },
      {
        label: "NLP pipeline",
        value: "7 stages",
      },
      {
        label: "Extraction formats",
        value: "3 · PDF / DOCX / TXT",
      },
    ],
  },
  {
    company: "Makhija Quantum AI",
    role: "AI Intern",
    date: "Nov 2025",
    mode: "Hybrid",
    tags: [
      "Python",
      "PyTorch",
      "OpenCV",
      "U²-Net",
      "MI-GAN",
      "Flask",
      "REST APIs",
    ],
    bullets: [
      "Integrated 2 pretrained deep learning architectures, U²-Net and MI-GAN, for foreground image segmentation and generative image inpainting using PyTorch.",
      "Implemented OpenCV-based image preprocessing, mask refinement, model inference, and Flask REST API integration for 2 image editing workflows: automated background removal and intelligent object removal.",
    ],
    metrics: [
      {
        label: "Pretrained architectures",
        value: "2 · U²-Net + MI-GAN",
      },
      {
        label: "Image editing workflows",
        value: "2 · background + object removal",
      },
      {
        label: "Vision tasks",
        value: "Segmentation + inpainting",
      },
      {
        label: "Model integration",
        value: "Flask REST APIs",
      },
    ],
  },
];
