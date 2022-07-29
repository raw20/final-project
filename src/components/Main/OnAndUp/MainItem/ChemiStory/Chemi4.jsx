import React from "react";
import './css/chemi.css'
import { useRef, useState } from "react";
import ChemiEditor2 from "./ChemiEditor2";
import ChemiList2 from "./ChemiList2";
function Chemi4() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="chemi-wrap4">
      <main>
        <div className="title">
          <h2>자기개발목표</h2>
        </div>
        <div className="dep1">
          <div className="box">
          <ChemiEditor2 onCreate={onCreate} />
      <ChemiList2 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
          </div>
        
       
         <div className="chemi-btn">
           <button>작성하기</button>
          </div>
        </div>
      
      </main>
    </div>
  );
}

export default Chemi4;
