import React from "react";
import Header from "./Header/Header";
import Contents from "./Main/Contents";
import "./connectwith.css";
function ConnectWith() {
  const contentsArr = [
    {
      title: "환영인사",
      contents: "./img/welcome.jpg",
    },
    {
      title: "회사소개",
      contents: "./img/companyintro.jpg",
    },
    {
      title: "입사 전 준비사항",
      contents: "./img/preparations.jpg",
    },
    {
      title: "게시판",
      contents: "./img/notice.jpg",
    },
  ];
  return (
    <div className="connect-with-area">
      <Header />
      <ul className="connect-with-contents">
        {contentsArr.map((content, index) => (
          <Contents content={content} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ConnectWith;
