import React from "react";
import "./_aboutMe.scss";
import aboutImg from "../../../assets/images/about.svg";
import contact from "../../../assets/images/contact.png";
import { Link } from "react-router-dom";
import * as routes from "../../../routePaths";

const AboutMe = (props) => (
  <section id="aboutMe" className="aboutMe container-fluid section-spacing">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">About Me</h4>
          </div>
          <div className="about-text">
            <p className="description" style={{ color: "#969696" }}>
              Possuo experiência como copywriter na MDM Network, e também
              acumulo estágios, incluindo passagens como repórter na TV Poços,
              produção de pautas para TV na EPTV Sul de Minas (afiliada Rede
              Globo), além de atuação em Assessoria de Comunicação no
              Departamento Municipal de Água e Esgoto de Poços de Caldas (DMAE)
              e na Industrias Nucleares do Brasil - INB, em Caldas.. <br />{" "}
              <br />
            </p>
          </div>

          <div className="contact-me-wrapper">
            <a
              href="http://wa.me/5535998084624"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="primary-btn">Entre em contrato</button>
            </a>
            {/* <a
              href="https://www.notion.so/developerayo/Shodipo-Ayomide-Press-Kit-Presenter-Terms-dbc63437aa6e4bd1882dfb4de5223a10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-btn" style={{ marginLeft: "15px" }}>
                <img src={contact} alt="contact" />
                Press Kit
              </button>
            </a> */}
          </div>
        </div>
        <div className="col-12 col-lg-7 about-img-col">
          <img
            className="img-fluid"
            src={aboutImg}
            alt="about-me"
            style={{ width: "500px" }}
          />
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;