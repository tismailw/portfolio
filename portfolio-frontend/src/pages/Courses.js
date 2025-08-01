import { useEffect, useState } from "react";
import axios from "axios";
import './Books.css'; // Reusing the book styles

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/courses/")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="books-container">
      {courses.map((course) => (
        <div key={course.id} className="book-card">
          <h3>{course.title}</h3>

          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="book-image"
            />
          ) : (
            <p className="no-image">No image available</p>
          )}

          <p><strong>Provider:</strong> {course.provider}</p>
          {course.description && <p><strong>Description:</strong> {course.description}</p>}
          {course.url && (
            <p>
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                View Course
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Courses;
