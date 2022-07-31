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
      <table className="writer-table">
        <tbody>
          <tr className="writer-title-row">
            <td>제목</td>
            <td><input
              type="text"
              id="writer-title-input"
              placeholder={aboutMetitle ? titleValue : null}
              value={aboutMetitle}
              onChange={(e) => setAboutMeTitle(e.target.value)}
            /></td>
          </tr>
          <tr className="writer-name-row">
            <td>이름</td>
            <td>
              <input
                type="text"
                id="writer-title-input"
                placeholder={aboutMeName ? nameValue : null}
                value={aboutMeName}
                onChange={(e) => setAboutMeName(e.target.value)}
              /></td>
          </tr>
          <tr className="writer-content-row">
            <td>내용</td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="writer-title">글쓰기</h1>

      
      
    </div>
  );
}

export default AboutMeWrite;
