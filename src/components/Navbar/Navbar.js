import React from "react";
import useWindowSize from "../../utils/Hook/useWindowSize";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a>Anasayfa</a>
      <a href="#resume">Öz Geçmiş</a>
      <a href="#contactMe">İletişim</a>
    </div>
  );
}

export default Navbar;
