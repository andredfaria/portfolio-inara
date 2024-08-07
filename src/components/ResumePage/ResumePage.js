import React, { Fragment, useEffect } from "react";
import art from "../../assets/images/art.png";
import calender from "../../assets/images/calender.png";
import download from "../../assets/images/download.png";
import inbox from "../../assets/images/inbox.png";
import instagram from "../../assets/images/instagram.png";
import x from "../../assets/images/x.png";
import linkedin from "../../assets/images/linkedin.png";
import location from "../../assets/images/location.png";
import ellipse from "../../assets/images/resume-ellipse.png";
import school from "../../assets/images/school.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_resume.scss";
import profile from "./inara.jpg";

const ResumePage = props => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="container resume">
        <div className="middle">
          <div className="resume-main">
            <div className="row">
              <div className="col-12 col-lg-5 resume-col">
                <div className="user-personal-info">
                  <div className="profile-image-div">
                    <img className="img-fluid" src={profile} alt="" />
                  </div>
                  <br />
                  <br />
                  <h5 className="resume-heading profile-name">Inara Angra</h5>
                  <p>Jornalista & Reporter</p>
                  <ul className="resume-list">
                    <li>
                      <img src={inbox} alt="" />
                      inaraangra@hotmail.com
                    </li>
                    <li>
                      <img src={location} alt="" />
                      Poços de Caldas, Minas Gerais
                    </li>
                    <li>
                      <img src={art} alt="" />
                      TV Plan
                    </li>
                    <li>
                      <button className="download">
                        <img
                          style={{ Color: "white" }}
                          src={download}
                          alt="download"
                        />
                        <a
                          href="https://inaraangra.vercel.app/inara.pdf"
                          style={{ textdecoration: "none", color: "white" }}
                        >
                          Download CV
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="education d-none d-lg-block">
                  <h5 className="resume-heading">Edução</h5>
                  <div className="education-item row">
                    <p className="col-12 pl-0">UNIFAE</p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Jornalista
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      Janeiro, 2023
                    </div>
                  </div>
                </div>
                <div className="social d-none d-lg-block">
                  <h5 className="resume-heading">Social</h5>
                  <ul className="resume-list social-links">
                    <li style={{ marginTop: "20px" }}>
                      <li>
                        <a href="#home" onClick={(ev) => ev.preventDefault()}>
                          {" "}
                          <img src={linkedin} alt="icon-linkedin" />{" "}
                          <span>
                            <a
                              href="https://www.linkedin.com/in/inara-a-049567157/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              Inara Angra
                            </a>
                          </span>
                        </a>
                      </li>{" "}
                      <li>
                        <a href="#home" onClick={(ev) => ev.preventDefault()}>
                          {" "}
                          <img src={instagram} alt="icon-instagram" />{" "}
                          <span>
                            <a
                              href="https://www.instagram.com/inaraangra/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              @inaraangra
                            </a>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#home" onClick={(ev) => ev.preventDefault()}>
                          {" "}
                          <img src={x} alt="icon-instagram" />{" "}
                          <span>
                            <a
                              href="https://www.x.com/inaraangra/"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              @inaraangra
                            </a>
                          </span>
                        </a>
                      </li>
                    </li>
                  </ul>
                </div>
                <img
                  className="left-bottom-img d-none d-lg-block"
                  src={ellipse}
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-7 resume-col">
                <div className="summary">
                  <h5 className="resume-heading">Professional Summary</h5>
                  <p className="summary-text">
                    Possuo experiência como copywriter na MDM Network, e também
                    acumulo estágios, incluindo passagens como repórter na TV
                    Poços, produção de pautas para TV na EPTV Sul de Minas
                    (afiliada Rede Globo), além de atuação em Assessoria de
                    Comunicação no Departamento Municipal de Água e Esgoto de
                    Poços de Caldas (DMAE) e na Industrias Nucleares do Brasil -
                    INB, em Caldas. Me considero focada e curiosa, sou
                    apaixonada pelo jornalismo e a arte de conhecer culturas e
                    contar histórias.
                  </p>
                </div>
                <div className="work-experience-section">
                  <h5 className="resume-heading">Experiencias proficionais</h5>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">TV plan</span>
                      <span className="remote">Poços de Caldas</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Jornaista e Reporter
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Brasil
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2023 - Até o momento
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">TV Poços</span>
                      <span className="remote">Poços de Caldas</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Jornaista e Reporter
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Estagiaria
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2022 - 2023
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">INB</span>
                      <span className="remote">Poços de Caldas</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Assessoria de Comunicação
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Brasil
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2022 - 2023
                      </div>
                    </div>
                  </div>
                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">MDM</span>
                      <span className="remote">Remoto</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Assessoria de Comunicação
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Brasil
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        2021 - 2022
                      </div>
                    </div>
                  </div>

                  <center>"Uma frase que você goste muito bem culta"</center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ResumePage;
