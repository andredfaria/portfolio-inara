// Homepage.js
import React, { Fragment, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMe from "./AboutMe";
import "./Home.scss";
import Introduction from "./Introduction";

const Homepage = () => {
  const videos = [
    { id: "0", url: "https://www.youtube.com/embed/XOiIUgW5-_o", title: "Reportagem 1" },
    { id: "1", url: "https://www.youtube.com/embed/FP4RJy8vsGI", title: "Reportagem 2" },
    { id: "2", url: "https://www.youtube.com/embed/U5jtO-JEELw", title: "Reportagem 3" },
    { id: "3", url: "https://www.youtube.com/embed/-GsURKTB3Ok", title: "Reportagem 4" },
    { id: "4", url: "https://www.youtube.com/embed/DEp5_WmpfvU", title: "Reportagem 5" },
  ];

  const handleNext = useCallback(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery("#video-carrusel-inara").carousel("next");
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (typeof window !== "undefined" && window.jQuery) {
      window.jQuery("#video-carrusel-inara").carousel("prev");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header />
      <Introduction />
      <AboutMe />

      {/* Video Highlights Section */}
      <section id="highlights" className="highlights-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary mb-4">
                Destaques
              </h4>
              <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="video-carousel-wrapper"
            >
              <div
                id="video-carrusel-inara"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators custom-indicators">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#video-carrusel-inara"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-current={index === 0 ? "true" : "false"}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner rounded-xl overflow-hidden border border-border-light shadow-glass">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="video-wrapper">
                        <iframe
                          src={video.url}
                          title={video.title || `Vídeo ${index + 1}`}
                          allowFullScreen
                          className="video-frame"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Controls */}
                <button
                  className="carousel-control carousel-control-prev"
                  type="button"
                  onClick={handlePrev}
                  aria-label="Anterior"
                >
                  <div className="control-button">
                    <IconChevronLeft className="w-6 h-6" />
                  </div>
                </button>
                <button
                  className="carousel-control carousel-control-next"
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo"
                >
                  <div className="control-button">
                    <IconChevronRight className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Homepage;
