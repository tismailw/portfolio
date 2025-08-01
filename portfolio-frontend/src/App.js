import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Books from './pages/Books';
import Certifications from './pages/Certifications';
import AboutMe from "./pages/Aboutme"; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/books" element={<Books />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
