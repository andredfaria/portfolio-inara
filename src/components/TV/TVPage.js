import React, { Fragment, useCallback, useEffect } from "react";
import dotsSquare from "../../assets/images/dots-square.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_TV.scss";
import InstagramPost from "./InstagramEmbed";

const TV = () => {
  const posts = [
      {
      id: "0",
      url: "DKAbF-KxEMg",
    },
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
    {
      id: "8",
      url: "DFiQ74JJlH5",
    },
  ];

  const videos = [
    {
      title: "Reportagens",
      videos: [
        { id: "0", url: "https://www.youtube.com/embed/XOiIUgW5-_o" },
        { id: "1", url: "https://www.youtube.com/embed/FP4RJy8vsGI" },  
        { id: "2", url: "https://www.youtube.com/embed/LBNR7DL4C8M" },
        { id: "3", url: "https://www.youtube.com/embed/t_AcyevhHD4" },
        { id: "4", url: "https://www.youtube.com/embed/vleqBdvoHzI" },
        { id: "5", url: "https://www.youtube.com/embed/V5nXqtE9lOY" },
        { id: "6", url: "https://www.youtube.com/embed/P_BhUbcYYno" },
      ],
    },
    {
      title: "TV e Radio",
      videos: [
        { id: "6", url: "https://www.youtube.com/embed/F2MriBvGAvo" },
        { id: "7", url: "https://www.youtube.com/embed/U5jtO-JEELw" },
        { id: "8", url: "https://www.youtube.com/embed/pacSJMHakMo" },
      ],
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
          className="intro container section-spacing position-relative"
        >
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section-heading text-center">
                <h4 className="about-me-heading">{category.title}</h4>
              </div>
              <VideoCarousel category={category} />
            </div>
          </div>
          {["Reportagens", "TV e Radio"].includes(category.title) && (
            <img
              className="square-dots dots-img d-none d-lg-block"
              src={dotsSquare}
              alt="dots-sq"
              style={{ position: 'absolute', right: 0, bottom: '10%' }}
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
