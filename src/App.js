import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Certification from './components/Certification';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Section1 from './components/Section1';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <Navbar />

      {/* Use Routes instead of Switch */}
      <Routes>
        {/* Default route */}
        <Route path="/" element={<DefaultContent />} />

        {/* Nested route for /projects */}
        <Route path="/projects/*" element={<ProjectsContent />} />
      </Routes>

    </Router>
  );
}

// Default content visible on /
function DefaultContent() {
  return (
    <>
      <Section1 />
      <Skills />
      <Certification />
      <Footer />

    </>
  );
}

// Projects content visible on /projects/*
function ProjectsContent() {
  return <Projects />;
}

export default App;
