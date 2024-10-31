import React from "react";

const InstagramPost = ({ post }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={post.id}>
      <div className="instagram-post-wrapper shadow-lg rounded overflow-hidden">
        <iframe
          src={`https://www.instagram.com/p/${post.url}/embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
          title={`Instagram Post ${post.id}`}
          className="instagram-frame"
          loading="lazy"
          style={{ minHeight: "500px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramPost;
