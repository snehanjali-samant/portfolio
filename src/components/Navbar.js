import React from "react";
// import logo from "../logo.jpeg";
// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          PORTFOLIO
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="Hero.js">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About.js">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Skills.js">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Project.js">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact.js">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
