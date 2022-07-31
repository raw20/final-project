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
  const [localContent1, setLocalContent1] = useState(content1);
  const [localContent2, setLocalContent2] = useState(content2);
  const [localContent3, setLocalContent3] = useState(content3);
  const [localContent4, setLocalContent4] = useState(content4);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 작성글을 정말 삭제하시겠습니까?`)) {
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

    if (window.confirm(`${id}번 째 작성글을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          이름 : {author}
        </span>
      
      </div>
       <div className="chemi-list2">

     
          
          <div className="content">
            <span>1.  </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              />
            ) : (
              content
            )}
          </div>
          <div className="content">
          <span>2. </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent1}
                onChange={(e) => setLocalContent1(e.target.value)}
              />
            ) : (
              content1
            )}
          </div>
          <div className="content">
          <span>3. </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent2}
                onChange={(e) => setLocalContent2(e.target.value)}
              />
            ) : (
              content2
            )}
          </div>
          <div className="content">
          <span>4. </span>  {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent3}
                onChange={(e) => setLocalContent3(e.target.value)}
              />
            ) : (
              content3
            )}
          </div>
          <div className="content">
          <span>5. </span>{isEdit ? (
              <input
                ref={localContentInput}
                value={localContent4}
                onChange={(e) => setLocalContent4(e.target.value)}
              />
            ) : (
            content4
            )}
          </div>
        </div>
      {isEdit ? (
        <div className="chemi-btn">
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </div>
      ) : (
        <div className="chemi-btn">
          <button onClick={handleClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </div>
      )}
    </div>
  );
};
export default ChemiWItem1;
