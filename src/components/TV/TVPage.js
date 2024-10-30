import React, { Fragment, useCallback, useEffect } from "react";
import dotsSquare from "../../assets/images/dots-square.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_TV.scss";

const TV = () => {
  const categories = [
    {
      title: "Prestação de Serviço",
      videos: [
        { id: "1", url: "https://www.youtube.com/embed/RCLVevPL8hE" },
        { id: "2", url: "https://www.youtube.com/embed/3chW8DoALhM" },
        { id: "3", url: "https://www.youtube.com/embed/y_VjWy7ZFLw" },
        { id: "4", url: "https://www.youtube.com/embed/6LQxd8BbzIU" },
      ],
    },
    {
      title: "Cultura e Entretenimento",
      videos: [
        { id: "5", url: "https://www.youtube.com/embed/sSrVd0qm2zU" },
        { id: "6", url: "https://www.youtube.com/embed/Imaw6VNfG1c" },
        { id: "7", url: "https://www.youtube.com/embed/DDbHcsE52jQ" },
        { id: "8", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
      ],
    },
    {
      title: "Policial",
      videos: [
        { id: "13", url: "https://www.youtube.com/embed/bSb5WzBSwTU" },
        { id: "14", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
      ],
    },
    {
      title: "Esporte",
      videos: [
        { id: "19", url: "https://www.youtube.com/embed/gWSd68qov7w" },
        { id: "20", url: "https://www.youtube.com/embed/KrIQRWXRotM" },
        { id: "21", url: "https://www.youtube.com/embed/V5npXQRuOak" },
      ],
    },
  ];

  const getCategoryId = (title) => title.toLowerCase().replace(/\s+/g, "-");

  const handleNext = useCallback((category) => {
    if (typeof window !== "undefined" && window.jQuery) {
      window
        .jQuery(`#video-carrusel-${getCategoryId(category)}`)
        .carousel("next");
    }
  }, []);

  const handlePrev = useCallback((category) => {
    if (typeof window !== "undefined" && window.jQuery) {
      window
        .jQuery(`#video-carrusel-${getCategoryId(category)}`)
        .carousel("prev");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const VideoCarousel = ({ category }) => (
    <div
      id={`video-carrusel-${getCategoryId(category.title)}`}
      className="carousel slide video-carousel shadow-lg rounded overflow-hidden"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {category.videos.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#video-carrusel-${getCategoryId(category.title)}`}
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner h-100">
        {category.videos.map((video, index) => (
          <div
            key={video.id}
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`}
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
        onClick={() => handlePrev(category.title)}
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
        onClick={() => handleNext(category.title)}
      >
        <span
          className="carousel-control-next-icon p-3 bg-dark bg-opacity-50 rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );

  return (
    <Fragment>
      <Header />
      <section id="intro" className="pb-0 intro container section-spacing">
        <div className="row">
          <div className="col-12 col-lg-12 intro-text-col">
            <div className="intro-text-box">
              <h1>Portfólio - Inara Angra</h1>
              <p className="sub-text">
                Jornalista | Repórter | Apresentadora | Produtora
              </p>
              <p className="description desc" style={{ color: "#969696" }}>
                Esses são alguns dos meus trabalhos como jornalista e produtora.
              </p>
              <a
                href="https://www.linkedin.com/in/inaraangra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="primary-btn">Linkedin</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <section
          key={category.title}
          id={getCategoryId(category.title)}
          className="intro container section-spacing"
        >
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h4 className="about-me-heading">{category.title}</h4>
              </div>
              <VideoCarousel category={category} />
            </div>
          </div>

          {["Prestação de Serviço", "Policial", "Esporte"].includes(
            category.title
          ) && (
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
