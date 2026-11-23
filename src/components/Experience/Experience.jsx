import { experience, education } from "../../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section section-soft">
      <div className="container">
        <h2 className="section-title">
          Experience <em>and</em> <span>Education</span>
        </h2>

        <div className="exp-grid">
          <div>
            <h3 className="column-title">
              <span>💼</span> Work Experience
            </h3>

            <div className="timeline">
              {experience.map((item) => (
                <div key={item.role + item.company} className="timeline-item">
                  <span
                    className="timeline-dot"
                    style={{ background: item.color }}
                  />
                  <div className="timeline-card">
                    <div className="timeline-head">
                      <h4>{item.role}</h4>
                      <span className="timeline-period">{item.period}</span>
                    </div>

                    <div className="timeline-sub">
                      <span className="timeline-company">{item.company}</span>
                      {item.type && (
                        <span className="timeline-type">{item.type}</span>
                      )}
                    </div>

                    {item.location && (
                      <p className="timeline-meta">📍 {item.location}</p>
                    )}

                    <ul className="timeline-points">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="column-title">
              <span>🎓</span> Education
            </h3>

            <div className="timeline">
              {education.map((item) => (
                <div key={item.title} className="timeline-item">
                  <span
                    className="timeline-dot"
                    style={{ background: item.color }}
                  />
                  <div className="timeline-card">
                    <h4>{item.title}</h4>
                    <p className="timeline-company">{item.place}</p>
                    {item.score && (
                      <span
                        className="score"
                        style={{ background: item.color }}
                      >
                        {item.score}
                      </span>
                    )}
                    {item.field && (
                      <p className="timeline-meta">{item.field}</p>
                    )}
                    {item.period && (
                      <p className="timeline-meta">{item.period}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;