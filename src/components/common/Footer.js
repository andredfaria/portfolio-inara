import React from "react";
import "./_footer.scss";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <>
      <section
        id="intro"
        className="intro container-fluid section-spacing"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 about-text-col">
              <div className="section-heading">
                <h4 className="about-me-heading">Entre em contato</h4>
              </div>
              <div className="about-text">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ContactForm = () => {
  return (
    <section id="intro" className=" container-fluid">
      <div className="aboutMe">
        <div className="card-body">
          <SocialIcons />
          <form
            className=" aboutMe mt-4"
            target="_blank"
            action="https://formsubmit.co/inaraangra@hotmail.com"
            method="POST"
          >
            <div className=" aboutMe mb-3">
              <input
                type="text"
                name="name"
                className=" aboutMe form-control form-control-lg"
                placeholder="Nome completo"
                required
              />
            </div>
            <div className=" aboutMe mb-3">
              <input
                type="email"
                name="email"
                className=" aboutMe form-control form-control-lg"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className=" aboutMe mb-4">
              <textarea
                placeholder="Sua mensagem"
                className=" aboutMe form-control form-control-lg"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="primary-btn btn btn-primary btn-lg w-100"
            >
              Enviar um email 📬
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const SocialIcons = () => {
  return (
    <div className="d-flex justify-content-center">
      <a
        href="https://www.instagram.com/inaraangra/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="m-1"
      >
        <img
          src={instagram}
          alt="Instagram"
          className="social-icon"
          width="32"
          height="32"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/inaraangra/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="m-1"
      >
        <img
          src={linkedin}
          alt="LinkedIn"
          className="social-icon"
          width="32"
          height="32"
        />
      </a>
      <a
        href="https://wa.me/553598084624/"
        target="_blank"
        rel="noopener noreferrer"
        className="m-1"
        aria-label="WhatsApp"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="social-icon"
          width="32"
          height="32"
        />
      </a>
    </div>
  );
};

export default Footer;
