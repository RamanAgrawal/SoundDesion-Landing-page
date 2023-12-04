import { closeIcon, menuIcon } from "../../assets";

import {useState} from 'react'
import "./style.scss";
const Navbar = () => {

  const [showNav, setShowNav] = useState(false)
  const navigations = [
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
    <nav>
      <a href="#" className="logo">
        Sound <span>DZign</span>
      </a>

      <ul>
        {navigations.map((nav, index) => (
          <li key={index}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <div onClick={()=>setShowNav(true)} className="menu-icon">
        <img src={menuIcon} alt="menu icon" />
      </div>
    </nav>
    <div className={`mobile-nav ${showNav ? 'active':""}`}>
      <div onClick={()=>setShowNav(false)} className="close">
        <img src={closeIcon} alt="closeicon" />
      </div>
      <ul>
        {navigations.map((nav, index) => (
          <li key={index}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Navbar;
