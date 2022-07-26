import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/notice.css";
import NoticeWrite from "./IdeaWrite";
import SubmitBtn from "./SubmitBtn";
import IdeaTable from "./IdeaTable";

function Idea() {
  const [posts, setPosts] = useState([]);
  const [copyPosts, setCopyPosts] = useState([]);
  const [writer, setWriter] = useState(false);
  const dataUrl = "/db/boardData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataUrl);
      const json = await response.json();
      setPosts(json);
      setCopyPosts(json);
    })();
  }, []);

  return (
    <>
      {!writer ? (
        <div className="notice_area">
          <IdeaTable posts={posts} copyPosts={copyPosts} setPosts={setPosts} />
        </div>
      ) : (
        <div className="notice_area">
          <SubmitBtn writer={writer} setWriter={setWriter} />
        </div>
      )}
    </>
  );
}

export default Idea;
