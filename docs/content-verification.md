# Portfolio content verification

Reviewed 24 November 2026. Public repository default branches were fetched before inspection. Resume: `public/resume/Samarth_Resume.pdf`. The user explicitly confirmed Python Developer as the corrected MCM BPO designation. Additional messaging responsibilities come from the attached prompt; no private employer code was available.

## Source revisions

- [RAG-Assistant](https://github.com/Samarth201104/RAG-Assistant/tree/0e8332fd13e60113bb277f3723d4d3a5630d5b2d): `0e8332fd13e60113bb277f3723d4d3a5630d5b2d`
- [DeepFake_Video](https://github.com/Samarth201104/DeepFake_Video/tree/5e1c4dc9c19e5f73ed21545a101eb37565cbb9b1): `5e1c4dc9c19e5f73ed21545a101eb37565cbb9b1`
- [Pixerase.AI](https://github.com/Samarth201104/Pixerase.AI/tree/b769c49dd2dadc6ac47891d51690381e4a7f524c): `b769c49dd2dadc6ac47891d51690381e4a7f524c`
- [Fingerprint-Scanner](https://github.com/Samarth201104/Fingerprint-Scanner/tree/59ffdb1780b511d7d92a8445f5372edf4d4c98a5): `59ffdb1780b511d7d92a8445f5372edf4d4c98a5`
- [Object-Detection](https://github.com/Samarth201104/Object-Detection/tree/c79d2cbb4baf982afed600f1a475aee01124e0f6): `c79d2cbb4baf982afed600f1a475aee01124e0f6`
- [Curriculum_Gap_Identifier](https://github.com/Samarth201104/Curriculum_Gap_Identifier/tree/fa990cc1770bdd89c081f43b7db420f65c7f569b): `fa990cc1770bdd89c081f43b7db420f65c7f569b`

## Evidence and content decisions

- RAG: `backend/core/{config,constants}.py`, `utils/chunk_utils.py`, `services/{pdf,image,embedding,rag,llm}_service.py`, `models/request_models.py`, `vectorstore/chroma_manager.py`, `api/query.py`, `frontend/lib/api.ts`, package/dependency manifests and `docker-compose.yml`. Verified normalized MiniLM embeddings, chunk/overlap defaults, query range, generation configuration, source metadata and container persistence. The current frontend is Next.js. OCR applies to image uploads; scanned PDF OCR is not implemented. No guaranteed factual correctness or conversation-memory claim.
- DeepFake: `scripts/{train,evaluate,split_dataset}.py`, `backend/app/{api/routes,services/detection_service,vision/face_extractor,vision/video_processor}.py`, frontend upload client, requirements and README. Verified final-20-layer Xception fine-tuning, mixed precision, class weights, augmentation, early stopping, 256px inputs, batch 16, Adam 1e-4 and every-10th-frame web inference. Evaluation computes separate frame/video metrics. No committed evaluation artifacts support the supplied percentages, so they are omitted. Dataset names also conflict between the resume and prompt and are omitted. The public code configures training; weights, datasets and measured outcomes were not independently reproduced. Mean video scores are not calibrated confidence or proof of authenticity.
- Pixerase: `backend/app/services/{image_processing,model_manager,file_service}.py`, `routes/{background,object_removal}.py`, `utils/image_validation.py`, `config.py`, background model loader, object inference code, `frontend/js/object.js`, requirements and README. Verified U²-Net 320px, MI-GAN 512px, GrabCut selections, canvas-coordinate scaling, merged masks/eraser handling, lazy model loading and temporary-file cleanup. Configured limits are per-file 25 MiB (UI label MB) and 12 million pixels. No throughput claim.
- Fingerprint: `backend/pipeline/{roi_extraction,preprocessing,gabor_enhancement}.py`, `backend/docs/pipeline.md`, `backend/app/api/routes/fingerprint.py`, core config, `frontend/src/services/api.ts`, frontend package, backend requirements and README. Verified contour ROI, CLAHE, 16 directional responses, adaptive thresholding/morphology, thread-pool API work, 50-image batch limit and downloadable stages. Current dependency list does not include SciPy/scikit-image, so those baseline tags were removed. Described enhancement only; no authentication or identity-matching accuracy.
- Object Detection: `backend/detection/{config,inference,routes,service}.py`, `frontend/static/js/app.js`, requirements and README. Verified default `yolo26l.pt`, image/video/browser-camera routes, confidence/IoU settings, class filters, model reuse and inference locks, CPU/CUDA selection, CUDA memory-error fallback and annotated output statistics. 640px, 0.25 and 0.45 are configuration defaults, not performance measurements. No real-time throughput claim.
- Curriculum: `backend/src/{extract,structure_ai,similarity_engine,recommendations,main,processor,styled_pdf_report}.py`, `backend/api.py`, frontend API client, manifests and README. Verified Gemini 2.5 Flash, text-embedding-004 cosine similarity, 0.80/0.60 alignment thresholds, background task/status routes and JSON/PDF reports. Seven stages describe logical processing responsibilities, not seven distinct services. Extractors support PDF/DOCX/TXT, but the web upload route saves both files with `.pdf` suffixes. Card wording explicitly qualifies this limitation. Thresholds are heuristics, not measured accuracy.

## Verification

- `npm run build`: passed (Next.js production compilation, TypeScript, static generation).
- `git diff --check`: passed.
- Headless Chrome: widths 320, 390, 768, 1024 and 1440px in dark/light themes; no document horizontal overflow, all six cards visible with four highlights each, two desktop columns and one mobile column; no page errors.
- axe-core 4.10.3 WCAG 2 A/AA and 2.1 AA: zero violations on the final desktop and 390px mobile page in both themes. Automated testing is not a full accessibility certification.
- Mobile menu opens/closes, Escape restores toggle focus; project links have accessible names and visible keyboard outlines. Light/dark theme switches and persistence after reload were verified. All fragment links resolve to existing element IDs.
- HTTP links: six repositories, GitHub profile, fingerprint Live Demo, local resume and page routes returned 200. LinkedIn returned 999 (automated-request block), so its availability is unverified. Demo response verifies the page, not its backend inference.
- Local browser/source audit artifacts remain in the existing ignored `.audit-repos` directory. No project dependencies changed. Existing user edits to `.gitignore` were preserved.

## Remaining evidence needed

To publish DeepFake percentages, supply the original evaluation output and dataset/split provenance. No model training or external project inference was run during this portfolio update.
