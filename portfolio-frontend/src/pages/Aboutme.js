import React from "react";
import "../App.css"; // Make sure styles apply

function AboutMe() {
  return (
    <div className="about-container">
      <h1>More About Me</h1>
      <p>
        Hi! I’m Tahir Ismailwala, a passionate developer and lifelong learner. I’m currently studying 
        Computer Science and Data Science at George Mason University. I enjoy building projects that solve 
        real world problems - especially in areas like AI, data, and web development.
      </p>
      <p>
        Outside of coding, I enjoy reading, organizing events, and diving into new technologies like machine learning, NLP, and system design to learn more.
      </p>
      <p>
        My goal is to contribute meaningfully to teams focused on impactful technology, while always pushing myself to grow as an engineer.
      </p>
      <br></br>
      <p>
        Thanks for reading!
      </p>
      {/* Education Section */}
      <div className="about-section">
        <h1>🧑‍🎓 Education</h1>
        <ul>
          <li>
            <p>
                George Mason University – B.S. Computer Science & Data Science (Expected Dec 2026)
            </p>
          </li>
          <li>
            <p>
                Relevant Coursework: Algorithms, Data Structures, Machine Learning, Systems Programming
            </p>
          </li>
        </ul>
      </div>

      {/* Work History Section */}
      <div className="about-section">
        <h1>🧑‍💻Work History</h1>
        <ul>
          <li>
            <strong>Software Intern</strong> – [Company Name] (May 2024 – Aug 2024)  
            <br />
            Worked on full-stack features using Django and React, and helped implement RESTful APIs.
          </li>
          <li>
            <strong>Founder & Organizer</strong> – RSCS Club @ GMU (2023 – Present)  
            <br />
            Led a student organization focused on applied computer science and machine learning workshops.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
