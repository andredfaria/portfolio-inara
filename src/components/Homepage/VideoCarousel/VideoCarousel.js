import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoCarousel.scss";

const VideoCarousel = ({ videos, title, width = "80%", height = "80%" }) => {
  return (
    <div className="video-carousel-container" style={{ width }}>
      <h2 className="carousel-title">{title}</h2>
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
              style={{ height }}
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
