import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import "./_aboutMe.scss";

const AboutMe = () => {
  const buttonVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="aboutMe" className="about-me-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-4">
              Confira meu trabalho
            </h4>
            <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto"></div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/televisao"
              className="cta-button group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <span>Portfólio TV e Rádio</span>
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="/curriculo"
              className="cta-button cta-button-secondary group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <span>Currículo</span>
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;