import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";


function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
  axios.get("https://portfolio-9xvl.onrender.com/api/profile/")
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    document.body.style.overflowY = "hidden";  // Disable scroll on home
    return () => document.body.style.overflowY = "auto"; // Re-enable scroll when navigating away
  }, []);

  return (
    <div className="home-container">
      {profile ? (
        <div className="profile-container">
          <h1>{profile.name}</h1>
          <h2> {profile.bio}</h2>
          <p>Location: {profile.location}</p>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", gap: "1rem" }}>
            <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} style={{ color: "#2f2f2f" }} />
            </a>
            <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} style={{ color: "#0077b5" }} />
            </a>
            <a href="https://www.youtube.com/@dozeydev" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={40} style={{ color: "#FF0000" }} />
            </a>

          </div>
          
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Home;
