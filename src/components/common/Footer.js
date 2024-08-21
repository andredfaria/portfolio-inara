import React from "react";
import "./_footer.scss";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <selection className="mt-3 aboutMe container-fluid section-spacing container mt-3 pt-4 pb-4 border-top">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <ContactForm />
          </div>
        </div>
      </div>
      <footer className="mt-3 pt-4 pb-4 border-top">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              Desenvolvido por
              <a
                href="https://www.linkedin.com/in/andre-de-faria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                André de Faria &copy;
              </a>{" "}
              2024
            </p>
          </div>
        </div>
      </footer>
    </selection>
  );
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="h4 m-1">Entre em contato:</h1>
      <SocialIcons />
      <form
        className="mt-2"
        target="_blank"
        action="https://formsubmit.co/inaraangra@hotmail.com"
        method="POST"
      >
        <div className="mb-3">
          <div className="row">
            <div className="col-md-6 m-1">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nome completo"
                required
              />
            </div>
            <div className="col-md-6 m-1">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Seu e-mail"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Sua mensagem"
            className="form-control"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Enviar um email 📬
        </button>
      </form>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="row">
      <div className="m-2">
        <a
          href="https://www.instagram.com/inaraangra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="me-3"
        >
          <img src={instagram} alt="Instagram" className="img-fluid" style={{ width: '3em', height: '3em' }} />
        </a>
        </div>
        <div className="m-2">
        <a
          href="https://www.linkedin.com/in/inaraangra/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="me-3"
        >
          <img src={linkedin} alt="LinkedIn" className="img-fluid" style={{ width: '3em', height: '3em' }} />
        </a>
      </div>
       <div className="m-2">
        <a
          href="https://wa.me/553598084624/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="me-3"
        >
          <img src={whatsapp} alt="LinkedIn" className="img-fluid" style={{ width: '3em', height: '3em' }} />
        </a>
      </div>
    </div>

  );
};

export default Footer;
