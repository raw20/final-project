import React from "react";
import { useState } from "react";
import "./css/noticeBoard.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function NoticeBoard() {
  const [tabIndex, setTabIndex] = useState();
  const titleArray = ["공지사항", "자기소개", "Q&A"];
  const addressArray = ["notice", "aboutme", "qna"];

  function currentIndex(index) {
    setTabIndex(index);
  }
  return (
    <div className="tab-btn-wrap">
      <ul className="tab-btn-area">
        {titleArray.map((title, index) => (
          <NavLink
            to={`/3/noticeBoard/${addressArray[index]}`}
            className={({ isActive }) => (isActive ? "tab-btn on" : "tab-btn")}
          >
            <li
              className="tab-btn-list"
              key={index}
              onClick={() => currentIndex(index)}
            >
              {title}
            </li>
          </NavLink>
        ))}
      </ul>
      <h1 className="tab-item-title">
        {tabIndex === undefined ? titleArray[0] : titleArray[tabIndex]}
      </h1>
      <div className="tab-item-box">
        <Outlet />
      </div>
    </div>
  );
}

export default NoticeBoard;
