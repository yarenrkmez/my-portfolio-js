import React from "react";
import useWindowSize from "../../utils/Hook/useWindowSize";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a>Anasayfa</a>
      <a href="#aboutMe">Hakkımda</a>
      <a>Öz Geçmiş</a>
      <a>İletişim</a>
    </div>
  );
}

export default Navbar;
