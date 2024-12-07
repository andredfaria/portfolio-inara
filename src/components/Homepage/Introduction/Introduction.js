import React from "react";
import dotsSquare from "../../../assets/images/dots-square.png";
import dots from "../../../assets/images/dots.png";
import globe from "../../../assets/images/globe-i.png";
import inara from "../../../assets/images/inara.jpg";
import line from "../../../assets/images/introlines.png";
import tablet from "../../../assets/images/tablet.png";
import zigzag from "../../../assets/images/zigzag.png";
import linkedin from "../../../assets/images/linkedin.png";
import "./_introduction.scss";

const Introduction = (props) => (
  <section id="intro" className="intro container section-spacing">
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="dots">
          <img className="img-fluid dots-img" src={dots} alt="freelancer" />
        </div>
        <div className="freelancer-img-div">
          <img
            className="img-fluid"
            style={{ borderStyle: "dashed", borderColor: "#B2ACAB" }}
            src={inara}
            alt="inara"
            loading="lazy"
          />
          <img
            className="brackets d-none d-lg-block"
            src={tablet}
            alt="tablet"
          />
          <img className="file d-none d-lg-block" src={globe} alt="file" />
        </div>
        <div>
          <img className="dashed-box" src={line} alt="line" />
        </div>
      </div>
      <div className="col-12 col-lg-6 intro-text-col">
        <div className="intro-text-box">
          <h1>Inara Angra</h1>
          <p className="sub-text">
            Jornalista | Repórter | Apresentadora | Produtora
          </p>
          <p className="description desc" style={{ color: "#969696" }}>
            23 anos, jornalista, formada pela UNIFAE - Centro Universitário das
            Faculdades Associadas, em São João da Boa Vista - SP. E buscando
            expandir horizontes com a segunda graduação, em Publicidade e
            Propaganda (EAD). Possuo experiência como repórter em diversas
            editorias do jornalismo, e passagem rápida como copywriter, além de
            acumular estágios em Produção de TV, Reportagens e Assessoria de
            Comunicação. Me considero focada, curiosa e adaptável. E sou
            apaixonada por turismo e cultura.
          </p>
          <a
            href="https://www.linkedin.com/in/inaraangra/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-btn"
          >
            <button className="primary-btn">
              <img src={linkedin} alt="Ícone do LinkedIn" className="linkedin-icon" />
              Linkedin
            </button>
          </a>
        </div>
        <img src={zigzag} className="zigzag d-none d-lg-block" alt="zig-zag" />
      </div>
    </div>
    <img
      className="square-dots dots-img d-none d-lg-block"
      src={dotsSquare}
      alt="dots-sq"
    />
  </section>
);
export default Introduction;
