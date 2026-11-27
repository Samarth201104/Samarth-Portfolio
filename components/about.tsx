import {
  education,
  introduction,
  profile,
  profileLinks,
  resumeUrl,
} from "@/data/profile";
import { ButtonLink, Emphasis, Icon } from "./ui";

export function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="section container about-profile"
      aria-labelledby="profile-name"
    >
      <div className="profile-copy">
        <header className="profile-heading">
          <p className="eyebrow">About</p>
          <h1 id="profile-name">{profile.name}</h1>
          <p className="profile-title">{profile.designation}</p>
        </header>
        <div className="profile-introduction">
          {introduction.map((text) => (
            <p key={text}>
              <Emphasis text={text} />
            </p>
          ))}
        </div>
        <div className="profile-actions">
          <ButtonLink href="#projects" primary icon="boxes">
            Explore Projects
          </ButtonLink>
          <ButtonLink href={resumeUrl} download icon="download">
            Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" icon="mail">
            Contact
          </ButtonLink>
        </div>
        <nav className="social-links" aria-label="Profile links">
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={17} />
            GitHub
          </a>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" size={17} />
            LinkedIn
          </a>
        </nav>
      </div>
      <article
        className="education-card surface"
        aria-labelledby="education-heading"
      >
        <div className="card-heading">
          <span className="icon-tile">
            <Icon name="education" />
          </span>
          <h2 id="education-heading">Education</h2>
        </div>
        <h3>{education.institution}</h3>
        <p>{education.degree}</p>
        <p className="education-major">{education.major}</p>
        <span className="meta-line">
          <Icon name="calendar" size={16} />
          {education.period}
        </span>
        <div className="education-score">
          <strong>
            {education.cgpi}
            <span>/10</span>
          </strong>
          <span>CGPI</span>
        </div>
      </article>
    </section>
  );
}
