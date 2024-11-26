import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar mainbox">
      <a href="/">
        <h2 className="navbar-logo-text">HIMANSHU KUMAR SHARMA</h2>
      </a>
      <div className="navbar-links">
        <a href="#about">
          <p className="navbar-text select">About </p>
        </a>
        <a href="https://www.linkedin.com/in/himanshu-kumar-sharma-901955243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <div className="external-link">
            <p className="navbar-text">LinkedIn</p>
            <Image src="/arrow.png" width="19" height="19" />
          </div>
        </a>
        <a
          href=""
          target="_blank"
        >
          <div className="external-link">
            <p className="navbar-text">Resume</p>
            <Image src="/arrow.png" width="19" height="19" />
          </div>
        </a>
      </div>
    </div>
  );
}
