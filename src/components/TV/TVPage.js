import React, { Fragment, useCallback, useEffect } from "react";
import dotsSquare from "../../assets/images/dots-square.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_TV.scss";
import InstagramPost from "./InstagramEmbed";

const TV = () => {
  const posts = [
    {
      id: "1",
      url: "C_qJl8CJpuQ",
    },
    {
      id: "2",
      url: "C_8sXEvpvtl",
    },
    {
      id: "3",
      url: "DAMlUDtpTTe",
    },
    {
      id: "4",
      url: "DAeA5n0pDDk",
    },
    {
      id: "5",
      url: "DAvraUWpo5d",
    },
    {
      id: "6",
      url: "DBB-0VFpJRp",
    },
    {
      id: "7",
      url: "DBmo0A-J2GB",
    },
  ];

  const videos = [
    {
      title: "Materias - Prestação de Serviço",
      videos: [
        { id: "1", url: "https://www.youtube.com/embed/RCLVevPL8hE" },
        { id: "2", url: "https://www.youtube.com/embed/3chW8DoALhM" },
        { id: "3", url: "https://www.youtube.com/embed/y_VjWy7ZFLw" },
        { id: "4", url: "https://www.youtube.com/embed/6LQxd8BbzIU" },
        { id: "5", url: "https://www.youtube.com/embed/kzNyto33AoA" },
      ],
    },
    {
      title: "Materias - Cultura e Entretenimento",
      videos: [
        { id: "5", url: "https://www.youtube.com/embed/sSrVd0qm2zU" },
        { id: "6", url: "https://www.youtube.com/embed/Imaw6VNfG1c" },
        { id: "7", url: "https://www.youtube.com/embed/DDbHcsE52jQ" },
        { id: "8", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
      ],
    },
    {
      title: "Materias - Policial",
      videos: [
        { id: "13", url: "https://www.youtube.com/embed/bSb5WzBSwTU" },
        { id: "14", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
      ],
    },
    {
      title: "Materias - Esporte",
      videos: [
        { id: "19", url: "https://www.youtube.com/embed/gWSd68qov7w" },
        { id: "20", url: "https://www.youtube.com/embed/KrIQRWXRotM" },
        { id: "21", url: "https://www.youtube.com/embed/V5npXQRuOak" },
      ],
    },
    {
      title: "Ao vivo",
      videos: [{ id: "1", url: "https://www.youtube.com/embed/U5jtO-JEELw" }],
    },
  ];

  const getCategoryId = (title) => title?.toLowerCase().replace(/\s+/g, "-");

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

  const InstagramPosts = () => (
    <section className="instagram-posts container section-spacing">
      <div className="section-heading">
        <h4 className="about-me-heading">Posts do Instagram</h4>
      </div>
      <div className="row g-4 justify-content-center">
        {posts.map((post) => (
          <InstagramPost post={post} key={post.id} />
        ))}
      </div>
    </section>
  );

  const VideoCarousel = ({ category }) => (
    <div
      id={`video-carrusel-${getCategoryId(category.title)}`}
      className="carousel slide video-carousel shadow-lg rounded overflow-hidden"
      data-bs-ride="carousel"
    >
      <h3 className="video-category-title">{category.title}</h3>
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
          className="carousel-control-prev-icon p-3 bg-dark bg-opacity-50"
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
          className="carousel-control-next-icon p-3 bg-dark bg-opacity-50"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );

  return (
    <Fragment>
      <Header />
      {videos.map((category) => (
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
      <InstagramPosts />
      <Footer />
    </Fragment>
  );
};

export default TV;
