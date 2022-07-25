import React from "react";
import { useBeforeunload } from "react-beforeunload";

function NoticeWrite() {
  useBeforeunload((event) => event.preventDefault());

  return <div></div>;
}

export default NoticeWrite;
