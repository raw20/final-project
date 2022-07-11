import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";
function ConnectWithHeader() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        logo
      </Link>
      <div className="title">Chemiverse Connenct With</div>
      <Link to="/chemiverseOnUp" className="link">
        Chemiverse On & Up <IoCaretForwardOutline />
      </Link>
    </div>
  );
}

export default ConnectWithHeader;
