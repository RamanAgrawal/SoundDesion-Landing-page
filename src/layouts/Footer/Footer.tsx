import "./style.scss";
import { instagramLogo, facebookLogo, twitterLogo } from "../../assets";
const Footer = () => {
  const socialIcons = [
    {
      img: instagramLogo,
      link: "https://www.instagram.com/sounddzign/",
    },
    {
      img: facebookLogo,
      link: "https://www.facebook.com/sounddzign",
    },
    {
      img: twitterLogo,
      link: "https://twitter.com/sounddzign",
    },
  ];

  return (
    <footer>
      <div className="wrapper">
        <div className="content-container">
          <div className="link">
            <a href="#" className="logo">
              Sound <span>DZign</span>
            </a>
            <div className="social-icons">
              {socialIcons.map((socialIcon, i) => (
                <a href={socialIcon.link} key={i}>
                  <img src={socialIcon.img} alt="" />
                </a>
              ))}
            </div>
            <div className="copyright">
              This Website is designed and developed by Raman @2023
            </div>
          </div>
          <div className="link">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="link">
            <h3>Contects</h3>
            <ul>
              <li>
                <a href="#">iramanagrawqal@gmail.com</a>
              </li>
              <li>
                <a href="#">8959095100</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mob copyright">
          This Website is designed and developed by Raman @2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
