import { skillGroups } from "@/data/skills";
import { Icon, SectionHeading } from "./ui";
const logos: Record<string, string> = {
  Python: "python",
  TypeScript: "typescript",
  PostgreSQL: "postgresql",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch",
  "React.js": "react",
  "Next.js": "nextdotjs",
  Docker: "docker",
  OpenCV: "opencv",
};
export function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="section container">
      <SectionHeading
        eyebrow="Technical expertise"
        title="The tools behind the work."
        description="A practical toolkit for developing and integrating intelligent applications."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card surface" key={group.name}>
            <header>
              <span className="icon-tile">
                <Icon name={group.icon} />
              </span>
              <h3>{group.name}</h3>
            </header>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li key={item}>
                  <span>
                    {logos[item] && (
                      <span
                        className="tech-logo"
                        aria-hidden="true"
                        style={{ maskImage: `url(/tech/${logos[item]}.svg)` }}
                      />
                    )}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
