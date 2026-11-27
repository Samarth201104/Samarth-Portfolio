import { experiences } from "@/data/experience";
import { Emphasis, Icon, Metrics, SectionHeading, Tags } from "./ui";

export function Experience() {
  return (
    <section id="experience" tabIndex={-1} className="section container">
      <SectionHeading
        eyebrow="Professional experience"
        title="Engineering in practice."
        description="Python services, applied computer vision and intelligent applications."
      />
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article
            id={`experience-${index}`}
            key={experience.company}
            className="experience-card surface"
          >
            <span className="timeline-dot" aria-hidden="true" />
            <header className="experience-heading">
              <div className="experience-identity">
                <span className="icon-tile">
                  <Icon name="work" />
                </span>
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
              </div>
              <div className="experience-meta">
                <span>
                  <Icon name="calendar" size={16} />
                  {experience.date}
                </span>
                <span>
                  <Icon name="location" size={16} />
                  {experience.mode}
                </span>
              </div>
            </header>
            <ul className="experience-bullets">
              {experience.bullets.map((text) => (
                <li key={text}>
                  <Emphasis text={text} />
                </li>
              ))}
            </ul>
            <Metrics
              items={experience.metrics}
              className="experience-metrics"
            />
            <div className="experience-bottom">
              <Tags items={experience.tags} />
              {index === 1 ? (
                <div className="related-links">
                  <a href="#project-fingerprint">Fingerprint project</a>
                  <a href="#project-curriculum">Curriculum project</a>
                </div>
              ) : index === 2 ? (
                <a className="text-link" href="#project-pixerase">
                  Explore Pixerase.AI
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
