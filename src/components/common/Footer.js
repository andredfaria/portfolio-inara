import React from "react";
import { motion } from "framer-motion";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container mx-auto px-4 py-16">
        {/* Contact Section */}
        <motion.div
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary text-center mb-4">
            Entre em contato
          </h4>
          <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto mb-12"></div>

          {/* Social Icons */}
          <div className="social-icons-row">
            <a
              href="https://www.instagram.com/inaraangra/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/inaraangra/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/5535998084624/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="WhatsApp"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              target="_blank"
              action="https://formsubmit.co/inaraangra@hotmail.com"
              method="POST"
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Nome completo"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              <textarea
                placeholder="Sua mensagem"
                className="form-textarea"
                name="message"
                rows="5"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="submit-button group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconMail className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>Enviar mensagem</span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Inara Angra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
