import React, { useState, useEffect } from "react";
import "./css/aboutMe.css";
import SubmitBtn from "./SubmitBtn";
import { useDispatch, useSelector } from "react-redux";
import { getLike } from "../../../../../app/detailSlice";
import BoardTable from "./BoardTable";
import BoardWrite from "./BoardWrite";

function Board() {
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
