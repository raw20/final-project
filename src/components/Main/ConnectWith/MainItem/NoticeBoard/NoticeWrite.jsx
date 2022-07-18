import React from "react";
import { useBeforeunload } from "react-beforeunload";

function NoticeWrite() {
  useBeforeunload((event) => event.preventDefault());

  return <div style={{ backgroundColor: "red" }}>작성하기</div>;
}

export default NoticeWrite;
