import React from "react";
import dotsSquare from "../../../assets/images/dots-square.png";
import dots from "../../../assets/images/dots.png";
import globe from "../../../assets/images/globe-i.png";
import inara from "../../../assets/images/inara.jpg";
import line from "../../../assets/images/introlines.png";
import tablet from "../../../assets/images/tablet.png";
import zigzag from "../../../assets/images/zigzag.png";
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
            23 anos, com graduação em Comunicação Social com ênfase em
            Jornalismo, formada pelo Centro Universitário das Faculdades
            Associadas de Ensino - UNIFAE, em São João da Boa Vista/SP. Buscando
            expandir horizontes na segunda graduação em Publicidade e Propaganda
            pela UNICESUMAR. Atualmente, ocupo a posição de repórter do Plantão
            47, principal jornal da emissora, e apresentadora da Agenda
            Cultural, na TV Plan, em Poços de Caldas/MG.
          </p>
          <a
            href="https://www.linkedin.com/in/inara-a-049567157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className="primary-btn">Linkedin</button>
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
