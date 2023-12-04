import { bgElement2, studentIcon, videoIcon } from "../../assets";
import "./style.scss";

const Info = () => {
  return (
    <section id="info">
      <div className="wrapper">
      <img src={bgElement2} className="ele2" alt="element" />
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt={studentIcon} />
            <div className="amount">23000+</div>
            <div className="type">student</div>
          </div>
          <div className="info-content">
            <img src={videoIcon} alt={videoIcon} />
            <div className="amount">26Hr</div>
            <div className="type">Video Content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
