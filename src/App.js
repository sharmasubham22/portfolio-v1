import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PHome from './components/home';
import Contact from './components/contact';
import Education from './components/education';
import Skills from './components/skills';
import Experience from './components/experience';
import useLocalStorage from "use-local-storage";


function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
     
        <button onClick={switchTheme} className="d-mode">
          &#9728;
        </button>
      
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
