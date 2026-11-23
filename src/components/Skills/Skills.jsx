import { skillGroups } from "../../data/portfolioData";
import { useInView } from "../../hooks/useInView";

const allSkillNames = [
  ...new Set(skillGroups.flatMap((group) => group.items.map((item) => item.name))),
];

function Skills() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="skills" className="section section-soft">
      <div className="container" ref={ref}>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <p className="section-subtitle">
          Here are some of the skills I use while building web applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skill-card">
              <h3 style={{ color: group.color }}>{group.title}</h3>

              {group.items.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{
                        width: inView ? `${skill.level}%` : "0%",
                        background: group.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="skill-tags">
          {allSkillNames.map((name) => (
            <span key={name} className="skill-tag">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;