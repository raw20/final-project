import React from "react";
import { useState } from "react";
import component from "./TabComponent";
import "./css/noticeBoard.css";
function NoticeBoard() {
  const [tabIndex, setTabIndex] = useState();
  const titleArray = ["공지사항", "자기소개", "Q&A"];
  function currentIndex(index) {
    setTabIndex(index);
  }
  console.log("tabIndex:", tabIndex);
  return (
    <div className="wrap">
      <ul className="tab-btn-area">
        {titleArray.map((title, index) => (
          <li
            className="tab-btn"
            key={index}
            onClick={() => currentIndex(index)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="item-box">
        {tabIndex === undefined
          ? component[0].content
          : component[tabIndex].content}
      </div>
    </div>
  );
}

export default NoticeBoard;
