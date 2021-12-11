import React, { useRef } from "react";
import { Home, Buttons } from "../../utils/Text";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import Resume from "../Resume/Resume";
import "./Home.css";
import profilePhoto from "../../assets/Images/profil_photo.jpg";

function Index() {
  return (
    <>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div style={{ zIndex: 99999 }}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <nav className="social">
            <ul>
              <li>
                <a href="https://twitter.com/highflyer910">
                  <i className="fa fa-gitlab"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/highflyer910">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yaren-hilal-%C3%BCrkmez-8131331a5/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/teonamushambadze">
                  <i className="fa fa-medium"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="headerContent">
          <img src={profilePhoto} className="profileImg"></img>

          <div>
            <p>{Home.header}</p>
            <p>{Home.subHeader}</p>

            <button className="button">{Buttons.downloadResume}</button>
          </div>
        </div>
      </div>
      <AboutMe />
      <Resume />
    </>
  );
}

export default Index;
