import React from "react";
import "./_aboutMe.scss";

const skills = [
  { name: "Pesquisa  ", level: 80 },
  { name: "Escrita", level: 90 },
  { name: "Entrevista", level: 98 },
  { name: "Edição ", level: 70 },
];

const AboutMe = (props) => (
  <section id="aboutMe" className="aboutMe container-fluid section-spacing">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">Sobre mim</h4>
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
        </div>
        <div className="col-12 col-lg-6 px-4 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">Competências</h4>
          </div>
          <div className="skills-rating">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;