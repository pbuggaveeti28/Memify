import React from "react";
import troll from "./troll-face.png";
function Header() {
  return (
    <div className="header">
      <img className="header-img" src={troll} alt="" />
      <h1 className="header--text">Memify</h1>
    </div>
  );
}
export default Header;
