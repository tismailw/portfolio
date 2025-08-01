import { useEffect, useState } from "react";
import axios from "axios";
import './Books.css'; // Reusing the book styles

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/projects/")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="books-container">
      {projects.map((projects) => (
        <div key={projects.id} className="book-card">
          <h3>{projects.title}</h3>

          {projects.image ? (
            <img
              src={projects.image}
              alt={projects.title}
              className="book-image"
            />
          ) : (
            <p className="no-image">No image available</p>
          )}

          <p><strong>Provider:</strong> {projects.provider}</p>
          {projects.description && <p><strong>Description:</strong> {projects.description}</p>}
          {projects.url && (
            <p>
              <a href={projects.url} target="_blank" rel="noopener noreferrer">
                View projects
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
