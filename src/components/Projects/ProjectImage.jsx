import { useState } from "react";

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="project-img"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="project-img project-img-fallback">
      <span>{project.icon}</span>
      <p>{project.title}</p>
    </div>
  );
}

export default ProjectImage;