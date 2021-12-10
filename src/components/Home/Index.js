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
        <div style={{zIndex:99999}}>
          <link
            href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <nav className="social">
            <ul>
              <li>
                <a href="https://twitter.com/highflyer910">
                  Twitter <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/highflyer910">
                  Github <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yaren-hilal-%C3%BCrkmez-8131331a5/">
                  Linkedin <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/teonamushambadze">
                  Medium <i className="fa fa-medium"></i>
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
