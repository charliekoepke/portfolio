import { NavLink } from "react-router";
import linkedin from "../../assets/linkedin.webp";
import Icon from "../atoms/Icon.jsx";
import { SITE_LINKS } from "./SiteHeader.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="bar footer-bar">
        <div className="footer-identity">
          <p className="footer-name">Charlie Koepke</p>
          <nav className="footer-links" aria-label="Contact">
            <a className="icon-link" href="https://www.linkedin.com/in/charliejunkoepke/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a className="icon-link" href="mailto:charliejunkoepke@gmail.com">
              <Icon name="mail" />
              <span className="visually-hidden">Email</span>
            </a>
          </nav>
        </div>
        <nav className="footer-nav" aria-label="Site">
          {SITE_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
