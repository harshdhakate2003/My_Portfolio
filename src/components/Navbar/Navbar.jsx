import { useState } from "react";
import { Link } from "react-router-dom";
import { personalInfo, navLinks } from "../../data/portfolioData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to={{ pathname: "/", hash: "#home" }} className="logo">
          <span className="logo-badge">{personalInfo.initials}</span>
          <span className="logo-text">
            {personalInfo.brandFirst} <span>{personalInfo.brandLast}</span>
          </span>
        </Link>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={{ pathname: "/", hash: link.href }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-small nav-resume-mobile"
            download
          >
            Download Resume
          </a>
        </nav>

        <a
          href={personalInfo.resumeUrl}
          className="btn btn-small nav-resume"
          download
        >
          Download Resume
        </a>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;