import { aboutText, highlights } from "../../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <p className="section-subtitle">
          A little about who I am and what I do.
        </p>

        <div className="about-grid">
          <div className="about-text">
            {aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.title} className="card highlight-card">
                <span className="highlight-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;