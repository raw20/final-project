import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/notice.css";
import NoticeWrite from "./IdeaWrite";
import SubmitBtn from "./SubmitBtn";
import IdeaTable from "./IdeaTable";
import SmallSelectBox from "../../Main/SmallSelectBox";

function Idea() {
  const options = [
    { value: "0", label: "자유게시판", address: "board" },
    { value: "1", label: "아이디어제시", address: "board" },
  ];
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
      <SmallSelectBox options={options} placeholder={"아이디어제시"} />
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
