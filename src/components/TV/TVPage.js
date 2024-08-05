import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import VideoCarousel from "../Homepage/VideoCarousel/VideoCarousel";
import Footer from "../common/Footer";

const TV = (props) => {
    const videos = [
      { id: "1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: "2", url: "https://www.youtube.com/embed/9bZkp7q19f0" },
      { id: "3", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <VideoCarousel videos={videos} title={"Destaques"} />
      <VideoCarousel videos={videos} title={"Destaques"} />
      <VideoCarousel videos={videos} title={"Destaques"} />
      <Footer />
    </Fragment>
  );
};
export default TV;
