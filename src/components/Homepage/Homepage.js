import React, { Fragment, useEffect } from "react";
import Header from "../common/Header";
import Introduction from "./Introduction/Introduction";
import AboutMe from "./AboutMe/AboutMe";
import VideoCarousel from "./VideoCarousel/VideoCarousel";
import Footer from "../common/Footer";
// import Companies from "./Companies/Companies";
// import Projects from "./Projects/Projects";
// import MyBlogs from "./MyBlogs/MyBlogs";
// import ContactUs from "./ContactUs/ContactUs";
// import Testimonials from "./Testimonials/Testimonials";

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
      {/* <Companies /> */}
      {/* <Projects /> */}
      {/* <MyBlogs /> */}
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
      <Footer />
    </Fragment>
  );
};
export default Homepage;
