import React, { Fragment, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import AboutMe from "./AboutMe/AboutMe";
import Introduction from "./Introduction/Introduction";
import VideoCarousel from "./VideoCarousel/VideoCarousel";

const Homepage = props => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
    { id: "2", url: "https://www.youtube.com/embed/V5npXQRuOak" },
    { id: "3", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
    { id: "3", url: "https://www.youtube.com/embed/StQBIoAfAzw" },
  ];

  https: useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Header />
      <Introduction />
      <VideoCarousel videos={videos}  width="100%" height="100%" title={"Destaques"} />
      <AboutMe />
      <Footer />
    </Fragment>
  );
};
export default Homepage;
