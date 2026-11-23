import { Link } from "react-router-dom";
import { personalInfo, navLinks } from "../../data/portfolioData";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to={{ pathname: "/", hash: "#home" }} className="logo">
              <span className="logo-badge">{personalInfo.initials}</span>
              <span className="footer-domain">{personalInfo.domain}</span>
            </Link>
            <p className="footer-text">{personalInfo.footerText}</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={{ pathname: "/", hash: link.href }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul className="footer-links footer-connect">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  🐙 GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>✉️ Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed & Built by <span>{personalInfo.name}</span> ©{" "}
            {new Date().getFullYear()}
          </p>
          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;