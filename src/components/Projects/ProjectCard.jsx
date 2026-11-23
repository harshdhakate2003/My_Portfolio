import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage";

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <ProjectImage project={project} />

      <div className="project-card-body">
        <div className="pill-list">
          {project.tech.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p className="project-card-text">{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;