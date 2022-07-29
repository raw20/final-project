import React from "react";
import { useBeforeunload } from "react-beforeunload";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useSelector } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./css/writer.css";
function AboutMeWrite({
  aboutMetitle,
  setAboutMeTitle,
  aboutMeContents,
  setAboutMeContents,
}) {
  useBeforeunload((event) => event.preventDefault());
  const titleValue = useSelector((state) => state.aboutMeWriter.title);
  const contentsValue = useSelector((state) => state.aboutMeWriter.content);

  return (
    <div className="writer-wrap">
      <h1 className="writer-title">글쓰기</h1>
      <input
        type="text"
        id="writer-title-input"
        placeholder={aboutMetitle ? titleValue : "제목을 입력해주세요."}
        value={aboutMetitle}
        onChange={(e) => setAboutMeTitle(e.target.value)}
      />
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
