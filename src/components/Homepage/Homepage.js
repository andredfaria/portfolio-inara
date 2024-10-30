// Homepage.js
import React, { Fragment, useCallback, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMe from "./AboutMe/AboutMe";
import "./Home.scss";
import Introduction from "./Introduction/Introduction";

const Homepage = (props) => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
    { id: "2", url: "https://www.youtube.com/embed/V5npXQRuOak" },
    { id: "3", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
    { id: "4", url: "https://www.youtube.com/embed/StQBIoAfAzw" },
  ];

  const handleNext = useCallback(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery("#video-carrusel-inara").carousel("next");
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery("#video-carrusel-inara").carousel("prev");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Introduction />
      <section id="intro" className="intro container section-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section-heading">
                <h4 className="about-me-heading">Destaques</h4>
              </div>

              <div
                id="video-carrusel-inara"
                className="carousel slide shadow-lg rounded overflow-hidden video-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#video-carrusel-inara"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <div className="carousel-inner h-100">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`carousel-item h-100 ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      <div className="video-wrapper">
                        <iframe
                          src={video.url}
                          title={`Vídeo ${index + 1}`}
                          allowFullScreen
                          className="video-frame"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={handlePrev}
                  data-bs-target="#video-carrusel-inara"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon p-3 bg-dark bg-opacity-50 rounded-circle"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={handleNext}
                  data-bs-target="#video-carrusel-inara"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon p-3 bg-dark bg-opacity-50 rounded-circle"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Próximo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
