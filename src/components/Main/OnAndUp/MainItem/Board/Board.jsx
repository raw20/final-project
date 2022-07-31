import React, { useState, useEffect } from "react";
import "./css/board.css";
import SubmitBtn from "./SubmitBtn";
import { useDispatch, useSelector } from "react-redux";
import { getLike } from "../../../../../app/detailSlice";
import BoardTable from "./BoardTable";
import BoardWrite from "./BoardWrite";
import SmallSelectBox from "../../Main/SmallSelectBox";

function Board() {
  const options = [
    { value: "0", label: "자유게시판", address: "board" },
    { value: "1", label: "아이디어제시", address: "board" },
  ];
  const [posts, setPosts] = useState([]);
  const [copyPosts, setCopyPosts] = useState([]);
  const postData = useSelector((state) => state.item);
  const [writer, setWriter] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContents, setBoardContents] = useState("");
  const dispatch = useDispatch();
  const dataUrl = "/db/boardData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataUrl);
      const json = await response.json();
      setPosts(json);
      setCopyPosts(json);
    })();
    dispatch(getLike());
  }, []);

  return (
    <>
      <SmallSelectBox options={options} placeholder={"자유게시판"} />
      {!writer ? (
        <div className="aboutMe_area">
          <BoardTable posts={posts} copyPosts={copyPosts} setPosts={setPosts} writer={writer} setWriter={setWriter} />
        </div>
      ) : (
        <div className="aboutMe_area">
          <BoardWrite aboutMetitle={boardTitle} setAboutMeTitle={setBoardTitle} aboutMeContents={boardContents} setAboutMeContents={boardContents} />
          <SubmitBtn writer={writer} setWriter={setWriter} aboutMetitle={boardTitle} setAboutMeTitle={setBoardTitle} aboutMeContents={boardContents} setAboutMeContents={setBoardContents} />
        </div>
      )}
    </>
  );
}

export default Board;
