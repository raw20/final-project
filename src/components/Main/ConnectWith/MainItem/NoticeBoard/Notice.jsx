import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/style.css";

import NoticeWrite from "./NoticeWrite";
import NoticeSubmiBtn from "./NoticeSubmiBtn";
import NoticeTable from "./NoticeTable";

function Notice() {
  const [posts, setPosts] = useState([]);
  const [writer, setWriter] = useState(false);
  const dataUrl = "/db/boardData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataUrl);
      const json = await response.json();
      setPosts(json);
    })();
  }, []);

  return (
    <>
      {!writer ? (
        <div className="edu_notice_area">
          <NoticeTable posts={posts} writer={writer} setWriter={setWriter} />
        </div>
      ) : (
        <div className="edu_notice_area">
          <NoticeWrite />
          <NoticeSubmiBtn writer={writer} setWriter={setWriter} />
        </div>
      )}
    </>
  );
}

export default Notice;
