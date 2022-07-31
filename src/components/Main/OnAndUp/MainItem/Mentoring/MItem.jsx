import { useRef, useState } from "react";
import './css/M.css'
const MItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,

  created_date
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 계획를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 계획를 수정하시겠습니까?`)) {
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
        <span className="date">
          {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <input
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <div className="mento-btn">
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </div>
      ) : (
        <div className="mento-btn">
          <button onClick={handleClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </div>
      )}
    </div>
  );
};
export default MItem;
