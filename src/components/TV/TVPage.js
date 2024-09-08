import React, { Fragment, useEffect } from "react";
import dotsSquare from "../../assets/images/dots-square.png";
import zigzag from "../../assets/images/zigzag.png";

import Header from "../common/Header";
import VideoCarousel from "../Homepage/VideoCarousel/VideoCarousel";
import Footer from "../common/Footer";

const TV = (props) => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "2", url: "https://www.youtube.com/embed/9bZkp7q19f0" },
    { id: "3", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ];

  const prestacao_servico = [
    { id: "1", url: "https://www.youtube.com/embed/RCLVevPL8hE" },
    { id: "2", url: "https://www.youtube.com/embed/3chW8DoALhM" },
    { id: "3", url: "https://www.youtube.com/embed/y_VjWy7ZFLw" },
    { id: "4", url: "https://www.youtube.com/embed/6LQxd8BbzIU" },
  ];

  const cultura_e_entreterimento = [
    { id: "5", url: "https://www.youtube.com/embed/sSrVd0qm2zU" },
    { id: "6", url: "https://www.youtube.com/embed/Imaw6VNfG1c" },
    { id: "7", url: "https://www.youtube.com/embed/DDbHcsE52jQ" },
    { id: "8", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
  ];

  const policial = [
    { id: "13", url: "https://www.youtube.com/embed/bSb5WzBSwTU" },
    { id: "14", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
  ];

  const esporte = [
    { id: "19", url: "https://www.youtube.com/embed/gWSd68qov7w" },
    { id: "20", url: "https://www.youtube.com/embed/KrIQRWXRotM" },
    { id: "21", url: "https://www.youtube.com/embed/V5npXQRuOak" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <div style={{ color: "#000" }} className="row intro-text-box">
        <div className="col-12">
          {/* <h1>Portfólio de TV</h1> */}
        </div>
      </div>
      <img
        className="square-dots dots-img d-none d-lg-block"
        src={dotsSquare}
        alt="dots-sq"
      />

      {/* Prestação de Serviço */}
      <section className=" aboutMe container-fluid section-spacing">
        <div className="container">
          <div className="section-heading">
            <h4>Prestação de Serviço</h4>
          </div>
          <VideoCarousel width="60%" height="80%" videos={prestacao_servico} />
        </div>
      </section>

      {/* Cultura e Entretenimento */}
      <section className="container-fluid section-spacing">
        <div className="container">
          <div className="section-heading">
            <h4>Cultura e Entretenimento</h4>
          </div>
          <VideoCarousel
            width="60%"
            height="80%"
            videos={cultura_e_entreterimento}
          />
        </div>
      </section>

      {/* Policial */}
      <section className="aboutMe container-fluid section-spacing">
        <div className="container">
          <div className="section-heading">
            <h4>Policial</h4>
          </div>
          <VideoCarousel width="60%" height="80%" videos={policial} />
        </div>
      </section>

      {/* Esporte */}
      <section className="container-fluid section-spacing">
        <div className="container">
          <div className="section-heading">
            <h4>Esporte</h4>
          </div>
          <VideoCarousel width="60%" height="80%" videos={esporte} />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default TV;
