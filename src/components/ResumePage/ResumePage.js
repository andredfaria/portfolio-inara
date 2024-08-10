import React, { Fragment, useEffect } from "react";
import art from "../../assets/images/art.png";
import contact from "../../assets/images/contact.png";
import calender from "../../assets/images/calender.png";
import download from "../../assets/images/download.png";
import inbox from "../../assets/images/inbox.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import location from "../../assets/images/location.png";
import ellipse from "../../assets/images/resume-ellipse.png";
import school from "../../assets/images/school.png";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_resume.scss";
import profile from "../../assets/images/inara-angra-apresentadora.jpeg";

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
                  <p>Jornalista & Repórter</p>
                  <ul className="resume-list">
                    <li>
                      <img src={inbox} alt="" />
                      inaraangra@hotmail.com
                    </li>
                    <li>
                      <img src={location} alt="" />
                      Poços de Caldas, Minas Gerais, Brasil
                    </li>
                    <li>
                      <img src={art} alt="" />
                      <a href="https://tvplan.com.br/">TV Plan</a>
                    </li>
                    <li>
                      <img src={inbox} alt="" />
                      <a href="https://wa.me/5535998084624/">
                        (35) 9 9808-4624
                      </a>
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
                  <h5 className="resume-heading">Formação</h5>

                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      <a href="https://www.unicesumar.edu.br/" target="_blank">
                        UNICESUMAR
                      </a>
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Comunicação Social com ênfase em Publicidade e Propaganda
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      Janeiro, 2023 - Até o momento
                    </div>
                  </div>

                  <div className="education-item row">
                    <p className="col-12 pl-0">
                      <a href="https://unifae.edu.br/" target="_blank">
                        UNIFAE
                      </a>
                    </p>
                    <div className="eduAndSchool col-6 pl-0">
                      <img src={school} alt="" />
                      Comunicação Social com ênfase em Jornalismo
                    </div>
                    <div className="eduAndSchool col-6">
                      <img src={calender} alt="" />
                      Janeiro, 2019 - Dezembro, 2022
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
                              href="https://www.linkedin.com/in/inaraangra/"
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
                  <h5 className="resume-heading">Resumo Profissional</h5>
                  <p className="summary-text">
                    23 anos, jornalista, formada pela UNIFAE - Centro
                    Universitário das Faculdades Associadas, em São João da Boa
                    Vista - SP. E buscando expandir horizontes com a segunda
                    graduação, em Publicidade e Propaganda (EAD). Possuo
                    experiência como repórter em diversas editorias do
                    jornalismo, e passagem rápida como copywriter, além de
                    acumular estágios em Produção de TV, Reportagens e
                    Assessoria de Comunicação. Me considero focada, curiosa e
                    adaptável. E sou apaixonada por turismo e cultura.
                  </p>
                </div>
                <div className="work-experience-section">
                  <h5 className="resume-heading">Experiências profissionais</h5>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://tvplan.com.br/">TV Plan</a>
                      </span>
                      <span className="remote">Poços de Caldas, MG</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Repórter, produtora, gestora de mídias
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Brasil
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Julho, 2023 - Até o momento
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://www.inb.gov.br/">
                          INB - Indústrias Nucleares do Brasil
                        </a>
                      </span>
                      <span className="remote">Presencial</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estágio em Publicidade e Propaganda
                        {/* Comuinicação interna, produção de comunicado e materias, organização de visistas e eventos */}
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
                      <span className="experience-text">
                        <a href="https://www.linkedin.com/company/elity-mdm">
                          Grupo MDM Network & Elity Digital
                        </a>
                      </span>
                      <span className="remote">Híbrido</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Copywriter
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Poços de Caldas, MG
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Janeiro, 2023 - Março, 2023
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://tvplan.com.br/">TV Plan</a>
                      </span>
                      <span className="remote">Poços de Caldas, MG</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estágio em Publicidade e Propaganda
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Brasil
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Janeiro, 2023
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://www.inb.gov.br/">
                          INB - Indústrias Nucleares do Brasil
                        </a>
                      </span>
                      <span className="remote">Presencial</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estágio em Jornalismo
                        {/* Comuinicação interna, produção de comunicado e materias, organização de visistas e eventos */}
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Caldas
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Novembro, 2021 - Dezembro, 2022
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://institucional.eptv.com.br/televisao/cobertura/suldeminas.aspx">
                          EPTV Sul de Minas
                        </a>
                      </span>
                      <span className="remote">Remoto</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estágio em Jornalismo
                        {/* Comuinicação interna, produção de comunicado e materias, organização de visistas e eventos */}
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Poços de Caldas, MG
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Janeiro, 2021 - Outubro, 2021
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="https://tvpocos.com.br/">TV Poços</a>
                      </span>
                      <span className="remote">Presencial</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estagio em Jornalismo e Reporter
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Poços de Caldas, MG
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Setembro, 2020 - Dezembro, 2020
                      </div>
                    </div>
                  </div>

                  <div className="experience">
                    <div className="experience-title">
                      <span className="experience-text">
                        <a href="http://dmaepc.mg.gov.br/">
                          DMAE - Departamento Municipal de Água e Esgoto de
                          Poços de Caldas
                        </a>
                      </span>
                      <span className="remote">Presencial</span>
                    </div>
                    <div className="experience-detail">
                      <div className="experience-detail-item">
                        <img src={school} alt="" />
                        Estagio em Jornalismo
                      </div>
                      <div className="experience-detail-item">
                        <img src={location} alt="" />
                        Poços de Caldas, MG
                      </div>
                      <div className="experience-detail-item">
                        <img src={calender} alt="" />
                        Fevereiro, 2020 - Dezembro, 2020
                      </div>
                    </div>
                  </div>

                  <center>"Só quem sonha consegue alcançar"</center>
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
