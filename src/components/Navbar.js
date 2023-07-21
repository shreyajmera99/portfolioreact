import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="left">
          <Link to="/">Shrey's Portfolio.</Link>
          <img src="icon.png" alt="" />
        </div>
        <div className="mid">
          <Link to="/">Home</Link>
          <a href="#footer">Contact</a>
          <Link to="/">Skills</Link>
          <Link to="/">Certification</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </>
  );
}
