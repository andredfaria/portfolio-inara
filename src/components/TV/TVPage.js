import React, { Fragment, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconPlayerPlay, IconBrandInstagram } from "@tabler/icons-react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./_TV.scss";

const TV = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const reportagens = [
    { id: "0", url: "https://www.youtube.com/embed/XOiIUgW5-_o", title: "Reportagem Destaque", featured: true },
    { id: "1", url: "https://www.youtube.com/embed/FP4RJy8vsGI", title: "Reportagem 2" },
    { id: "2", url: "https://www.youtube.com/embed/LBNR7DL4C8M", title: "Reportagem 3" },
    { id: "3", url: "https://www.youtube.com/embed/t_AcyevhHD4", title: "Reportagem 4" },
    { id: "4", url: "https://www.youtube.com/embed/vleqBdvoHzI", title: "Reportagem 5" },
    { id: "5", url: "https://www.youtube.com/embed/V5nXqtE9lOY", title: "Reportagem 6" },
    { id: "6", url: "https://www.youtube.com/embed/P_BhUbcYYno", title: "Reportagem 7" },
  ];

  const tvRadio = [
    { id: "7", url: "https://www.youtube.com/embed/F2MriBvGAvo", title: "TV e Rádio 1" },
    { id: "8", url: "https://www.youtube.com/embed/U5jtO-JEELw", title: "TV e Rádio 2" },
    { id: "9", url: "https://www.youtube.com/embed/pacSJMHakMo", title: "TV e Rádio 3" },
  ];

  const instagramPosts = [
    { id: "1", url: "DKAbF-KxEMg" },
    { id: "2", url: "DGqOCg2utBS" },
    { id: "3", url: "C_qJl8CJpuQ" },
    { id: "4", url: "C_8sXEvpvtl" },
    { id: "5", url: "DAMlUDtpTTe" },
    { id: "6", url: "DAeA5n0pDDk" },
    { id: "7", url: "DAvraUWpo5d" },
    { id: "8", url: "DBB-0VFpJRp" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const VideoCard = ({ video, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className={`video-card ${featured ? "video-card-featured" : ""}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="video-card-inner">
          <iframe
            src={video.url}
            title={video.title}
            allowFullScreen
            className="video-iframe"
            loading="lazy"
          ></iframe>
          <motion.div
            className="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconPlayerPlay className="w-16 h-16 text-white" />
            {video.title && (
              <h4 className="video-title">{video.title}</h4>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const InstagramCard = ({ post }) => {
    return (
      <motion.a
        href={`https://www.instagram.com/p/${post.url}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-card group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
      >
        <div className="instagram-card-inner">
          <div className="instagram-embed-preview">
            <iframe
              src={`https://www.instagram.com/p/${post.url}/embed`}
              className="instagram-iframe"
              loading="lazy"
              title={`Instagram post ${post.id}`}
            ></iframe>
          </div>
          <div className="instagram-overlay">
            <IconBrandInstagram className="w-8 h-8" />
          </div>
        </div>
      </motion.a>
    );
  };

  return (
    <Fragment>
      <Header />

      {/* Reportagens Section - Bento Grid */}
      <section className="portfolio-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-4">
              Reportagens
            </h4>
            <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto"></div>
          </motion.div>

          {/* Bento Grid */}
          <div className="bento-grid">
            {reportagens.map((video) => (
              <VideoCard key={video.id} video={video} featured={video.featured} />
            ))}
          </div>
        </div>
      </section>

      {/* TV e Rádio Section */}
      <section className="portfolio-section bg-gradient-to-b from-background-light to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-4">
              TV e Rádio
            </h4>
            <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto"></div>
          </motion.div>

          <div className="video-grid">
            {tvRadio.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Posts Section */}
      <section className="portfolio-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-serif text-4xl md:text-5xl font-semibold text-text-primary mb-4">
              Posts do Instagram
            </h4>
            <div className="h-0.5 w-20 bg-accent-purple-500 mx-auto"></div>
          </motion.div>

          <div className="instagram-grid">
            {instagramPosts.map((post) => (
              <InstagramCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default TV;
