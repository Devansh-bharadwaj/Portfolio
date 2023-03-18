import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./logo.png";
import { FcDownload } from "react-icons/fc";
import { Link } from "react-scroll";
import myResume from "./myResume.pdf";
import { FaSun, FaRegMoon } from 'react-icons/fa';

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const changeThemeHandler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="headerFixed">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div style={{ marginLeft: "-22px" }}>DEVANSH</div>
      </div>
      <a href={myResume} className="downloadCvBtn" download>
        <span className="animatedBtn">
          <span>
            DOWNLOAD CV <FcDownload className="icon" />
          </span>
        </span>
      </a>
      <div className="headerItem">
        <div className="topMenu">
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                RESUME
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
            <button className="theme-button" onClick={changeThemeHandler}>{theme === "light-theme" ? <FaSun /> : <FaRegMoon />}</button>
          </ul>
        </div>
      </div>
      {!sideBar ? (
        <a href="#" className="menuBtn" onClick={() => setSideBar(true)}>
          <span></span>
        </a>
      ) : (
        <a href="#" className="closeMenu" onClick={() => setSideBar(false)}>
          <span></span>
        </a>
      )}
      {sideBar && (
        <div className="headerSidebar">
          <div className="topMenu1">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSideBar(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSideBar(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSideBar(false)}
                >
                  RESUME
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSideBar(false)}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSideBar(false)}
                >
                  CONTACTS
                </Link>
              </li>
              <li>
                <button className="theme-button" onClick={changeThemeHandler}>{theme === "light-theme" ? <FaSun /> : <FaRegMoon />}</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
