export type ArchitectureStage = { title: string; detail: string };
export type PortfolioProject = {
  id: string;
  icon: string;
  featured: boolean;
  category: string;
  title: string;
  overview: string;
  description: string[];
  specs: { label: string; value: string }[];
  note?: string;
  tech: string[];
  architecture: ArchitectureStage[];
  githubUrl: string;
  liveUrl?: string;
};

// Configuration comes from the linked repositories. DeepFake measurements and datasets
// are user-reported local evaluation results documented in the supplied resume.
export const projects: PortfolioProject[] = [
  {
    id: "rag",
    category: "Generative AI · NLP · LLM Engineering",
    title: "Multimodal RAG System",
    overview: "Multimodal document retrieval with citation-grounded answers.",
    specs: [
      {
        label: "Chunk / overlap",
        value: "1,000 / 200 characters",
      },
      {
        label: "Top-K retrieval",
        value: "5 default · range 1–20",
      },
      {
        label: "Embedding dimensions",
        value: "384 · MiniLM-L6-v2",
      },
      {
        label: "LLM temperature",
        value: "0.2",
      },
      {
        label: "Maximum output",
        value: "2,048 tokens",
      },
      {
        label: "Retrieval storage",
        value: "Persistent ChromaDB",
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Gemini API",
      "Sentence Transformers",
      "PyMuPDF",
      "EasyOCR",
      "Next.js",
      "Docker",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/Samarth201104/RAG-Assistant",
    icon: "network",
    featured: true,
    architecture: [
      {
        title: "Extraction",
        detail:
          "Extracts PDF text with PyMuPDF and image text with EasyOCR; Gemini adds image descriptions before indexing.",
      },
      {
        title: "Retrieval",
        detail:
          "Splits text recursively into 1,000-character chunks with 200-character overlap; normalized all-MiniLM-L6-v2 embeddings (384 dimensions) are stored in persistent ChromaDB.",
      },
      {
        title: "Generation",
        detail:
          "Builds citation-grounded Gemini 2.5 Flash prompts with temperature 0.2 and a 2,048-token output limit for question answering, summaries and document comparisons. Source metadata accompanies responses.",
      },
      {
        title: "Application",
        detail:
          "Connects modular FastAPI services to a typed Next.js client; Docker Compose adds backend health checks and persistent data mounts.",
      },
    ],
    description: [
      "Architected a multimodal RAG pipeline using PyMuPDF for PDF text and EasyOCR for image text, recursive chunking, normalized all-MiniLM-L6-v2 embeddings, persistent ChromaDB, and configurable Top-K semantic retrieval.",
      "Integrated Gemini 2.5 Flash for citation-grounded question answering, summarization, and document comparison through modular FastAPI services, Next.js, and Docker Compose.",
    ],
  },
  {
    id: "deepfake",
    category: "Deep Learning · Computer Vision · Media Forensics",
    title: "Xception-Based DeepFake Video Forensics System",
    overview: "Facial manipulation screening with an Xception CNN.",
    specs: [
      {
        label: "Frame-level accuracy",
        value: "95.87%",
      },
      {
        label: "Frame-level F1-score",
        value: "94.70%",
      },
      {
        label: "Frame-level ROC-AUC",
        value: "99.65%",
      },
      {
        label: "Facial crop",
        value: "256 × 256 RGB",
      },
      {
        label: "Train / validation / test",
        value: "70 : 15 : 15",
      },
      {
        label: "Adam learning rate",
        value: "0.0001",
      },
      {
        label: "Dropout",
        value: "0.5",
      },
      {
        label: "Inference interval",
        value: "10 frames",
      },
    ],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "RetinaFace",
      "OpenCV",
      "Xception",
      "Flask",
      "CUDA",
    ],
    githubUrl: "https://github.com/Samarth201104/DeepFake_Video",
    icon: "scan",
    featured: true,
    architecture: [
      {
        title: "Preprocessing",
        detail:
          "Samples video frames with OpenCV, localizes faces with RetinaFace and prepares normalized 256 × 256 RGB crops.",
      },
      {
        title: "Training",
        detail:
          "Fine-tunes the final 20 layers of ImageNet-pretrained Xception with 0.5 dropout, a 70:15:15 split, mixed-precision GPU training and Adam at 0.0001. Celeb-DF v2 and DFD are the training datasets reported in my resume.",
      },
      {
        title: "Evaluation",
        detail:
          "Previously measured local frame-level results and dataset provenance, as reported in my resume. These are not video-level results or independently reproduced public-repository benchmarks.",
      },
      {
        title: "Video inference",
        detail:
          "Samples every 10 frames, starting at frame index 0. Flask averages finite detected-face scores across sampled frames; this model score is not a calibrated probability. Invalid or faceless videos receive an explicit error, and temporary uploads are cleaned up.",
      },
    ],
    description: [
      "Fine-tuned ImageNet-pretrained Xception on Celeb-DF v2 and DFD using RetinaFace facial crops, a 70:15:15 split, mixed-precision GPU training, Adam optimization, and dropout for binary classification.",
      "Implemented Flask REST APIs for video inference at 10-frame intervals with mean-score aggregation across detected faces, input validation, analysis counts, and temporary-upload cleanup.",
    ],
    note: "Previously measured local frame-level results and dataset provenance, as reported in my resume. These are not video-level results or independently reproduced public-repository benchmarks.",
  },
  {
    id: "pixerase",
    category: "Computer Vision · Segmentation · Generative Inpainting",
    title: "Pixerase.AI",
    overview:
      "Background removal and object removal through segmentation and inpainting.",
    specs: [
      {
        label: "Pretrained architectures",
        value: "2 · U²-Net + MI-GAN",
      },
      {
        label: "U²-Net input",
        value: "320 × 320",
      },
      {
        label: "MI-GAN input",
        value: "512 × 512",
      },
      {
        label: "Configured per-file limit",
        value: "25 MB (25 MiB)",
      },
      {
        label: "Image limit",
        value: "12 megapixels",
      },
      {
        label: "Output format",
        value: "PNG",
      },
    ],
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "U²-Net",
      "MI-GAN",
      "GrabCut",
      "Pillow",
      "Flask",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Samarth201104/Pixerase.AI",
    icon: "layers",
    featured: true,
    architecture: [
      {
        title: "Segmentation",
        detail:
          "Uses U²-Net foreground segmentation and refined alpha masks for transparent output and background compositing.",
      },
      {
        title: "Inpainting",
        detail:
          "Runs MI-GAN inpainting on selected regions, combining rectangle and brush selections through OpenCV GrabCut refinement.",
      },
      {
        title: "Mask refinement",
        detail:
          "Maps browser canvas coordinates to source-image pixels, merges multiple masks and applies eraser corrections before inference.",
      },
      {
        title: "API services",
        detail:
          "Exposes stateless Flask endpoints with lazy model reuse, CPU/CUDA selection, image validation and temporary-workspace cleanup.",
      },
    ],
    description: [
      "Integrated 2 pretrained architectures: U²-Net at 320 × 320 for foreground segmentation and MI-GAN at 512 × 512 for generative inpainting, with GrabCut mask refinement, multi-region selection, and background compositing.",
      "Engineered stateless Flask REST APIs with lazy model reuse, CPU/CUDA selection, input validation, and temporary-file cleanup, supporting configurable 25 MB uploads, images up to 12 megapixels, and PNG output.",
    ],
  },
  {
    id: "fingerprint",
    category: "Computer Vision · Biometric Image Processing",
    title: "Contactless Fingerprint Enhancement",
    overview:
      "Turns camera captures and uploaded fingerprint images into clearer ridge-pattern representations for visual inspection.",
    specs: [
      {
        label: "Gabor orientations",
        value: "16 angles",
      },
      {
        label: "Batch limit",
        value: "50 images",
      },
      {
        label: "Acquisition",
        value: "Camera + upload",
      },
      {
        label: "Output",
        value: "Enhanced ridges",
      },
    ],
    tech: ["Python", "OpenCV", "NumPy", "FastAPI", "Next.js", "React"],
    githubUrl: "https://github.com/Samarth201104/Fingerprint-Scanner",
    liveUrl: "https://fingerprint-scanner-indol.vercel.app/",
    icon: "fingerprint",
    featured: false,
    architecture: [
      {
        title: "Region extraction",
        detail:
          "Isolates the largest contour-based region of interest, then applies grayscale preprocessing and CLAHE contrast normalization.",
      },
      {
        title: "Enhancement",
        detail:
          "Combines 16-angle Gabor responses with bilateral smoothing, adaptive thresholding and morphological opening and closing.",
      },
      {
        title: "Processing API",
        detail:
          "Runs processing through FastAPI thread-pool services with upload validation, batch results and downloadable intermediate images.",
      },
      {
        title: "Web interface",
        detail:
          "Connects a responsive Next.js interface to camera acquisition, image uploads and stage-by-stage output review.",
      },
    ],
    description: [
      "Isolates the largest contour-based region of interest, then applies grayscale preprocessing and CLAHE contrast normalization. Combines 16-angle Gabor responses with bilateral smoothing, adaptive thresholding and morphological opening and closing.",
      "Runs processing through FastAPI thread-pool services with upload validation, batch results and downloadable intermediate images. Connects a responsive Next.js interface to camera acquisition, image uploads and stage-by-stage output review.",
    ],
  },
  {
    id: "objects",
    category: "Computer Vision · Object Detection · Model Inference",
    title: "YOLO26 Object Detection",
    overview:
      "Localizes and labels objects in images, recorded videos and browser webcam frames through a shared detection service.",
    specs: [
      {
        label: "Checkpoint",
        value: "yolo26l.pt",
      },
      {
        label: "Default input size",
        value: "640 px",
      },
      {
        label: "Confidence / IoU",
        value: "0.25 / 0.45",
      },
      {
        label: "Input modes",
        value: "Image · video · webcam",
      },
    ],
    tech: [
      "Python",
      "Ultralytics",
      "YOLO26",
      "PyTorch",
      "OpenCV",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Samarth201104/Object-Detection",
    icon: "boxes",
    featured: false,
    architecture: [
      {
        title: "Model loading",
        detail:
          "Loads the configured YOLO26l checkpoint once and reuses a locked Ultralytics inference pipeline across input types.",
      },
      {
        title: "Configuration",
        detail:
          "Supports confidence and IoU controls, class filtering, configured input size and CPU/CUDA device selection with memory-error fallback.",
      },
      {
        title: "Annotation",
        detail:
          "Uses OpenCV to annotate bounding boxes and class labels, returning per-class counts and measured inference times.",
      },
      {
        title: "Application",
        detail:
          "Pairs modular Flask APIs with browser controls for uploads, video-job progress and webcam-frame inference.",
      },
    ],
    description: [
      "Loads the configured YOLO26l checkpoint once and reuses a locked Ultralytics inference pipeline across input types. Supports confidence and IoU controls, class filtering, configured input size and CPU/CUDA device selection with memory-error fallback.",
      "Uses OpenCV to annotate bounding boxes and class labels, returning per-class counts and measured inference times. Pairs modular Flask APIs with browser controls for uploads, video-job progress and webcam-frame inference.",
    ],
  },
  {
    id: "curriculum",
    category: "Generative AI · NLP · Document Intelligence",
    title: "Curriculum Gap Identifier",
    overview:
      "Compares academic curricula with reference standards to surface missing topics and generate improvement recommendations.",
    specs: [
      {
        label: "Analysis stages",
        value: "7",
      },
      {
        label: "Extraction formats",
        value: "PDF · DOCX · TXT",
      },
      {
        label: "Full / partial match",
        value: "≥ 0.80 / ≥ 0.60",
      },
      {
        label: "Report formats",
        value: "JSON + PDF",
      },
    ],
    tech: [
      "Python",
      "Gemini API",
      "NumPy",
      "Scikit-learn",
      "pdfplumber",
      "python-docx",
      "Flask",
      "Next.js",
      "React",
    ],
    githubUrl: "https://github.com/Samarth201104/Curriculum_Gap_Identifier",
    icon: "files",
    featured: false,
    architecture: [
      {
        title: "Analysis stages",
        detail:
          "Organizes extraction, AI structuring, similarity analysis, mapping, gap detection, recommendations and reporting into seven stages.",
      },
      {
        title: "Extraction",
        detail:
          "Provides PDF, DOCX and TXT extractors; Gemini 2.5 Flash structures topics, competencies and learning outcomes into JSON.",
      },
      {
        title: "Topic mapping",
        detail:
          "Maps standards to their closest curriculum topics using text-embedding-004 vectors and cosine similarity with explicit alignment thresholds.",
      },
      {
        title: "Reporting",
        detail:
          "Runs Flask background tasks with Next.js progress polling and downloadable PDF reports; the current web upload path uses PDF filenames.",
      },
    ],
    description: [
      "Organizes extraction, AI structuring, similarity analysis, mapping, gap detection, recommendations and reporting into seven stages. Provides PDF, DOCX and TXT extractors; Gemini 2.5 Flash structures topics, competencies and learning outcomes into JSON.",
      "Maps standards to their closest curriculum topics using text-embedding-004 vectors and cosine similarity with explicit alignment thresholds. Runs Flask background tasks with Next.js progress polling and downloadable PDF reports; the current web upload path uses PDF filenames.",
    ],
  },
];
