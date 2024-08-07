import React, { Fragment, useEffect } from "react";
import dotsSquare from "../../assets/images/dots-square.png";
import dots from "../../assets/images/dots.png";
import line from "../../assets/images/introlines.png";
import zigzag from "../../assets/images/zigzag.png";


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
      <div style={{ color: "#000" }} className="row intro-text-box">
        <div className="col-12">
          <h1> Portifolio de TV</h1>
        </div>
      </div>
      <img
        className="square-dots dots-img d-none d-lg-block"
        src={dotsSquare}
        alt="dots-sq"
      />
      <section
        id="aboutMe"
        style={{ backgroundColor: "white" }}
        className="aboutMe container-fluid section-spacing"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 about-text-col">
              <div className="section-heading">
                <h4 className="about-me-heading">Cultura</h4>
              </div>
              <VideoCarousel
                width="60%"
                height="80%"
                videos={videos}
                title={""}
              />
            </div>
          </div>
          {/* <img
            src={zigzag}
            style={{ alignItems: "right" }}
            className="zigzag float-lg-left mt-3 "
            alt="zig-zag"
          /> */}
        </div>
      </section>

      <section
        id="aboutMe"
        className="aboutMe white container-fluid section-spacing"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 about-text-col">
              <div className="section-heading">
                <h4 className="about-me-heading">Politica</h4>
              </div>
              <VideoCarousel
                width="60%"
                height="80%"
                videos={videos}
                title={""}
              />
            </div>
          </div>
          <img
            src={zigzag}
            className="zigzag position-absolute float-right"
            alt="zig-zag"
          />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};
export default TV;
