import React from "react";
import { useDispatch } from "react-redux";
import { tempSaveContents } from "../../../../../app/aboutMeWriteSlice";
import "./css/style.css";
function SubmitBtn({
  setWriter,
  aboutMetitle,
  setAboutMeTitle,
  aboutMeContents,
  setAboutMeContents,
}) {
  const dispatch = useDispatch();
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
    } else if (aboutMeContents === "") {
      alert("내용을 입력하세요.");
    }
  }
  function onSave(e) {
    e.preventDefault();
    if (aboutMetitle) {
      dispatch(
        tempSaveContents({ title: aboutMetitle, contents: aboutMeContents })
      );
      convertBoolean();
      setAboutMeTitle("");
      setAboutMeContents("");
    } else if (aboutMetitle === "") {
      alert("제목을 입력하세요.");
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
