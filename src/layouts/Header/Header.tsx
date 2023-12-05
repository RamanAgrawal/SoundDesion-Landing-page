// Importing required components and styles
import Navbar from "../Navbar/Navbar";
import "./style.scss";

// Header functional component
const Header = () => {
  return (
    // Header section for the website
    <header aria-label="Header" role="banner">
      {/* Wrapper for header content */}
      <div className="wrapper">
        <Navbar />
        {/* Call-to-action section */}
        <div className="cta" aria-label="Call-to-action">
          {/* Course name */}
          <p className="course-name">Sounds Masterclass</p>
          {/* Main heading */}
          <h1>Learn the art of sound design</h1>

          <button className="cta-button" aria-label="Take a Demo Lesson">
            Demo Lesson
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
