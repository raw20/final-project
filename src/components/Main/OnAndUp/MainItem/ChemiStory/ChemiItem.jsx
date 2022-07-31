import { useRef, useState } from "react";
import './css/chemi.css'
const ChemiWItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,content8,


  
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [localContent1, setLocalContent1] = useState(content);
  const [localContent2, setLocalContent2] = useState(content);
  const [localContent3, setLocalContent3] = useState(content);
  const [localContent4, setLocalContent4] = useState(content);
  const [localContent5, setLocalContent5] = useState(content);
  const [localContent6, setLocalContent6] = useState(content);
  const [localContent7, setLocalContent7] = useState(content);
  const [localContent8, setLocalContent8] = useState(content);
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
    setLocalContent5(content5);
    setLocalContent6(content6);
    setLocalContent7(content7);
    setLocalContent8(content8);
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
          작성자 : {author}
        </span>
        <br />
      
      </div>
      <div className="chemi-list">
          <div className="chemi-content">
            <p>1년 이내</p>
          <span>목표 : </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              />
            ) : (
              content
            )}
          </div>
          <div className="chemi-content">
          <span>필요역량 : </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent1}
                onChange={(e) => setLocalContent1(e.target.value)}
              />
            ) : (
              content1
            )}
          </div>
          <div className="chemi-content">
          <span>실행계획 : </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent2}
                onChange={(e) => setLocalContent2(e.target.value)}
              />
            ) : (
              content2
            )}
          </div>
          <div className="chemi-content">
            <p>3년 이내</p>
            <span>목표 : </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent3}
                onChange={(e) => setLocalContent3(e.target.value)}
              />
            ) : (
              content3
            )}
          </div>
          <div className="chemi-content">
          <span>필요역량 : </span>{isEdit ? (
              <input
                ref={localContentInput}
                value={localContent4}
                onChange={(e) => setLocalContent4(e.target.value)}
              />
            ) : (
              content4
            )}
          </div>
          <div className="chemi-content">
          <span>실행계획 : </span>{isEdit ? (
              <input
                ref={localContentInput}
                value={localContent5}
                onChange={(e) => setLocalContent5(e.target.value)}
              />
            ) : (
              content5
            )}
          </div>
          <div className="chemi-content">
            <p>5년 이내</p>
            <span>목표 : </span>{isEdit ? (
              <input
                ref={localContentInput}
                value={localContent6}
                onChange={(e) => setLocalContent6(e.target.value)}
              />
            ) : (
              content6
            )}
          </div>
          <div className="chemi-content">
          <span>필요역량 : </span>{isEdit ? (
              <input
                ref={localContentInput}
                value={localContent7}
                onChange={(e) => setLocalContent7(e.target.value)}
              />
            ) : (
              content7
            )}
          </div>
          <div className="chemi-content">
          <span>실행계획 : </span> {isEdit ? (
              <input
                ref={localContentInput}
                value={localContent8}
                onChange={(e) => setLocalContent8(e.target.value)}
              />
            ) : (
              content8
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
export default ChemiWItem;
