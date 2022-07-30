import React from "react";
import './css/M.css'
import { useRef, useState } from "react";
import MEditor1 from "./MEditor1";
import MList1 from './MList1';
function M3() {
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

    <div>
        <MEditor1 onCreate={onCreate} />
        <MList1 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
   
      
  );
}

export default M3;
