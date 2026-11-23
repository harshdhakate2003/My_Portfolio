import { useState } from "react";
import { personalInfo, roles, stats } from "../../data/portfolioData";
import { useTypewriter } from "../../hooks/useTypewriter";

function Hero() {
  const typedRole = useTypewriter(roles);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [firstName, ...rest] = personalInfo.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-hello">Hello, I'm</p>
          <h1>
            {firstName} <span>{lastName}</span>
          </h1>

          <p className="hero-role">
            &lt; {typedRole}
            <span className="caret" /> /&gt;
          </p>

          <p className="hero-text">
            I am a passionate <span className="hl">React.js Developer</span>{" "}
            who builds fast and responsive web applications using{" "}
            <span className="hl">React.js</span>,{" "}
            <span className="hl">Django</span> and{" "}
            <span className="hl">REST APIs</span>. I focus on clean code,
            reusable components and real solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-ring">
            {!photoFailed ? (
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="photo"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="photo photo-fallback">{personalInfo.initials}</div>
            )}
          </div>

          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;