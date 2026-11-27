import {
  BrainCircuit,
  Network,
  ScanLine,
  Code2,
  Layers3,
  Server,
  Files,
  Fingerprint,
  Boxes,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Check,
  Copy,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";
const icons = {
  brain: BrainCircuit,
  network: Network,
  scan: ScanLine,
  code: Code2,
  layers: Layers3,
  server: Server,
  files: Files,
  fingerprint: Fingerprint,
  boxes: Boxes,
  education: GraduationCap,
  work: BriefcaseBusiness,
  location: MapPin,
  calendar: CalendarDays,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  download: Download,
  external: ExternalLink,
  check: Check,
  copy: Copy,
  sun: Sun,
  moon: Moon,
  menu: Menu,
  close: X,
  arrow: ArrowRight,
};
export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] || Code2;
  return <Component size={size} aria-hidden="true" strokeWidth={1.7} />;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function ButtonLink({
  href,
  children,
  primary = false,
  icon,
  download,
  external = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  icon?: string;
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={`button ${primary ? "button-primary" : "button-secondary"}`}
      href={href}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <Icon name={icon} size={17} />}
      <span>{children}</span>
    </a>
  );
}

// A small, shared emphasis vocabulary keeps content plain and presentation consistent.
const emphasis =
  /(multimodal Retrieval-Augmented Generation \(RAG\)|Python REST APIs|TensorFlow, PyTorch, Keras, Scikit-learn, and OpenCV|CUDA, Docker, and Docker Compose|\b(?:\d[\d,.]*(?:-angle|-stage)?|SMPP|CLAHE|Gemini 2\.5 Flash|RetinaFace|Xception|U²-Net|MI-GAN|FastAPI|PostgreSQL)\b)/g;
export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text
        .split(emphasis)
        .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  );
}
export function Metrics({
  items,
  className = "",
}: {
  items: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={`metrics ${className}`}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
