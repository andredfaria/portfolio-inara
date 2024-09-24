import React, { Fragment, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMe from "./AboutMe/AboutMe";
import Introduction from "./Introduction/Introduction";
import "./Home.scss";
const Homepage = props => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
    { id: "2", url: "https://www.youtube.com/embed/V5npXQRuOak" },
    { id: "3", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
    { id: "3", url: "https://www.youtube.com/embed/StQBIoAfAzw" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <Introduction />
      <section id="intro" className="intro container section-spacing">
        <div className="row">
          <div className="section-heading">
            <h4 className="about-me-heading">Destaques</h4>
          </div>
          <div id="video" className="carousel slide" data-bs-ride="carousel" >
            <ol className="carousel-indicators">
              {videos.map((_, index) => (
                <li
                  key={index}
                  data-bs-target="#video"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={video.url}
                      title={`Vídeo ${index + 1}`}
                      allowFullScreen
                      className="rounded d-block w-100 fullscreen-video"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
            <a className="carousel-control-prev"href="#video" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#videoCarousel" role="button" data-bs-slide="next" >
              <span className="carousel-control-next-icon" aria-hidden="true" ></span>
              <span className="visually-hidden">Próximo</span>
            </a>
          </div>
        </div>
      </section>
      <AboutMe />
      <Footer />
    </Fragment>
  );
};
export default Homepage;
