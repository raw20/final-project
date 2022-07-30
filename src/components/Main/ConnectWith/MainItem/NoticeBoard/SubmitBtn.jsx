import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tempSaveContents } from "../../../../../app/aboutMeWriteSlice";
import { addAboutMeTableData } from "../../../../../app/detailSlice";
import "./css/style.css";
function SubmitBtn({
  setWriter,
  aboutMetitle,
  setAboutMeTitle,
  aboutMeContents,
  setAboutMeContents,
  aboutWriter,
}) {
  const dispatch = useDispatch();
  //const { tableId, setTableId } = useState(12);
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate());
  function convertBoolean() {
    alert("게시글 저장완료");
    setWriter(false);
  }
  function onTempSave(e) {
    e.preventDefault();
    if (aboutMetitle) {
      dispatch(
        tempSaveContents({ title: aboutMetitle, contents: aboutMeContents })
      );
      convertBoolean();
    } else if (aboutMetitle === "") {
      alert("제목을 입력하세요.");
    } else if (aboutWriter === "") {
      alert("이름을 입력하세요.");
    } else if (aboutMeContents === "") {
      alert("내용을 입력하세요.");
    }
  }
  function onSave(e) {
    e.preventDefault();
    if (aboutMetitle) {
      const writeData = {
        id: "0",
        title: aboutMetitle,
        writer: aboutWriter,
        content_text: aboutMeContents,
        content_img:
          "http://conference.exc.co.kr/chemiverse/assets/img/img-board-view.png",
        file: "N",
        like: "0",
        views: 0,
        date: `${year}.${month}.${date}`,
      };
      dispatch(addAboutMeTableData(writeData));
      convertBoolean();
      setAboutMeTitle("");
      setAboutMeContents("");
    } else if (aboutMetitle === "") {
      alert("제목을 입력하세요.");
    } else if (aboutWriter === "") {
      alert("이름을 입력하세요.");
    } else if (aboutMeContents === "") {
      alert("내용을 입력하세요.");
    }
  }
  return (
    <>
      <button className="notice-btn" onClick={onSave}>
        제출하기
      </button>
      <button className="notice-btn temporary" onClick={onTempSave}>
        임시저장
      </button>
    </>
  );
}

export default SubmitBtn;
