import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import * as routes from "../../routePaths";
import "./_header.scss";
import dark from "../../assets/images/dark.png";
import light from "../../assets/images/light.png";

const Header = props => {
  const [show, setShow] = useState(false);
  const [darkTheme, setDarkTheme] = useState(
    () => JSON.parse(localStorage.getItem("darkTheme")) || false
  );

  const applyTheme = (isDark) => {
    const themeVars = isDark
      ? {
          "--background-color": "#252525",
          "--main-heading": "white",
          "--sub-heading": "#aaa3a3",
          "--paragraph": "#6d6d6d",
          "--aboutme-blogs-bg": "#232323",
          "--companies-click-to-view-bg": "#252525",
          "--contact-us-bg-img": "linear-gradient(180deg, #232323 0%, #272727 100%)",
          "--resume-main-bg": "#1B1B1B",
          "--testimonial": "#2a303b",
          "--testimonial-shadow": "#2c2e31",
        }
      : {
          "--background-color": "white",
          "--main-heading": "#1d1d1d",
          "--sub-heading": "#646464",
          "--paragraph": "#504f4f",
          "--aboutme-blogs-bg": "#faf8f8",
          "--companies-click-to-view-bg": "#ededed",
          "--contact-us-bg-img": "linear-gradient(180deg, #ededed 0%, #ffffff 100%)",
          "--resume-main-bg": "#EAEAEA",
          "--testimonial": "#EFEFEF",
          "--testimonial-shadow": "#D9D9D9",
        };

    Object.entries(themeVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  const handleTheme = () => {
    const newTheme = !darkTheme;
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
    setDarkTheme(newTheme);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    applyTheme(darkTheme);
  }, [darkTheme]);
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
