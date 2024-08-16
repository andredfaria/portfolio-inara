import React from "react";
import "./_footer.scss";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <ContactForm />
          </div>
          <div className="col-12 col-lg-6">
            <SocialIcons />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-text">
              Desenvolvido por André de Faria &copy; 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Envie um email</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/inaraangra@hotmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nome completo"
                required
              />
            </div>
            <div className="col">
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
        <div className="form-group">
          <textarea
            placeholder="Sua mensagem"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Enviar 📬
        </button>
      </form>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <div className="footer-social">
      <a
        href="https://www.instagram.com/seuperfil"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social-icon"
        aria-label="Instagram"
      >
        <img src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/seuperfil"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social-icon"
        aria-label="LinkedIn"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default Footer;
