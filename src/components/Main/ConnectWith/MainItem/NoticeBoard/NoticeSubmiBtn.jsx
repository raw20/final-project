import React from "react";

function NoticeSubmiBtn({ auth, setWriter }) {
  function convertBoolean() {
    alert("게시글 저장완료");
    setWriter(false);
  }
  return (
    <>
      <button onClick={convertBoolean}>제출하기</button>
      <button>임시저장</button>
    </>
  );
}

export default NoticeSubmiBtn;
