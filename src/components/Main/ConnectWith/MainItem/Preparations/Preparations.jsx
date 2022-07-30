import React, { useState } from "react";
import { useEffect } from "react";
import "./css/preparations.css";
function Preparations() {
  const [checkListData, SetCheckListData] = useState([]);
  const checkListDocument = "/db/checkListDocument.json";
  const [check, setCheck] = useState([]);
  const [bodyCheck, setBodyCheck] = useState(false);
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
              <button
                className={
                  bodyCheck ? "checklist-item-check on" : "checklist-item-check"
                }
                onClick={() => {
                  setBodyCheck((bodyCheck) => !bodyCheck);
                }}
              >
                체크
              </button>
            </li>
          </ul>
          <div className="checklist-document">
            <h1 className="checklist-title">인사정보 등록 서류 준비</h1>
            <span className="scan">스캔 후 파일로 준비</span>
          </div>
          <ul className="checklist-name">
            {checkListData.map((item) => (
              <li className="checklist-item" key={item.id}>
                {item.name.split('\n').map(line=>{
                  return (<span className="checklist-item-name">{line}<br /></span>
                  )
                })}
                <button
                  className={
                    check.includes(item.id)
                      ? "checklist-item-check on"
                      : "checklist-item-check"
                  }
                  onClick={() => {
                    !check.includes(item.id)
                      ? setCheck((check) => [...check, item.id])
                      : setCheck(check.filter((ele) => ele !== item.id));
                  }}
                >
                  체크
                </button>
              </li>
            ))}
          </ul>
          <button
            className="checklist-submit-btn"
            onClick={() => {
              alert("제출완료");
              setCheck("");
              setBodyCheck("");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preparations;
