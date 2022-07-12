import React from "react";
import "../css/header.css";
import image0 from "../assets/profile-images/1.png";
import verified from "../assets/position-images/verified.png";
import "bootstrap/dist/css/bootstrap.min.css";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="header-section" name="home">
      <div className="text-section">
        <p className="p-initial">Hi there!👋 My name is</p>
        <h2>
          Eshaan Anand
          <img
            className="verified-image"
            src={verified}
            alt="verified"
            style={{ width: "40px" }}
          />
        </h2>
        <p className="description">
          B.Tech 3rd Year Student at Kalinga Institute of Industrial
          Technology. Passionate about developing things with utmost
          creativity and challenging myself to solve different problems with
          coding.Travelling throughout the year to pursue the farthest expanses
          of Earth. ✌
        </p>
        <div className="wrapper">
          <p>I'm a</p>
          <div className="words">
            <span>Flutter Developer.</span>
            <span>Competitive Coder.</span>
            <span>Flutter Developer.</span>
            <span>Competitive Coder.</span>
            <span>Flutter Developer.</span>
          </div>
        </div>
        {/* <button className="resume-button">Resume</button> */}
        <div className="header-footer">
          <div className="resume-button-div">
            {/* <Button
              variant="primary"
              className="resume-button"
              href="https://drive.google.com/file/d/1cpPKxxHwd_Mq3uPparE7wu6uDzWXRVSL/view?usp=sharing"
            >
              Resume <CloudDownloadIcon />
            </Button> */}
            <div class="btn-container">
              <a
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file"
              >
                <button>
                  <span class="text">Resume</span>
                  <div class="icon-container">
                    <div class="icon icon--left">
                      <svg>
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </div>
                    <div class="icon icon--right">
                      <svg>
                        <use xlinkHref="#arrow-right"></use>
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>

            <svg style={{ display: "none" }}>
              <symbol id="arrow-right" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
              </symbol>
            </svg>
          </div>
          {/* <div>
            <span className="member-text">- Technical Member at</span>
            <img src={logo} style={{ width: "100px" }} />
          </div> */}

          {/* <label class="like">
            <input type="checkbox" />
            <div class="hearth" />
          </label> */}
        </div>
      </div>
      <div className="image-section">
        <img src={image0} alt="main-profile" />
      </div>
    </div>
  );
}
export default Header;
