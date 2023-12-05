// Importing styles and assets
import "./style.scss";
import { instagramLogo, facebookLogo, twitterLogo } from "../../assets";

// Define type for social icon
interface SocialIcon {
  img: string;
  link: string;
}

interface QuickLinkI {
  text: string;
  link: string;
}

// Footer functional component
const Footer = () => {
  // Array of social icons
  const socialIcons: SocialIcon[] = [
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

  // Array of quick links
  const quickLinks: QuickLinkI[] = [
    {
      text: "About",
      link: "https://www.instagram.com/sounddzign/",
    },
    {
      text: "Services",
      link: "https://www.facebook.com/sounddzign",
    },
    {
      text: "Contact",
      link: "https://twitter.com/sounddzign",
    },
  ];

  return (
    // Footer section
    <footer aria-label="Footer" role="contentinfo">
      {/* Wrapper for footer content */}
      <div className="wrapper">
        {/* Footer content container */}
        <div className="content-container">
          {/* Company logo and social icons */}
          <div className="link">
            {/* SEO: Use h2 for better structure */}
            <a href="#" className="logo">
              Sound <span>DZign</span>
            </a>
            {/* Social icons */}
            <div className="social-icons" aria-label="Social Links">
              {/* Map through social icons and render images with links */}
              {socialIcons.map((socialIcon, i) => (
                <a href={socialIcon.link} key={i}>
                  {/* Provide alt text for accessibility */}
                  <img src={socialIcon.img} alt={`Social Icon ${i}`} />
                </a>
              ))}
            </div>
            {/* Copyright */}
            <div className="copyright">Website developed by Raman @2023</div>
          </div>
          {/* Quick Links */}
          <div className="link">
            <h3>Quick Links</h3>
            <ul>
              {/* Map through quick links and create anchor links */}
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contacts */}
          <div className="link">
            <h3>Contact</h3>
            <ul>
              {/* Provide contact information */}
              <li>
                <a href="mailto:iramanagrawal@gmail.com">
                  iramanagrawal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:8959095100">8959095100</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile view copyright */}
        <div className="mob copyright">Website developed by Raman @2023</div>
      </div>
    </footer>
  );
};

export default Footer;
