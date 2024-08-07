import $ from "jquery";
import React, { Fragment, useEffect } from "react";
import "./_footer.scss";

const Footer = props => {

  useEffect(() => {
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
        $("#back2Top").fadeIn();
      } else {
        $("#back2Top").fadeOut();
      }
    });
    $(document).ready(function() {
      $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
  });

  return (
    <Fragment>
      <div className="container footer">
        <div className="row ml-0 mr-0">
          <div
            className="col-12 col-lg-6 pl-0 footer-text"
            style={{ color: "#000000", fontweight: "bold" }}
          >
            Desenvolvido por André de Faria &copy; 2024
          </div>
        </div>
      </div>
      <div id="back2Top" title="Back to top" href="#">
        &#10148;
      </div>
    </Fragment>
  );
};
export default Footer;
