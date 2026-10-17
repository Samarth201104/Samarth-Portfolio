export type PortfolioProject = {
  no: string;
  type: string;
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  stages: string[];
  stageDetails: string[];
  githubUrl: string;
  featured: boolean;
};

export const projects: PortfolioProject[] = [
  {
    no: '01', type: 'GENERATIVE AI · RAG', title: 'MultiModal RAG', subtitle: 'Research Assistant',
    desc: 'A multimodal retrieval assistant for PDFs and images, with OCR, semantic search, document comparison, summaries, and citation-aware responses.',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'Gemini', 'EasyOCR'],
    stages: ['Document / Image', 'OCR / Extraction', 'Document Processing', 'Chunking', 'Embeddings', 'ChromaDB', 'Semantic Retrieval', 'Gemini', 'Citation-aware Response'],
    stageDetails: ['Accept a PDF, scanned document, or image.', 'Extract text through OCR or document parsing.', 'Prepare extracted content for the retrieval workflow.', 'Split text into smaller retrieval units.', 'Create vector representations with sentence transformers.', 'Store vectors in the ChromaDB collection.', 'Retrieve relevant stored context for a query.', 'Use Gemini to compose an answer from context.', 'Return a response with source-aware citations.'],
    githubUrl: 'https://github.com/Samarth201104/RAG-Assistant', featured: true,
  },
  {
    no: '02', type: 'COMPUTER VISION · CLASSIFICATION', title: 'DeepFake Detection', subtitle: 'using XceptionNet',
    desc: 'A video analysis workflow that extracts facial regions and evaluates frames with an Xception model to classify real or manipulated media.',
    tech: ['Python', 'TensorFlow', 'XceptionNet', 'RetinaFace'],
    stages: ['Image / Video', 'Face Extraction', 'Preprocessing', 'XceptionNet', 'Frame-level Inference', 'Prediction'],
    stageDetails: ['Accept image or video media for analysis.', 'Extract faces from the input media.', 'Prepare face crops for model input.', 'Pass prepared frames through XceptionNet.', 'Run inference at the frame level.', 'Use model outputs to produce a prediction.'],
    githubUrl: 'https://github.com/Samarth201104/DeepFake_Video', featured: true,
  },
  {
    no: '03', type: 'COMPUTER VISION · IMAGE EDITING', title: 'Pixerase.AI', subtitle: 'AI Image Editing Platform',
    desc: 'Image editing workflows for background removal and intelligent object removal, combining segmentation and inpainting.',
    tech: ['Python', 'Flask', 'OpenCV', 'U²-Net', 'MiGAN-512'],
    stages: ['Input Image', 'Foreground Segmentation', 'Object Selection', 'Image Inpainting', 'Restored Image'],
    stageDetails: ['Submit an image to the editing workflow.', 'Use U²-Net for foreground and background segmentation.', 'Select a region or object to remove.', 'Use MiGAN-512 to fill the selected region.', 'Return the edited image.'],
    githubUrl: 'https://github.com/Samarth201104/Pixerase.AI', featured: true,
  },
  {
    no: '04', type: 'AI · CURRICULUM ANALYSIS', title: 'Curriculum Gap Identifier', subtitle: 'Standards Alignment',
    desc: 'A web application that compares curriculum documents with academic standards, maps coverage, identifies gaps, and generates recommendations and PDF reports.',
    tech: ['Python', 'Flask', 'Next.js', 'React', 'Gemini'],
    stages: ['Curriculum Documents', 'Text Extraction', 'AI Structuring', 'Standards Mapping', 'Gap Insights', 'PDF Report'],
    stageDetails: ['Upload curriculum and standards documents.', 'Extract text from PDF, DOCX, and TXT files.', 'Use Gemini to structure topics and learning objectives.', 'Compare curriculum content against standards.', 'Review coverage, gaps, and recommendations.', 'Generate a report from the analysis.'],
    githubUrl: 'https://github.com/Samarth201104/Curriculum_Gap_Identifier', featured: false,
  },
  {
    no: '05', type: 'COMPUTER VISION · OBJECT DETECTION', title: 'Object Detection', subtitle: 'Computer Vision Project',
    desc: 'A computer vision project focused on detecting objects in visual input. See the repository for implementation and technology details.',
    tech: ['Object Detection', 'Computer Vision'],
    stages: ['Visual Input', 'Object Detection'],
    stageDetails: ['Provide visual input to the project.', 'Inspect the repository for the project’s specific detection workflow.'],
    githubUrl: 'https://github.com/Samarth201104/Object-Detection', featured: false,
  },
  {
    no: '06', type: 'BIOMETRICS · FINGERPRINT CAPTURE', title: 'Fingerprint Scanner', subtitle: 'Fingerprint Capture System',
    desc: 'A fingerprint scanner project. The linked repository contains the implementation details and current project status.',
    tech: ['Fingerprint Capture'],
    stages: ['Project Repository'],
    stageDetails: ['Review the linked source for implementation details.'],
    githubUrl: 'https://github.com/Samarth201104/Fingerprint-Scanner', featured: false,
  },
];

export const profileLinks = {
  github: 'https://github.com/Samarth201104',
  linkedin: 'https://www.linkedin.com/in/samarth-more-740317268/?isSelfProfile=true',
};
