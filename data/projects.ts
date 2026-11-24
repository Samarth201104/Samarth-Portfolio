export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  overview: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

// Implementation evidence and revision IDs: docs/content-verification.md.
export const projects: PortfolioProject[] = [
  {
    id: 'rag', category: 'Generative AI · NLP · LLM Engineering',
    title: 'Multimodal RAG System',
    overview: 'Document intelligence for finding answers across PDFs and images, with retrieved context and source citations.',
    highlights: [
      'Extracts PDF text with PyMuPDF and image text with EasyOCR; Gemini adds image descriptions before indexing.',
      'Combines recursive character chunking, normalized MiniLM embeddings and persistent ChromaDB storage with configurable Top-K retrieval.',
      'Builds context-grounded Gemini 2.5 Flash prompts for question answering, summaries and document comparisons, returning source metadata.',
      'Connects modular FastAPI services to a typed Next.js client; Docker Compose adds backend health checks and persistent data mounts.',
    ],
    specs: [{ label: 'Chunk / overlap', value: '1,000 / 200 chars' }, { label: 'Top-K range', value: '1–20' }, { label: 'Temperature', value: '0.2' }, { label: 'Output limit', value: '2,048 tokens' }],
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini', 'Sentence Transformers', 'PyMuPDF', 'EasyOCR', 'Next.js', 'Docker'],
    githubUrl: 'https://github.com/Samarth201104/RAG-Assistant',
  },
  {
    id: 'deepfake', category: 'Deep Learning · Computer Vision · Media Forensics',
    title: 'Xception DeepFake Video Forensics',
    overview: 'Screens videos for potential facial manipulation using face crops and a binary Xception classifier.',
    highlights: [
      'Samples video frames with OpenCV, localizes faces with RetinaFace and prepares normalized 256 × 256 RGB crops.',
      'Fine-tunes the final 20 layers of ImageNet-pretrained Xception with class weighting, augmentation, mixed precision and early stopping.',
      'Evaluates frame-level classifications separately from aggregated video predictions using precision, recall, F1, balanced accuracy and ROC-AUC.',
      'A Flask API averages detected-face scores across sampled frames and returns analysis counts; validates videos and cleans temporary uploads.',
    ],
    specs: [{ label: 'Model input', value: '256 × 256 RGB' }, { label: 'Inference sampling', value: 'Every 10th frame' }, { label: 'Training batch', value: '16 images' }, { label: 'Adam learning rate', value: '0.0001' }],
    tech: ['Python', 'TensorFlow', 'Keras', 'Xception', 'RetinaFace', 'OpenCV', 'Scikit-learn', 'Flask'],
    githubUrl: 'https://github.com/Samarth201104/DeepFake_Video',
  },
  {
    id: 'pixerase', category: 'Computer Vision · Segmentation · Generative Inpainting',
    title: 'Pixerase.AI',
    overview: 'An image editing application that extracts foregrounds, replaces backgrounds and reconstructs regions after object removal.',
    highlights: [
      'Uses U²-Net foreground segmentation and refined alpha masks for transparent output and background compositing.',
      'Runs MI-GAN inpainting on selected regions, combining rectangle and brush selections through OpenCV GrabCut refinement.',
      'Maps browser canvas coordinates to source-image pixels, merges multiple masks and applies eraser corrections before inference.',
      'Exposes stateless Flask endpoints with lazy model reuse, CPU/CUDA selection, image validation and temporary-workspace cleanup.',
    ],
    specs: [{ label: 'U²-Net input', value: '320 × 320' }, { label: 'MI-GAN input', value: '512 × 512' }, { label: 'Per-file limit', value: '25 MB' }, { label: 'Image limit', value: '12 megapixels' }],
    tech: ['Python', 'PyTorch', 'OpenCV', 'U²-Net', 'MI-GAN', 'GrabCut', 'Pillow', 'Flask', 'JavaScript'],
    githubUrl: 'https://github.com/Samarth201104/Pixerase.AI',
  },
  {
    id: 'fingerprint', category: 'Computer Vision · Biometric Image Processing',
    title: 'Contactless Fingerprint Enhancement',
    overview: 'Turns camera captures and uploaded fingerprint images into clearer ridge-pattern representations for visual inspection.',
    highlights: [
      'Isolates the largest contour-based region of interest, then applies grayscale preprocessing and CLAHE contrast normalization.',
      'Combines 16-angle Gabor responses with bilateral smoothing, adaptive thresholding and morphological opening and closing.',
      'Runs processing through FastAPI thread-pool services with upload validation, batch results and downloadable intermediate images.',
      'Connects a responsive Next.js interface to camera acquisition, image uploads and stage-by-stage output review.',
    ],
    specs: [{ label: 'Gabor orientations', value: '16 angles' }, { label: 'Batch limit', value: '50 images' }, { label: 'Acquisition', value: 'Camera + upload' }, { label: 'Output', value: 'Enhanced ridges' }],
    tech: ['Python', 'OpenCV', 'NumPy', 'FastAPI', 'Next.js', 'React'],
    githubUrl: 'https://github.com/Samarth201104/Fingerprint-Scanner',
    liveUrl: 'https://fingerprint-scanner-indol.vercel.app/',
  },
  {
    id: 'objects', category: 'Computer Vision · Object Detection · Model Inference',
    title: 'YOLO26 Object Detection',
    overview: 'Localizes and labels objects in images, recorded videos and browser webcam frames through a shared detection service.',
    highlights: [
      'Loads the configured YOLO26l checkpoint once and reuses a locked Ultralytics inference pipeline across input types.',
      'Supports confidence and IoU controls, class filtering, configured input size and CPU/CUDA device selection with memory-error fallback.',
      'Uses OpenCV to annotate bounding boxes and class labels, returning per-class counts and measured inference times.',
      'Pairs modular Flask APIs with browser controls for uploads, video-job progress and webcam-frame inference.',
    ],
    specs: [{ label: 'Checkpoint', value: 'yolo26l.pt' }, { label: 'Default input size', value: '640 px' }, { label: 'Confidence / IoU', value: '0.25 / 0.45' }, { label: 'Input modes', value: 'Image · video · webcam' }],
    tech: ['Python', 'Ultralytics', 'YOLO26', 'PyTorch', 'OpenCV', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Samarth201104/Object-Detection',
  },
  {
    id: 'curriculum', category: 'Generative AI · NLP · Document Intelligence',
    title: 'Curriculum Gap Identifier',
    overview: 'Compares academic curricula with reference standards to surface missing topics and generate improvement recommendations.',
    highlights: [
      'Organizes extraction, AI structuring, similarity analysis, mapping, gap detection, recommendations and reporting into seven stages.',
      'Provides PDF, DOCX and TXT extractors; Gemini 2.5 Flash structures topics, competencies and learning outcomes into JSON.',
      'Maps standards to their closest curriculum topics using text-embedding-004 vectors and cosine similarity with explicit alignment thresholds.',
      'Runs Flask background tasks with Next.js progress polling and downloadable PDF reports; the current web upload path uses PDF filenames.',
    ],
    specs: [{ label: 'Analysis stages', value: '7' }, { label: 'Extraction formats', value: 'PDF · DOCX · TXT' }, { label: 'Full / partial match', value: '≥ 0.80 / ≥ 0.60' }, { label: 'Report formats', value: 'JSON + PDF' }],
    tech: ['Python', 'Gemini API', 'NumPy', 'Scikit-learn', 'pdfplumber', 'python-docx', 'Flask', 'Next.js', 'React'],
    githubUrl: 'https://github.com/Samarth201104/Curriculum_Gap_Identifier',
  },
];

export const profileLinks = {
  github: 'https://github.com/Samarth201104',
  linkedin: 'https://www.linkedin.com/in/samarth-more-740317268/',
};
