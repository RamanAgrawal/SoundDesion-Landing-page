import Navbar from "../Navbar/Navbar";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar/>
        <div className="cta">
          <p className="course-name">Sounds M-asterclass</p>
          <h1>Learn the art of sound design</h1>
          <button className="cta-button">Demo Lesson</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
