export type PortfolioProject = {
  no: string;
  type: string;
  title: string;
  subtitle: string;
  desc: string;
  problem?: string;
  approach?: string;
  engineeringFocus?: string;
  context?: string;
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
    problem: 'Find useful answers across PDFs and images without searching every document manually.',
    approach: 'Extract and OCR content, split it into chunks, create embeddings, retrieve relevant context from ChromaDB, then use Gemini to draft a cited response.',
    engineeringFocus: 'Connect document parsing and image OCR to retrieval while keeping the answer grounded in source context.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'LangChain', 'LangGraph', 'ChromaDB', 'Gemini', 'Sentence Transformers', 'EasyOCR', 'OpenCV', 'Docker'],
    stages: ['Document / Image', 'OCR / Extraction', 'Document Processing', 'Chunking', 'Embeddings', 'ChromaDB', 'Semantic Retrieval', 'Gemini', 'Citation-aware Response'],
    stageDetails: ['Accept a PDF, scanned document, or image.', 'Extract text through OCR or document parsing.', 'Prepare extracted content for the retrieval workflow.', 'Split text into smaller retrieval units.', 'Create vector representations with sentence transformers.', 'Store vectors in the ChromaDB collection.', 'Retrieve relevant stored context for a query.', 'Use Gemini to compose an answer from context.', 'Return a response with source-aware citations.'],
    githubUrl: 'https://github.com/Samarth201104/RAG-Assistant', featured: true,
  },
  {
    no: '02', type: 'COMPUTER VISION · CLASSIFICATION', title: 'DeepFake Detection', subtitle: 'using XceptionNet',
    desc: 'A video analysis workflow that extracts facial regions and evaluates frames with an Xception model to classify real or manipulated media.',
    problem: 'Classify supplied image or video media as real or manipulated.',
    approach: 'Extract faces, preprocess the crops, run XceptionNet inference on frames, and produce a prediction.',
    engineeringFocus: 'Keep face extraction, model input preparation, and frame-level inference as distinct steps.',
    context: 'Datasets: Celeb-DF v2 · DFDC',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'XceptionNet'],
    stages: ['Image / Video', 'Face Extraction', 'Preprocessing', 'XceptionNet', 'Frame-level Inference', 'Prediction'],
    stageDetails: ['Accept image or video media for analysis.', 'Extract faces from the input media.', 'Prepare face crops for model input.', 'Pass prepared frames through XceptionNet.', 'Run inference at the frame level.', 'Use model outputs to produce a prediction.'],
    githubUrl: 'https://github.com/Samarth201104/DeepFake_Video', featured: true,
  },
  {
    no: '03', type: 'COMPUTER VISION · IMAGE EDITING', title: 'Pixerase.AI', subtitle: 'AI Image Editing Platform',
    desc: 'Image editing workflows for background removal and intelligent object removal, combining segmentation and inpainting.',
    problem: 'Remove a background or selected object while restoring the affected image area.',
    approach: 'Segment the foreground with U²-Net, select the area to remove, then use MiGAN-512 inpainting to restore the image.',
    engineeringFocus: 'Combine segmentation and inpainting as separate steps in one image-editing workflow.',
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
    no: '05', type: 'COMPUTER VISION · OBJECT DETECTION', title: 'Object Detection', subtitle: 'YOLO Image & Video Workflows',
    desc: 'A Python project with YOLO-based detection scripts for images, video files, and webcam streams.',
    problem: 'Detect and review objects across still images, recorded video, and live webcam input.',
    approach: 'Run YOLO-based detection through separate image, video, and webcam processing workflows.',
    engineeringFocus: 'Keep model files, input sources, and inference scripts usable across distinct media workflows.',
    tech: ['Python', 'YOLO', 'OpenCV'],
    stages: ['Image / Video / Webcam', 'Frame Processing', 'YOLO Inference', 'Detection Results'],
    stageDetails: ['Provide an image, video file, or live webcam stream.', 'Prepare the selected visual input for detection.', 'Run the configured YOLO model on the input.', 'Review the resulting object detections.'],
    githubUrl: 'https://github.com/Samarth201104/Object-Detection', featured: false,
  },
  {
    no: '06', type: 'BIOMETRICS · IMAGE PROCESSING', title: 'Fingerprint Scanner', subtitle: 'Fingerprint Image Enhancement',
    desc: 'A fingerprint-image processing pipeline that extracts a region of interest, enhances ridge patterns, and saves processed images.',
    problem: 'Prepare raw fingerprint images for clearer downstream review through a repeatable enhancement pipeline.',
    approach: 'Extract the region of interest, normalize and grayscale the image, apply Gabor enhancement and thresholding, then post-process the ridges.',
    engineeringFocus: 'Structure image acquisition, enhancement, and output as separate processing stages, with CLI and web-interface entry points.',
    tech: ['Python', 'OpenCV', 'NumPy', 'SciPy', 'scikit-image', 'Gradio', 'Streamlit'],
    stages: ['Image Acquisition', 'ROI Extraction', 'Grayscale & Normalization', 'Gabor Enhancement', 'Adaptive Thresholding', 'Ridge Postprocessing', 'Processed Image'],
    stageDetails: ['Load a fingerprint image from an input file.', 'Extract the fingerprint region of interest.', 'Convert to grayscale and normalize image intensity.', 'Enhance ridge structure with Gabor filters.', 'Convert the enhanced image with adaptive thresholding.', 'Clean up the ridge image with post-processing.', 'Save or display the processed fingerprint image.'],
    githubUrl: 'https://github.com/Samarth201104/Fingerprint-Scanner', featured: false,
  },
];

export const profileLinks = {
  github: 'https://github.com/Samarth201104',
  linkedin: 'https://www.linkedin.com/in/samarth-more-740317268/?isSelfProfile=true',
};
