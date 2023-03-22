import { Link } from "react-router-dom";

import FacebookIcon from "../ui/icons/FacebookIcon";
import InstagramIcon from "../ui/icons/InstagramIcon";
import YouTubeIcon from "../ui/icons/YouTubeIcon";
import FooterLogo from "../../images/logo-vertical-white.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`fluidContainer ${classes.footerContainer}`}>
        <div className={classes.footerLogo}>
          <Link to="/">
            <img src={FooterLogo} alt="Footer logo" />
          </Link>
        </div>
        <div className={classes.linksContainer}>
          <div className={classes.linksBlock}>
            <p>Site Map</p>
            <menu>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/booking-page">Reservations</Link>
              </li>
              <li>
                <Link to="/">Order Online</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </menu>
          </div>
          <div className={classes.linksBlock}>
            <p>Contact</p>
            <menu>
              <li>West Java, Indonesia</li>
              <li>
                <p>0813-8491-5126</p>
                <a
                  href="tel:0813-8491-5126"
                  style={{
                    textDecoration: "underline",
                    position: "relative",
                    top: "-0.5rem",
                  }}
                >
                  Give us a call
                </a>
              </li>
              <li>
                <p>mahfudinandy@gmail.com</p>
                <a
                  href="mailto:mahfudinandy@gmail.com"
                  style={{
                    textDecoration: "underline",
                    position: "relative",
                    top: "-0.5rem",
                  }}
                >
                  Write us a letter
                </a>
              </li>
            </menu>
          </div>
          <div className={classes.linksBlock}>
            <p>Social media</p>
            <menu>
              <li>
                <a
                  href="https://www.facebook.com/andy.mahfudin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/andymahfudin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                </a>
              </li>
            </menu>
          </div>
        </div>
      </div>
    </footer>
  );
}
