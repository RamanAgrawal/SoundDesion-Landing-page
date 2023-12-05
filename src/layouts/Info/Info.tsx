import { bgElement2, studentIcon, videoIcon } from "../../assets";
import "./style.scss";

// Info functional component
const Info = () => {
  return (
    // Section for information display
    <section id="info" aria-label="Information" role="region">
      {/* Wrapper for content */}
      <div className="wrapper">
        {/* Background element */}
        <img src={bgElement2} className="ele2" alt="Decorative element" />
        {/* Content container */}
        <div className="content-container" aria-label="Information content">
          {/* Student information */}
          <div className="info-content" aria-label="Student information">
            <img src={studentIcon} alt="Student Icon" />
            {/* Total number of students */}
            <div className="amount">23000+</div>
            {/* Type of information */}
            <div className="type">Students</div>
          </div>
          {/* Video content information */}
          <div className="info-content" aria-label="Video content information">
            <img src={videoIcon} alt="Video Icon" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
