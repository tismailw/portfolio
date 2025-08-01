import { useEffect, useState } from "react";
import axios from "axios";
import './Books.css';

function Certifications() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/certifications/")
      .then(res => {
        const sorted = res.data.sort((a, b) => a.name.localeCompare(b.name));
        setCerts(sorted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="books-container">
      {certs.map((cert) => (
        <div key={cert.id} className="book-card">
          <h3>{cert.name}</h3>
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="book-image"
            />
          ) : (
            <p className="no-image">No image available</p>
          )}

          <p><strong>Issuer:</strong> {cert.issuer}</p>
          {cert.issue_date && (
            <p><strong>Issued:</strong> {new Date(cert.issue_date).toLocaleDateString()}</p>
          )}
          {cert.credential_url && (
            <p>
              <a href={cert.credential_url} target="_blank" rel="noopener noreferrer">
                View Credential
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Certifications;
