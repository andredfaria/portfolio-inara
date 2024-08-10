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
        <div className="col-12 col-lg-12 about-text-col">
          <div className="section-heading">
            <h4 className="about-me-heading">Experiência Profissional</h4>
          </div>
          <div className="about-text">
            <p className="description" style={{ color: "#969696" }}>
              Desde o início da faculdade, busquei o máximo de experiências
              dentro do jornalismo, o que me permitiu estagiar em diferentes
              áreas, como assessoria de comunicação e televisão. Ao me formar em
              Jornalismo, decidi ampliar meus conhecimentos cursando Publicidade
              e Propaganda, onde aproveitei os contatos adquiridos para estagiar
              em redes sociais e assessoria de comunicação, dessa vez com foco
              na publicidade.
              <br></br>
              <br></br>
              Com o passar do tempo, fui convidada a integrar a equipe da TV
              Plan como repórter, posição que ocupo até hoje. Durante meu
              primeiro ano na empresa, tive a oportunidade de atuar em diversas
              funções, como produtora e apresentadora do quadro Agenda Cultural,
              além de assumir temporariamente o papel de diretora de jornalismo,
              liderando o fechamento do jornal. <br /> <br />
            </p>
          </div>
        </div>
        {/* <div className="col-12 col-lg-6 px-4 about-text-col">
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
        </div> */}
      </div>
    </div>
  </section>
);
export default AboutMe;