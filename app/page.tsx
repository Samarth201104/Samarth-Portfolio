'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Braces, Command, Cpu, Github, Layers3, Linkedin, Mail, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { projects, profileLinks, type PortfolioProject } from '@/data/projects';

const links = [{ label: 'About', id: 'about' }, { label: 'Experience', id: 'experience' }, { label: 'Projects', id: 'projects' }, { label: 'Skills', id: 'skills' }, { label: 'Contact', id: 'contact' }];
const experiences = [
  { company: 'MCM BPO', role: 'Python Developer', date: 'Jul 2026 — Sep 2026', mode: 'On-site', tags: ['Python', 'REST APIs', 'SMPP', 'PostgreSQL', 'React.js', 'CSV / XLSX'], bullets: ['Developed Python REST services for individual and bulk SMS submission workflows.', 'Implemented CSV/XLSX ingestion and single-session SMPP communication for bulk message submission.', 'Integrated PostgreSQL operations for recipient-level submission records, status persistence and reporting.', 'Connected React.js frontend workflows to backend APIs, debugging validation and reporting total, submitted and failed message counts.'] },
  { company: 'Brainwonders', role: 'AI Intern', date: 'Dec 2025 — Jan 2026', mode: 'On-site', tags: ['Python', 'OpenCV', 'FastAPI', 'NumPy', 'Gemini API', 'NLP'], bullets: ['Developed contactless fingerprint enhancement using contour-based ROI extraction, CLAHE, directional Gabor filtering and morphological refinement.', 'Implemented FastAPI services for individual fingerprint processing and batches of up to 50 images.', 'Engineered a seven-stage NLP workflow using Gemini 2.5 Flash, semantic similarity and curriculum-to-standards mapping.', 'Integrated gap identification and recommendations across PDF, DOCX and TXT academic documents.'] },
  { company: 'Makhija Quantum AI', role: 'AI Intern', date: 'Nov 2025', mode: 'Hybrid', tags: ['Python', 'PyTorch', 'OpenCV', 'Flask', 'U²-Net', 'MI-GAN'], bullets: ['Integrated pretrained U²-Net segmentation and MI-GAN inpainting for foreground extraction and unwanted-object removal.', 'Developed OpenCV preprocessing, selection-mask refinement and image post-processing workflows.', 'Connected PyTorch model inference to Flask REST APIs to expose image editing through a web application.'] },
];
const skillGroups = [
  { name: 'Programming & Databases', items: ['Python', 'SQL', 'PostgreSQL', 'JavaScript', 'TypeScript'] },
  { name: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'XceptionNet'] },
  { name: 'Computer Vision', items: ['OpenCV', 'OCR', 'Image Processing', 'U²-Net', 'MiGAN-512', 'Image Segmentation'] },
  { name: 'Generative AI & NLP', items: ['Generative AI', 'RAG', 'LangChain', 'LangGraph', 'Gemini', 'Sentence Transformers', 'ChromaDB', 'Embeddings'] },
  { name: 'Backend & Web', items: ['FastAPI', 'Flask', 'React', 'Next.js', 'Streamlit'] },
  { name: 'Tools & Deployment', items: ['Docker', 'Git', 'GitHub', 'Vercel', 'Render', 'Railway', 'GitHub Copilot'] },
];
function ProjectCard({ project }: { project: PortfolioProject }) {
  return <article className="project-card" aria-labelledby={`project-${project.id}`}>
    <header><p className="project-category">{project.category}</p><h3 id={`project-${project.id}`}>{project.title}</h3></header>
    <p className="project-overview">{project.overview}</p>
    <ul className="project-highlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
    <dl className="project-specs">{project.specs.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
    <ul className="project-technologies" aria-label="Technology stack">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
    <div className="project-actions"><a className="project-button" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}><Github size={16} aria-hidden="true"/>GitHub</a>{project.liveUrl && <a className="project-button project-demo" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>Live Demo</a>}</div>
  </article>;
}

function ProjectsSection() {
  return <section className="section projects-section" id="projects"><div className="section-wrap"><div className="section-head split-head"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED ENGINEERING WORK</div><h2>AI systems<br/><span>I've built.</span></h2></div><p className="head-note">Six projects across retrieval, computer vision and full-stack AI. Explore the implementation, specifications and source.</p></div><div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project}/>)}</div></div></section>;
}

export default function Home() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menu, setMenu] = useState(false), [scrolled, setScrolled] = useState(false), [activeSection, setActiveSection] = useState(''), [skillFilter, setSkillFilter] = useState('All'), [theme, setTheme] = useState<'dark' | 'light'>('dark'), [themeReady, setThemeReady] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    links.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  useEffect(() => {
    const saved = window.localStorage.getItem('samarth-portfolio-theme');
    if (saved === 'light' || saved === 'dark') setTheme(saved);
    setThemeReady(true);
  }, []);
  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('samarth-portfolio-theme', theme);
  }, [theme, themeReady]);
  useEffect(() => {
    if (!menu) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [menu]);
  const navClick = () => setMenu(false);
  const filteredGroups = skillFilter === 'All' ? skillGroups : skillGroups.filter(g => g.name === skillFilter);
  return <main id="main-content"><a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}><a className="brand" href="#home" aria-label="Samarth More home"><span className="brand-mark">SM<span>.</span></span><span className="brand-divider"/><span className="brand-role">AI / ML ENGINEER</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <a key={l.id} className={activeSection === l.id ? 'nav-active' : ''} aria-current={activeSection === l.id ? 'location' : undefined} href={`#${l.id}`}>{l.label}</a>)}</nav>
      <div className="nav-end"><span className="availability"><i/>AI / ML · MUMBAI</span><div className="nav-socials"><a href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub"><Github/></a><a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><Linkedin/></a></div><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'light'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun/> : <Moon/>}</button><button ref={menuButton} aria-controls="mobile-navigation" className="menu-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(v => !v)}>{menu ? <X/> : <Menu/>}</button></div>
    </header>
    {menu && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map((l, i) => <a key={l.id} href={`#${l.id}`} onClick={navClick}><span>0{i + 1}</span>{l.label}<ArrowUpRight size={16}/></a>)}<div className="mobile-note"><i/> AI / ML ENGINEER · MUMBAI, INDIA</div></nav>}

    <section className="hero section-wrap" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> AI/ML ENGINEER </div>
          <h1>Samarth<br/><span>More</span><b className="period">.</b></h1>
          <p className="hero-role">COMPUTER VISION <span>·</span> GENERATIVE AI <span>·</span> FULL-STACK AI</p>
          <p className="hero-description">Building AI applications from image processing and retrieval pipelines to Python APIs and responsive web interfaces.</p>
          <div className="hero-actions"><a href="#projects" className="button button-primary">View projects <ArrowDownRight size={16}/></a><a href="/resume/Samarth_Resume.pdf" download className="button button-quiet">Download resume <ArrowDown size={15}/></a></div>
          <nav className="hero-quicklinks" aria-label="Quick links"><a href={profileLinks.github} target="_blank" rel="noopener noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a><a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><a href="#contact"><Mail size={15}/> Contact <ArrowDownRight size={12}/></a></nav>
          <div className="hero-foot"><span>BASED IN MUMBAI, INDIA</span><span>AI/ML · COMPUTER VISION</span></div>
        </div>

      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
    </section>

    <section className="section section-wrap about-section" id="about"><div className="section-head"><div className="eyebrow"><span className="eyebrow-line"/> PROFILE </div><h2>From model to<br/><span>working system.</span></h2></div><div className="about-content"><div className="about-intro"><p className="large-copy">I build across <em>data, models, retrieval, and applications.</em></p><p>My experience spans computer vision, document analysis, and backend integration.</p><a href="#experience" className="text-link">Explore my experience <ArrowUpRight size={15}/></a></div><div className="education-card"><div className="card-label"><span>EDUCATION</span><span>Nov 2022 — May 2026</span></div><div className="education-icon"><Command size={18}/></div><h3>Viva Institute of<br/>Technology, Mumbai</h3><p>B.E. Computer Science &amp; Engineering<br/>Artificial Intelligence &amp; Machine Learning</p><div className="education-result"><span>CGPI</span><b>8.39<span> / 10</span></b></div></div></div><div className="snapshot"><div className="snapshot-heading"><span>RECRUITER SNAPSHOT</span><span>COMPUTER VISION · GENERATIVE AI · BACKEND</span></div><div className="snapshot-grid"><article className="snapshot-card"><span>01</span><strong>Retrieval &amp; GenAI</strong><small>Multimodal search, OCR, embeddings, and grounded responses.</small><ArrowUpRight size={14}/></article><article className="snapshot-card"><span>02</span><strong>Computer Vision</strong><small>Video classification, fingerprint scanning, segmentation, and image editing.</small><ArrowUpRight size={14}/></article><article className="snapshot-card"><span>03</span><strong>Backend Engineering</strong><small>Python services, REST APIs, PostgreSQL, and application integration.</small><ArrowUpRight size={14}/></article></div></div></section>

    <section className="section section-wrap experience-section" id="experience"><div className="section-head split-head"><div><div className="eyebrow"><span className="eyebrow-line"/> EXPERIENCE </div><h2>Applied work,<br/><span>real contexts.</span></h2></div><p className="head-note">Roles across AI engineering, applied computer vision, and intelligent image editing.</p></div><div className="experience-list">{experiences.map(e => <article key={e.company} className="experience-card"><header className="experience-heading"><div><h3>{e.company}</h3><p>{e.role}</p></div><p className="experience-date">{e.date}<span>{e.mode}</span></p></header><ul className="experience-bullets">{e.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{e.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <ProjectsSection />

    <section className="section section-wrap skills-section" id="skills"><div className="section-head split-head"><div><div className="eyebrow"><span className="eyebrow-line"/> TECHNICAL RANGE </div><h2>Tools for<br/><span>intelligent work.</span></h2></div><p className="head-note">A practical toolkit spanning the full path from data and models to applications.</p></div><div className="skills-toolbar"><div className="skill-filters" role="group" aria-label="Filter skill categories">{['All', ...skillGroups.map(g => g.name)].map(f => <button key={f} onClick={() => setSkillFilter(f)} className={skillFilter === f ? 'filter-active' : ''} aria-pressed={skillFilter === f}>{f}</button>)}</div><span>{skillGroups.reduce((a, g) => a + g.items.length, 0)} SKILLS · {filteredGroups.length} GROUPS</span></div><div className="skills-grid">{filteredGroups.map((g, i) => <article className="skill-card" key={g.name}><div className="skill-card-head"><span>0{i + 1}</span>{i % 3 === 0 ? <Cpu size={17}/> : i % 3 === 1 ? <Layers3 size={17}/> : <Braces size={17}/>}</div><h3>{g.name}</h3><div className="skill-chips">{g.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>


    <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line"/> CONTACT </div><h2>Let's build<br/><span>something intelligent.</span></h2><p>Interested in AI/ML, computer vision, or intelligent software systems? Let’s connect.</p><div className="contact-grid"><a href="mailto:samarthm770@gmail.com" className="contact-link"><Mail size={17}/><span><small>EMAIL</small><strong>samarthm770@gmail.com</strong></span><ArrowUpRight size={14}/></a><a href="tel:+919819597946" className="contact-link"><Phone size={17}/><span><small>PHONE</small><strong>+91 9819597946</strong></span><ArrowUpRight size={14}/></a><a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="contact-link"><Github size={17}/><span><small>GITHUB</small><strong>Samarth201104</strong></span><ArrowUpRight size={14}/></a><a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link"><Linkedin size={17}/><span><small>LINKEDIN</small><strong>Samarth More</strong></span><ArrowUpRight size={14}/></a></div><div className="contact-actions"><a href="/resume/Samarth_Resume.pdf" target="_blank" rel="noopener noreferrer" className="button button-outline">View resume <ArrowUpRight size={15}/></a></div></div></div></section>
    <footer className="footer"><a className="brand" href="#home" aria-label="Samarth More home"><span className="brand-mark">SM<span>.</span></span></a><div className="footer-identity"><strong>Samarth More</strong><span>AI/ML Engineer</span></div><nav className="footer-links" aria-label="Footer links"><a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12}/></a><a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12}/></a><a href="mailto:samarthm770@gmail.com">Email <Mail size={12}/></a><a href="/resume/Samarth_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={12}/></a></nav><span className="footer-copyright">© {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13}/></a></footer>
  </main>;
}

