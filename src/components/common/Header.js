import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconMenu2, IconX, IconMoon, IconSun } from "@tabler/icons-react";
import * as routes from "../../routePaths";
import "./_header.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    applyTheme(darkTheme);
  }, [darkTheme]);

  return (
    <motion.header
      className={`premium-header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4">
        <div className="nav-content">
          {/* Logo */}
          <Link to={`${routes.homepage}#home`} className="logo">
            <span className="logo-text">Inara Angra</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li>
              <Link to={`${routes.homepage}#home`} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={`${routes.homepage}curriculo`} className="nav-link">
                Currículo
              </Link>
            </li>
            <li>
              <Link to={`${routes.homepage}televisao`} className="nav-link">
                Portfólio
              </Link>
            </li>
            <li>
              <button
                onClick={handleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {darkTheme ? (
                  <IconSun className="w-5 h-5" />
                ) : (
                  <IconMoon className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Controls */}
          <div className="mobile-controls">
            <button
              onClick={handleTheme}
              className="theme-toggle mobile"
              aria-label="Toggle theme"
            >
              {darkTheme ? (
                <IconSun className="w-5 h-5" />
              ) : (
                <IconMoon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setShow(!show)}
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {show ? (
                <IconX className="w-6 h-6" />
              ) : (
                <IconMenu2 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.ul
          className="nav-links mobile-nav"
          initial={false}
          animate={{ height: show ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <li>
            <Link
              to={`${routes.homepage}#home`}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`${routes.homepage}curriculo`}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              Currículo
            </Link>
          </li>
          <li>
            <Link
              to={`${routes.homepage}televisao`}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              Portfólio
            </Link>
          </li>
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
