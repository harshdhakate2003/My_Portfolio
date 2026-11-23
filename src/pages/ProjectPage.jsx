import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";
import ProjectImage from "../components/Projects/ProjectImage";

// Shows a working button when the link exists, and a disabled button when it does not.
function LinkButton({ href, label }) {
  if (!href) {
    return (
      <span className="btn btn-disabled" title="Link not available yet">
        {label}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="btn">
      {label}
    </a>
  );
}

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="section detail-page">
        <div className="container">
          <h2 className="section-title">Project not found</h2>
          <p className="section-subtitle">
            This project does not exist or the link is wrong.
          </p>
          <div className="detail-center">
            <Link
              to={{ pathname: "/", hash: "#projects" }}
              className="btn btn-violet"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section detail-page">
      <div className="container project-detail">
        <Link
          to={{ pathname: "/", hash: "#projects" }}
          className="btn btn-violet"
        >
          ← Back
        </Link>

        <div className="detail-grid">
          <ProjectImage project={project} />

          <div>
            <h1 className="detail-title">{project.title}</h1>

            <div className="pill-list">
              {project.tech.map((tech) => (
                <span key={tech} className="pill pill-violet">
                  {tech}
                </span>
              ))}
            </div>

            <p className="detail-text">{project.longDescription}</p>

            <div className="detail-buttons">
              <LinkButton href={project.live} label="Live Demo" />
              <LinkButton href={project.github} label="GitHub Code" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;