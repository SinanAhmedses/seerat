import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "./App.css"; // Your custom CSS

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Faculty from "./Components/Faculty";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
