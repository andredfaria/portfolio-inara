import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./VideoCarousel.scss";

const VideoCarousel = ({ videos, title }) => {
  return (
    <div className="video-carousel-container container-fluid">
      <div className="row">
        <div className="col-lg-10">
          <div className="position-relative">
            <h2 className="carousel-title display-4 text-center">{title}</h2>
          </div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            transitionTime={600}
            dynamicHeight={true}
            className="video-carousel shadow-lg rounded"
          >
            {videos.map((video) => (
              <div key={video.id} className="video-wrapper">
                <div className="aspect-ratio-container">
                  <iframe
                    src={video.url}
                    title={`YouTube video player ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
