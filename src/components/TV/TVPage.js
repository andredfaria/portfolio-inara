import React, { useEffect } from "react";
import Header from "../common/Header";
import VideoCarousel from "../Homepage/VideoCarousel/VideoCarousel";
import Footer from "../common/Footer";
import dotsSquare from "../../assets/images/dots-square.png";
import "./_TV.scss";

const TV = () => {
  const videoSections = [
    {
      title: "Prestação de Serviço",
      videos: [
        { id: "1", url: "https://www.youtube.com/embed/RCLVevPL8hE" },
        { id: "2", url: "https://www.youtube.com/embed/3chW8DoALhM" },
        { id: "3", url: "https://www.youtube.com/embed/y_VjWy7ZFLw" },
        { id: "4", url: "https://www.youtube.com/embed/6LQxd8BbzIU" },
      ],
    },
    {
      title: "Cultura e Entretenimento",
      videos: [
        { id: "5", url: "https://www.youtube.com/embed/sSrVd0qm2zU" },
        { id: "6", url: "https://www.youtube.com/embed/Imaw6VNfG1c" },
        { id: "7", url: "https://www.youtube.com/embed/DDbHcsE52jQ" },
        { id: "8", url: "https://www.youtube.com/embed/DVMNvDm4aMU" },
      ],
    },
    {
      title: "Policial",
      videos: [
        { id: "13", url: "https://www.youtube.com/embed/bSb5WzBSwTU" },
        { id: "14", url: "https://www.youtube.com/embed/-Bkwuy_nRBg" },
      ],
    },
    {
      title: "Esporte",
      videos: [
        { id: "19", url: "https://www.youtube.com/embed/gWSd68qov7w" },
        { id: "20", url: "https://www.youtube.com/embed/KrIQRWXRotM" },
        { id: "21", url: "https://www.youtube.com/embed/V5npXQRuOak" },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tv-page d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 bg-light">
        <div className="container-fluid py-3">
          <div className="row g-4">
            <img
              className="square-dots position-absolute d-none d-lg-block"
              src={dotsSquare}
              alt="dots-sq"
            />
            {videoSections.map((section, index) => (
              <React.Fragment key={index}>
                <div className="col-12">
                  <section className="rounded-3 shadow-sm p-4 mb-4">
                    <h2 className="h4 mb-4 text-center">{section.title}</h2>
                    <div className="border-0p-0">
                      <VideoCarousel videos={section.videos} />
                    </div>
                  </section>
                </div>
                {index === 1 && (
                  <div className="col-12">
                    <img
                      className="square-dots position-absolute d-none d-lg-block"
                      src={dotsSquare}
                      alt="dots-sq"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TV;
