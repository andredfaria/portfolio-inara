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
      url: "C9Nk5iSJbUs",
    },
    {
      id: "2",
      url: "DBuYADnM3Ql",
    },
    {
      id: "3",
      url: "C_ECyLhuyy9",
    },
    {
      id: "4",
      url: "C__01CxJvRG",
    },
    {
      id: "5",
      url: "C9tLgqspI0i",
    },
    {
      id: "6",
      url: "C7jfgtXuF3Q",
    },
    {
      id: "7",
      url: "C6PsLzDtqXJ",
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
      <p className="section-description text-center">
        Confira alguns dos meus posts mais impactantes no Instagram! Aqui,
        compartilho momentos e reflexões sobre meu trabalho, destacando as
        experiências que moldam minha trajetória profissional. Alguns desses
        posts foram publicados no Instagram da TV, onde tive a oportunidade de
        alcançar um público ainda maior. Espero que você se inspire com essas
        histórias!
      </p>
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
      <section id="intro" className="intro container section-spacing">
        <div className="intro-text-box text-center">
          <h1>Portfólio Visual - Inara Angra</h1>
          <p className="description desc" style={{ color: "#969696" }}>
            Bem-vindo ao meu portfólio! Neste espaço, você encontrará uma
            curadoria dos meus trabalhos como jornalista e produtora. Explore
            uma variedade de projetos, incluindo vídeos impactantes e posts
            criativos do Instagram, que refletem minha paixão pela comunicação e
            pela narrativa visual. Espero que você aproveite a visita!
          </p>
          <a
            href="https://www.linkedin.com/in/inaraangra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn">Linkedin</button>
          </a>
        </div>
      </section>

      <InstagramPosts />

      <section className="video-section container section-spacing">
        <h2 className="section-title text-center">
          Acervo de Vídeos e materias
        </h2>
        <p className="section-description text-center">
          Claro! Aqui está uma versão melhorada e mais elaborada do seu texto:
          Aqui está uma seleção de vídeos que representam meu trabalho em
          diversas áreas, abrangendo desde a prestação de serviços até cultura e
          entretenimento. Os vídeos estão organizados nas seguintes categorias:
          Matérias, Prestação de Serviço Matérias, Cultura e Entretenimento
          Matérias, Policial Matérias, Esporte Esses conteúdos foram gentilmente
          cedidos pela TV Plan, a emissora local onde trabalho atualmente.
        </p>
      </section>

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
      <Footer />
    </Fragment>
  );
};

export default TV;
