import React, { useRef } from "react";
import { Home, Buttons } from "../../utils/Text";
import AboutMe from "../AboutMe/AboutMe";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Index() {
  return (
    <>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />

        <div className="headerContent">
          <div className="profileImg"></div>
          <div>
            <span>github</span>
            <span>github</span>
            <span>github</span>
          </div>
          <div>
            <p>{Home.header}</p>
            <p>{Home.subHeader}</p>

            <button className="button">{Buttons.downloadResume}</button>
          </div>
        </div>
      </div>
      <AboutMe />
    </>
  );
}

export default Index;
