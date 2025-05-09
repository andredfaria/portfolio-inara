import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import * as routes from "../../routePaths";
import "./_header.scss";
import dark from "../../assets/images/dark.png";
import light from "../../assets/images/light.png";

const Header = props => {
  let [show, setShow] = useState(false);
  let [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );
  const handleTheme = () => {
    localStorage.setItem("darkTheme", JSON.stringify(!darkTheme));
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let darkTheme = JSON.parse(localStorage.getItem("darkTheme"));

    if (darkTheme) {
      document.documentElement.style.setProperty(
          `--background-color`,
          "#252525"
        );
        document.documentElement.style.setProperty(`--main-heading`, "white");
        document.documentElement.style.setProperty(`--sub-heading`, "#aaa3a3");
        document.documentElement.style.setProperty(`--paragraph`, "#6d6d6d");
        document.documentElement.style.setProperty(
          `--aboutme-blogs-bg`,
          "#232323"
        );
        document.documentElement.style.setProperty(
          `--companies-click-to-view-bg`,
          "#252525"
        );
        document.documentElement.style.setProperty(
          `--contact-us-bg-img`,
          "linear-gradient(180deg, #232323 0%, #272727 100%)"
        );
        document.documentElement.style.setProperty(`--resume-main-bg`, "#1B1B1B");
        document.documentElement.style.setProperty(`--testimonial`, "#2a303b");
        document.documentElement.style.setProperty(
          `--testimonial-shadow`,
          "#2c2e31"
        );
      } else {
      document.documentElement.style.setProperty(`--background-color`, "white");
      document.documentElement.style.setProperty(`--main-heading`, "#1d1d1d");
      document.documentElement.style.setProperty(`--sub-heading`, "#646464");
      document.documentElement.style.setProperty(`--paragraph`, "#504f4f");
      document.documentElement.style.setProperty(
        `--aboutme-blogs-bg`,
        "#faf8f8"
      );
      document.documentElement.style.setProperty(
        `--companies-click-to-view-bg`,
        "#ededed"
      );
      document.documentElement.style.setProperty(
        `--contact-us-bg-img`,
        "linear-gradient(180deg, #ededed 0%, #ffffff 100%)"
      );
      document.documentElement.style.setProperty(`--resume-main-bg`, "#EAEAEA");
      document.documentElement.style.setProperty(`--testimonial`, "#EFEFEF");
      document.documentElement.style.setProperty(
        `--testimonial-shadow`,
        "#D9D9D9"
      );
  }
  }, [darkTheme, setDarkTheme]);
  return (
    <div
      className="container-fluid header"
      style={show ? { height: "100vh" } : {}}
      id="header"
    >
      <nav className="container navbar navbar-expand-lg pr-0 pl-0">
        <Link to={`${routes.homepage}#home`} className="navbar-brand">
          Inara Angra
        </Link>
        <img
          className="d-block d-lg-none themeswitcher-mob"
          src={darkTheme ? light : dark}
          alt=""
          onClick={handleTheme}
          style={{ maxHeight: "25px", cursor: "pointer" }}
        />
        <button
          className={`navbar-toggler ${show}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HamburgerMenu
            isOpen={show}
            menuClicked={() => setShow(!show)}
            width={20}
            height={15}
            strokeWidth={1}
            rotate={0}
            color={darkTheme ? "white" : "black"}
            borderRadius={0}
            animationDuration={0.5}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={`${routes.homepage}#home`}
                className="nav-link"
                style={{ color: "#969696" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${routes.homepage}curriculo`}
                className="nav-link"
                style={{ color: "#969696" }}
              >
                Curriculo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`${routes.homepage}televisao`}
                className="nav-link"
                style={{ color: "#969696" }}
              >
                Portifólio
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                to={`${routes.homepage}blog`}
                className="nav-link"
                style={{ color: "#969696" }}
              >
                Blog
              </Link>
            </li> */}

            <li className="nav-item left d-none d-lg-block">
              <img
                src={darkTheme ? light : dark}
                alt=""
                onClick={handleTheme}
                style={{ maxHeight: "20px", cursor: "pointer" }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
