import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ color: "#3d5afe" }}>Projects & Creative Work</h2>
      {projects.map((project, idx) => (
        <div key={idx} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;