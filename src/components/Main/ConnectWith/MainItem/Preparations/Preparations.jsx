import React from "react";
import "./css/preparations.css";
function Preparations(props) {
  return (
    <div className="wrap">
      <div className="checklist-box">
        <div className="title">Checklist</div>
        <div className="contents">
          <div className="img"></div>
          <ul>
            신체검사
            <li>신체검사</li>
          </ul>
          <ul>
            인사정보 등록 서류 준비
            <li>신체검사</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preparations;
