import { projects, type PortfolioProject } from "@/data/projects";
import { ProjectArchitecture } from "./project-architecture";
import {
  ButtonLink,
  Emphasis,
  Icon,
  Metrics,
  SectionHeading,
  Tags,
} from "./ui";

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      className={`project-card surface ${project.featured ? "featured-project" : ""}`}
      id={`project-${project.id}`}
      tabIndex={-1}
      aria-labelledby={`title-${project.id}`}
    >
      <header>
        <div className="project-top">
          <span className="icon-tile">
            <Icon name={project.icon} />
          </span>
          {project.featured && (
            <span className="featured-badge">Featured project</span>
          )}
        </div>
        <p className="project-category">{project.category}</p>
        <h3 id={`title-${project.id}`}>{project.title}</h3>
        <p className="project-overview">{project.overview}</p>
      </header>
      <ul className="project-description">
        {project.description.map((text) => (
          <li key={text}>
            <Emphasis text={text} />
          </li>
        ))}
      </ul>
      <div className="project-measurements">
        <Metrics items={project.specs} />
        {project.note && <p className="metric-note">{project.note}</p>}
      </div>
      <Tags items={project.tech} />
      <ProjectArchitecture
        title={project.title}
        stages={project.architecture}
      />
      <div className="project-actions">
        <ButtonLink href={project.githubUrl} external icon="github">
          GitHub<span className="sr-only">: {project.title}</span>
        </ButtonLink>
        {project.liveUrl && (
          <ButtonLink href={project.liveUrl} external primary icon="external">
            Live Demo<span className="sr-only">: {project.title}</span>
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" tabIndex={-1} className="section section-tinted">
      <div className="container">
        <SectionHeading
          eyebrow="Selected engineering work"
          title="Ideas, implemented."
          description="Six systems across retrieval, computer vision and full-stack AI. Technical depth, with the source to explore."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
