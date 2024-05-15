import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "boxicons/css/boxicons.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = 'LLT';
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
