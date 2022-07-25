import React, { useState } from "react";
import { useEffect } from "react";
import "./css/preparations.css";
function Preparations() {
  const [checkListData, SetCheckListData] = useState([]);
  const checkListDocument = "/db/checkListDocument.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(checkListDocument);
      const json = await response.json();
      SetCheckListData(json);
    })();
  });
  return (
    <div className="preparations-wrap">
      <div className="preparations-checklist-box">
        <div className="preparations-checklist-title">Checklist</div>
        <div className="preparations-checklist-contents">
          <div className="preparations-checklist-img"></div>
          <h1 className="checklist-title">신체검사</h1>
          <ul className="checklist-name">
            <li className="checklist-item">
              <span className="checklist-item-name">신체검사</span>
            </li>
          </ul>
          <div className="checklist-document">
            <h1 className="checklist-title">인사정보 등록 서류 준비</h1>
            <span className="scan">스캔 후 파일로 준비</span>
          </div>
          <ul className="checklist-name">
            {checkListData.map((item) => (
              <li className="checklist-item" key={item.id}>
                <span className="checklist-item-name">{item.name}</span>
                <button className="checklist-item-check">체크</button>
              </li>
            ))}
          </ul>
          <button className="checklist-submit-btn">확인</button>
        </div>
      </div>
    </div>
  );
}

export default Preparations;
