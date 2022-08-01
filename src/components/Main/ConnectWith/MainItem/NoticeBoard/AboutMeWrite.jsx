import React from "react";
import { useBeforeunload } from "react-beforeunload";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useSelector } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./css/writer.css";
function AboutMeWrite({
  aboutMetitle,
  setAboutMeTitle,
  aboutMeName,
  setAboutMeName,
  aboutMeContents,
  setAboutMeContents,
}) {
  useBeforeunload((event) => event.preventDefault());
  const titleValue = useSelector((state) => state.aboutMeWriter.title);
  const nameValue = useSelector((state) => state.aboutMeWriter.name);
  const contentsValue = useSelector((state) => state.aboutMeWriter.content);

  return (
    <div className="writer-wrap">
      <h1 className="writer-title">글쓰기</h1>
      <div className="writer-row">
        <span>제목</span>
        <input
          type="text"
          id="writer-title-input"
          placeholder={aboutMetitle ? titleValue : "제목을 입력해주세요."}
          value={aboutMetitle}
          onChange={(e) => setAboutMeTitle(e.target.value)}
        />
      </div>
      <div className="writer-row">
        <span>이름</span>
        <input
          type="text"
          id="writer-title-input"
          placeholder={aboutMeName ? nameValue : "이름을 입력해주세요."}
          value={aboutMeName}
          onChange={(e) => setAboutMeName(e.target.value)}
        />
      </div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: "내용을 입력해주세요",
        }}
        data={aboutMeContents}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setAboutMeContents(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}
export default AboutMeWrite;