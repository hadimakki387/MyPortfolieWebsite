import "./css/Home.css";
import "./css/About.css";
import "./css/projects.css";
import "./css/resume.css";
import "./css/shortcuts.css";
import "./css/ContactMe.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/projects";
import Resume from "./routes/Resume";
import ContactMe from "./routes/ContactMe";

function App() {
  return (
    <div className="outerDiv ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
