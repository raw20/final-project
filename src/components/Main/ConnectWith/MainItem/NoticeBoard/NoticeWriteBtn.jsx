import React from "react";

function NoticeWriteBtn({ auth, setWriter }) {
  function convertBoolean() {
    setWriter(true);
  }
  return (
    <>
      <button onClick={convertBoolean}>작성하기</button>
    </>
  );
}

export default NoticeWriteBtn;
