import React from "react";
import "./css/style.css";
function NoticeWriteBtn({ auth, setWriter }) {
  function convertBoolean() {
    setWriter(true);
  }
  return (
    <>
      <button className="notice-btn" onClick={convertBoolean}>
        작성하기
      </button>
    </>
  );
}

export default NoticeWriteBtn;
