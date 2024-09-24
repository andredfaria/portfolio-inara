import React, { Fragment,useCallback, useEffect } from "react";
import Header from "../common/Header";
import VideoCarousel from "../Homepage/VideoCarousel/VideoCarousel";
import Footer from "../common/Footer";
import "./_TV.scss";
import dotsSquare from "../../assets/images/dots-square.png";

const TV = () => {
  const service = {
    title: "Prestação de Serviço",
    videos: [
      { id: "1", url: "https://www.youtube.com/embed/RCLVevPL8hE" },
      { id: "2", url: "https://www.youtube.com/embed/3chW8DoALhM" },
      { id: "3", url: "https://www.youtube.com/embed/y_VjWy7ZFLw" },
      { id: "4", url: "https://www.youtube.com/embed/6LQxd8BbzIU" },
    ],
  }

  const culture = {
    title: "Cultura e Entretenimento",
    videos: [
      { id: "5", url: "https://www.youtube.com/embed/sSrVd0qm2zU" },
      { id: "6", url: "https://www.youtube.com/embed/Imaw6VNfG1c" },
      { id: "7", url: "https://www.youtube.com/embed/DDbHcsE52jQ" },
      { id: "8", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
    ],
  }

  const police = {
    title: "Policial",
    videos: [
      { id: "13", url: "https://www.youtube.com/embed/bSb5WzBSwTU" },
      { id: "14", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
    ],
  }

  const sport = {
    title: "Esporte",
    videos: [
      { id: "19", url: "https://www.youtube.com/embed/gWSd68qov7w" },
      { id: "20", url: "https://www.youtube.com/embed/KrIQRWXRotM" },
      { id: "21", url: "https://www.youtube.com/embed/V5npXQRuOak" },
    ],
  }

  useEffect(() => {
    const handleNext = () => {
      if (typeof window !== "undefined" && window.jQuery) {
        window.jQuery("#video-carrusel-inara").carousel("next");
      }
    };
  }, []);

  const handleNext = useCallback((category) => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery(`#video-carrusel-${category.toLowerCase().replace(/\s+/g, '-')}`).carousel("next");
    }
  }, []);

  const handlePrev = useCallback((category) => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery(`#video-carrusel-${category.toLowerCase().replace(/\s+/g, '-')}`).carousel("prev");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
       <section id="intro" className="pb-0 intro container section-spacing">
        <div className="row">
          <div className="intro-text-box">
            <h1>Portfólio</h1>
            <p className="description desc" style={{ color: "#969696" }}>
              Esses são alguns dos meus trabalhos como jornalista e produtora.
            </p>
          </div>
        </div>
      </section>
      {[service, culture, police, sport].map((category) => (
        <section
          key={category.title}
          id={category.title.toLowerCase().replace(/\s+/g, "-")}
          className="intro container section-spacing"
        >
          <div className="row">
            <div className="section-heading">
              <h4 className="about-me-heading">{category.title}</h4>
            </div>
            <div
              id={`video-carrusel-${category.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                {category.videos.map((_, index) => (
                  <li
                    key={index}
                    data-bs-target={`#video-carrusel-${category.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {category.videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <iframe
                      src={video.url}
                      title={`Vídeo ${index + 1}`}
                      allowFullScreen
                      className="rounded d-block w-100 fullscreen-video"
                    ></iframe>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                role="button"
                onClick={() => handlePrev(category.title)}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Anterior</span>
              </a>
              <a
                className="carousel-control-next"
                role="button"
                onClick={() => handleNext(category.title)}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Próximo</span>
              </a>
            </div>
          </div>
          {(category.title === "Prestação de Serviço" ||
            category.title === "Policial" ||
            category.title === "Esporte") && (
            <img
              className="square-dots dots-img d-none d-lg-block"
              src={dotsSquare}
              alt="dots-sq"
            />
          )}
        </section>
      ))}
      <Footer />
    </Fragment>
  );
};

export default TV;
