import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Extracurriculars from "./components/Extracurriculars";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [page, setPage] = React.useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "extracurriculars" && <Extracurriculars />}
      {page === "projects" && <Projects />}
      {page === "awards" && <Awards />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;