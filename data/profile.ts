export const resumeUrl = '/resume/Samarth_More-Resume.pdf';
export const navigation = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];
export const introduction = [
  'AI/ML Engineering graduate with hands-on experience in developing end-to-end intelligent systems across Machine Learning, Deep Learning, Computer Vision, Generative AI, Natural Language Processing, and Python Backend Development.',
  'Experienced in building multimodal Retrieval-Augmented Generation (RAG) systems, LLM-powered applications, deep learning models, semantic retrieval pipelines, computer vision solutions, and REST API-driven applications. Skilled in model fine-tuning, feature engineering, evaluation, inference, vector embeddings, API integration, and AI application development using modern frameworks, databases, and deployment technologies.',
];
export const expertiseTags = ['Artificial Intelligence & Machine Learning', 'Deep Learning & Neural Networks', 'Generative AI & LLMs', 'Retrieval-Augmented Generation (RAG)', 'Natural Language Processing (NLP)', 'Computer Vision', 'Python Backend Development', 'AI Model Integration & Deployment'];
export const overview = [
  'I am an Artificial Intelligence and Machine Learning engineering graduate with practical experience in developing intelligent software systems across Machine Learning, Deep Learning, Computer Vision, Generative AI, Natural Language Processing, and Python Backend Development.',
  'My work focuses on building end-to-end AI solutions, including multimodal document retrieval, deepfake video forensics, image segmentation, generative inpainting, biometric image processing, and REST API-driven applications.',
  'I combine data preprocessing, feature engineering, model development, fine-tuning, inference, evaluation, backend integration, and software engineering to transform AI concepts into functional and accessible applications.',
];
export const expertise = [
  { title: 'Machine Learning & Deep Learning', icon: 'brain', href: '#project-deepfake', text: 'Supervised and Unsupervised Learning · CNNs and RNNs · Transfer Learning · Feature Engineering · Hyperparameter Tuning · Model Fine-Tuning · Model Evaluation and Inference', tech: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'], link: 'Explore video forensics' },
  { title: 'Generative AI & NLP', icon: 'network', href: '#project-rag', text: 'Large Language Models · Multimodal RAG Systems · Semantic Search · Vector Embeddings · Prompt Engineering · Natural Language Processing · Model Context Protocol', tech: ['LangChain', 'LangGraph', 'Gemini API', 'ChromaDB', 'Sentence Transformers'], link: 'Explore document intelligence' },
  { title: 'Computer Vision', icon: 'scan', href: '#project-pixerase', text: 'Object Detection · Image Classification · Face Detection · Image Segmentation · Image Inpainting · Image Enhancement · OCR and Video Processing', tech: ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch'], link: 'Explore image processing' },
  { title: 'Software & Backend Engineering', icon: 'code', href: '#experience', text: 'Python Backend Development · REST API Development · API Integration · Object-Oriented Programming · Database Integration · Full-Stack AI Application Development · Containerization and Deployment', tech: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'React.js', 'Next.js', 'Docker'], link: 'Explore engineering experience' },
];
export const skillGroups = [
  { name: 'Programming Languages & Databases', icon: 'code', items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'PostgreSQL'] },
  { name: 'Machine Learning & Deep Learning', icon: 'brain', items: ['Supervised & Unsupervised Learning', 'Regression', 'Classification', 'Transfer Learning', 'Feature Engineering', 'CNNs', 'RNNs', 'Hyperparameter Tuning', 'Model Fine-Tuning', 'Evaluation & Inference'] },
  { name: 'Computer Vision', icon: 'scan', items: ['OpenCV', 'YOLO', 'Object Detection', 'Image Classification', 'Face Detection', 'Image Segmentation', 'Image Inpainting', 'Image Enhancement', 'OCR', 'Video Processing'] },
  { name: 'Generative AI & NLP', icon: 'network', items: ['LLMs', 'RAG', 'NLP', 'MCP', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Semantic Search', 'Vector Embeddings', 'ChromaDB', 'Sentence Transformers', 'Gemini API'] },
  { name: 'Frameworks & Libraries', icon: 'layers', items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'Flask', 'Django', 'Streamlit', 'React.js', 'Next.js'] },
  { name: 'Software Engineering & Deployment', icon: 'server', items: ['REST APIs', 'API Integration', 'OOP', 'Git', 'GitHub', 'Docker', 'Docker Compose', 'CUDA', 'Render', 'Vercel', 'Railway'] },
];
export const pipeline = [
  { title: 'Data Input', icon: 'files', text: 'Start with documents, images, video or structured records. The input determines the processing path.', tech: 'PDF · images · video · text' },
  { title: 'Data Preprocessing', icon: 'sliders', text: 'Extract text, refine image regions and prepare useful representations for a model or retrieval index.', tech: 'PyMuPDF · EasyOCR · OpenCV' },
  { title: 'AI Model / LLM', icon: 'brain', text: 'Choose the model for the task: a vision classifier, segmentation network or language model.', tech: 'Xception · U²-Net · Gemini' },
  { title: 'Retrieval / Inference', icon: 'network', text: 'Retrieve relevant document passages or run model inference on prepared visual inputs.', tech: 'ChromaDB · embeddings · PyTorch' },
  { title: 'API Integration', icon: 'code', text: 'Expose processing through structured requests and responses, with input validation and error handling.', tech: 'FastAPI · Flask · REST APIs' },
  { title: 'Application Output', icon: 'layout', text: 'Present answers, predictions or processed images through an accessible application interface.', tech: 'Next.js · React · JavaScript' },
];
// Navigation-only metadata: technical descriptions remain in projects.ts.
export const projectPresentation: Record<string, { icon: string; featured: boolean; groups: string[]; stages: string[] }> = {
 rag: { icon: 'network', featured: true, groups: ['Generative AI & NLP', 'Backend & Software Engineering'], stages: ['Extraction', 'Retrieval', 'Generation', 'Application'] },
 deepfake: { icon: 'scan', featured: true, groups: ['Machine Learning & Deep Learning', 'Computer Vision'], stages: ['Preprocessing', 'Training', 'Evaluation', 'Video inference'] },
 pixerase: { icon: 'layers', featured: true, groups: ['Machine Learning & Deep Learning', 'Computer Vision'], stages: ['Segmentation', 'Inpainting', 'Mask refinement', 'API services'] },
 fingerprint: { icon: 'fingerprint', featured: false, groups: ['Computer Vision', 'Backend & Software Engineering'], stages: ['Region extraction', 'Enhancement', 'Processing API', 'Web interface'] },
 objects: { icon: 'boxes', featured: false, groups: ['Machine Learning & Deep Learning', 'Computer Vision'], stages: ['Model loading', 'Configuration', 'Annotation', 'Application'] },
 curriculum: { icon: 'files', featured: false, groups: ['Generative AI & NLP', 'Backend & Software Engineering'], stages: ['Analysis stages', 'Extraction', 'Topic mapping', 'Reporting'] },
};
export const skillAssociations: Record<string, {href: string; label: string}> = {};
function associate(items: string[], href: string, label: string) { for (const item of items) skillAssociations[item] = { href, label }; }
associate(['LangChain', 'ChromaDB', 'Gemini API', 'Sentence Transformers', 'RAG', 'LLMs', 'Prompt Engineering', 'Semantic Search', 'Vector Embeddings', 'OCR', 'Docker', 'Docker Compose', 'Next.js'], '#project-rag', 'Multimodal RAG System');
associate(['TensorFlow', 'Keras', 'Transfer Learning', 'CNNs', 'Model Fine-Tuning', 'Evaluation & Inference', 'Classification', 'Face Detection', 'Video Processing'], '#project-deepfake', 'Xception DeepFake Video Forensics');
associate(['PyTorch', 'OpenCV', 'Image Inpainting', 'Image Segmentation', 'Flask'], '#project-pixerase', 'Pixerase.AI');
associate(['Image Enhancement', 'FastAPI', 'NumPy'], '#project-fingerprint', 'Contactless Fingerprint Enhancement');
associate(['YOLO', 'Object Detection', 'CUDA'], '#project-objects', 'YOLO26 Object Detection');
associate(['NLP', 'Scikit-learn'], '#project-curriculum', 'Curriculum Gap Identifier');
associate(['Python', 'SQL', 'PostgreSQL', 'REST APIs', 'API Integration', 'React.js'], '#experience-0', 'MCM BPO');
