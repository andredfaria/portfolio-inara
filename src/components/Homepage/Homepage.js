import React, { Fragment, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMe from "./AboutMe/AboutMe";
import Introduction from "./Introduction/Introduction";
import VideoCarousel from "./VideoCarousel/VideoCarousel";

const Homepage = props => {
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
      <Introduction />
      <AboutMe />
      <VideoCarousel videos={videos} title={"Destaques"} />
      <Footer />
    </Fragment>
  );
};
export default Homepage;
