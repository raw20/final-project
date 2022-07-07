import React from "react";
import Header from "../Header/Header";
import "./css/main.css";
function OnAndUp(props) {
  return (
    <div className="wrap">
      <div id="header">
        <Header />
      </div>
      <div className="main">
        <div className="main-img"></div>
      </div>
    </div>
  );
}

export default OnAndUp;
