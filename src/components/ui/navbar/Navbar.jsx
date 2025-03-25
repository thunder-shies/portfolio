import "./Navbar.css";
import about_icon from "../../../assets/svg/icons8-about.svg";
import project_icon from "../../../assets/svg/icons8-folder.svg";
import cv_icon from "../../../assets/svg/icons8-document.svg";

export const Navbar = () => {
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <img src={about_icon} alt="" className="nav-icon" />
          <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
        </li>
        <li>
          <img src={project_icon} alt="" className="nav-icon" />
          <a href="#work" onClick={(e) => scrollToSection('work', e)}>Projects</a>
        </li>
        <li>
          <img src={cv_icon} alt="" className="nav-icon" />
          <a href="https://docs.google.com/document/d/1mKtNHiRMuRVgGDX0XrZ9ZtONT63UmVom_Av7DALWqjc/" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;