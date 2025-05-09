import React, { useState, useEffect } from "react";
import dotsSquare from "../../../assets/images/dots-square.png";
import dots from "../../../assets/images/dots.png";
import globe from "../../../assets/images/globe-i.png";
import inara from "../../../assets/images/inara.jpg";
import line from "../../../assets/images/introlines.png";
import tablet from "../../../assets/images/tablet.png";
import zigzag from "../../../assets/images/zigzag.png";
// import linkedin from "../../../assets/images/linkedin.png";
// import instagram from "../../../assets/images/instagram.png";
import aovivo from "../../../assets/images/aovivo.png";
import "./_introduction.scss";

const Introduction = (props) => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 - Domingo, 1 - Segunda-feira, ..., 6 - Sábado
      const hour = now.getHours();

      // Verifica se é entre 9h e 11h de segunda a sexta
      if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 11) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    };

    checkTime(); // Checa logo ao carregar

    const interval = setInterval(checkTime, 60000); // Verifica a cada minuto

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const handleAovivoClick = () => {
    if (!isLive) {
      alert(
        "O 'Ouvir ao vivo Manhã Show' está disponível apenas das 9h às 11h de segunda a sexta."
      );
    }
  };

  return (
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
              Repórter | Apresentadora | Produtora | Radialista
            </p>
            <p className="description desc" style={{ color: "#969696" }}>
            Jornalista, 24 anos, e estudante de Publicidade e Propaganda. Graduada em Jornalismo pela UNIFAE, em São João da Boa Vista (SP).
Há dois anos, atuo como repórter na TV Plan, afiliada da TV Brasil, em Poços de Caldas (MG), onde também assino reportagens especiais e entradas ao vivo, e, ocasionalmente, assumo a função de diretora de jornalismo interina. Paralelamente, desenvolvo meu trabalho no rádio como apresentadora dos programas “Manhã Show”, das 9h às 11h, e “Happy Hour”, das 16h30 às 18h, ambos na Band FM Poços de Caldas.
Sou curiosa, comprometida e com facilidade para me adaptar a diferentes formatos e linguagens da comunicação.
            </p>
            {/* <a
              href="https://www.linkedin.com/in/inaraangra/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              <button className="primary-btn">
                <img
                  src={linkedin}
                  alt="Ícone do LinkedIn"
                  className="linkedin-icon"
                />
                Linkedin
              </button>
            </a>
            <a
              href="https://www.instagram.com/inaraangra/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn pt-2"
            >
              <button className="primary-btn">
                <img
                  src={instagram}
                  alt="Ícone do instagram"
                  className="instagram-icon"
                />
                Instagram
              </button>
            </a> */}
            {
              false && isLive && (
            <a
              href="https://www.bandfmpocos.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="ao-vivo-btn pt-2"
            >
              <button
                className="primary-btn"
                disabled={!isLive}
                onClick={handleAovivoClick}
                title={
                  !isLive
                    ? "Disponível apenas das 9h às 11h de segunda a sexta."
                    : ""
                }
              >
                <img
                  src={aovivo}
                  alt="Ícone do aovivo"
                  className="aovivo-icon"
                />
                Ouvir ao vivo Manhã Show
              </button>
            </a>)}
          </div>
          <img
            src={zigzag}
            className="zigzag d-none d-lg-block"
            alt="zig-zag"
          />
        </div>
      </div>
      <img
        className="square-dots dots-img d-none d-lg-block"
        src={dotsSquare}
        alt="dots-sq"
      />
    </section>
  );
};

export default Introduction;
