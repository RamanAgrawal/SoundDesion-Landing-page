// Import necessary assets and styles
import { closeIcon, menuIcon } from "../../assets";
import { useState } from "react";
import "./style.scss";
interface Navigation {
  name: string;
  link: string;
}
// Functional component for Navbar
const Navbar = () => {
  // State for handling mobile navigation visibility
  const [showNav, setShowNav] = useState(false);

  // Array of navigation links and names
  const navigations: Navigation[] = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Courses",
      link: "#topics",
    },
    {
      name: "About",
      link: "#info",
    },
    {
      name: "Blog",
      link: "#blog",
    },
  ];

  return (
    <>
      {/* Main navigation bar */}
      <nav aria-label="Main Navigation" role="navigation">
        {/* Logo */}
        <a href="#" className="logo">
          Sound <span>DZign</span>
        </a>

        {/* Navigation links */}
        <ul>
          {navigations.map((nav, index) => (
            <li key={index}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile navigation icon */}
        <div onClick={() => setShowNav(true)} className="menu-icon">
          <img src={menuIcon} alt="Menu Icon" />
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <div
        className={`mobile-nav ${showNav ? "active" : ""}`}
        aria-label="Mobile Navigation"
        role="navigation"
      >
        {/* Close icon for mobile navigation */}
        <div onClick={() => setShowNav(false)} className="close">
          <img src={closeIcon} alt="Close Icon" />
        </div>
        {/* Mobile navigation links */}
        <ul>
          {navigations.map((nav, index) => (
            <li key={index} onClick={() => setShowNav(false)}>
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
