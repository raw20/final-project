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
    <h1 className="writer-title">자기소개를 입력하세요</h1>
      <table className="writer-table">
          <tr className="writer-title-row">
            <th className="writer-titl">제목</th>
            <td className="writer-titl-inputbox"><input
              type="text"
              id="writer-title-input"
              placeholder={aboutMetitle ? titleValue : null}
              value={aboutMetitle}
              onChange={(e) => setAboutMeTitle(e.target.value)}
            /></td>
          </tr>
          <tr className="writer-name-row">
            <th className="writer-name">이름</th>
            <td className="writer-name-inputbox">
              <input
                type="text"
                id="writer-title-input"
                placeholder={aboutMeName ? nameValue : null}
                value={aboutMeName}
                onChange={(e) => setAboutMeName(e.target.value)}
              /></td>
          </tr>
          <tr className="writer-content-row">
            <th className="writer-content">내용</th>
            <td className="writer-content-inputbox">
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
      </table>
    </div>
  );
}

export default AboutMeWrite;
