import { profile, profileLinks, resumeUrl } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer container">
      <a
        href="#about"
        className="brand"
        aria-label="SM, Samarth More, back to About"
      >
        <span className="brand-monogram">SM</span>
        <span>
          {profile.name}
          <small>AI/ML Engineer</small>
        </span>
      </a>
      <nav aria-label="Footer links">
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href={profileLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </nav>
      <small>
        © {new Date().getFullYear()} {profile.name}
      </small>
    </footer>
  );
}
