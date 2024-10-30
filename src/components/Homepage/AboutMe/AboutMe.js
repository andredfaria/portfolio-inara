import React from "react";
import "./_aboutMe.scss";

const AboutMe = (props) => (
  <section id="aboutMe" className="mt-3 aboutMe container-fluid section-spacing">
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
      </div>
    </div>
  </section>
);
export default AboutMe;