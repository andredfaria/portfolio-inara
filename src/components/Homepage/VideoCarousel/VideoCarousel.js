import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoCarousel.css"; // Adicione um arquivo CSS para estilos personalizados

const VideoCarousel = () => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: "2", url: "https://www.youtube.com/embed/9bZkp7q19f0" },
    { id: "3", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ];

  return (
    <div className="video-carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={600}
        dynamicHeight={true}
        className="video-carousel"
      >
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            <iframe
              className="video-iframe"
              src={video.url}
              title={`YouTube video player ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
