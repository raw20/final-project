import { useRef, useState } from "react";
import './css/chemi.css'
const ChemiWItem1 = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  content1,
  content2,
  content3,
  content4,
  
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [localContent1, setLocalContent1] = useState(content);
  const [localContent2, setLocalContent2] = useState(content);
  const [localContent3, setLocalContent3] = useState(content);
  const [localContent4, setLocalContent4] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
    setLocalContent1(content1);
    setLocalContent2(content2);
    setLocalContent3(content3);
    setLocalContent4(content4);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          제목 : {author}
        </span>
        <br />
       
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent1}
            onChange={(e) => setLocalContent1(e.target.value)}
          />
        ) : (
          content1
        )}
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent2}
            onChange={(e) => setLocalContent2(e.target.value)}
          />
        ) : (
          content2
        )}
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent3}
            onChange={(e) => setLocalContent3(e.target.value)}
          />
        ) : (
          content3
        )}
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent4}
            onChange={(e) => setLocalContent4(e.target.value)}
          />
        ) : (
          content4
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};
export default ChemiWItem1;
