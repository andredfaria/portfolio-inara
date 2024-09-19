import React from "react";
import "./_footer.scss";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import whatsapp from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <ContactForm />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 p-2 text-muted">
              Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/andre-de-faria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fw-bold"
              >
                André de Faria
              </a>{" "}
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactForm = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h3 text-center">Entre em contato</h2>
        <SocialIcons />
        <form
          className="mt-4"
          target="_blank"
          action="https://formsubmit.co/inaraangra@hotmail.com"
          method="POST"
        >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Nome completo"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Seu e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Sua mensagem"
              className="form-control form-control-lg"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100">
            Enviar um email 📬
          </button>
        </form>
      </div>
    </div>
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
