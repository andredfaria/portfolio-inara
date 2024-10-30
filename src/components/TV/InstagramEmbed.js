import React from "react";

const InstagramEmbed = ({ url }) => {

  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src="https://www.instagram.com/p/C9Nk5iSJbUs/embed"
        width="400"
        height="500"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        title="Instagram Post"
      ></iframe>
    </div>
  );
};

export default InstagramEmbed;
