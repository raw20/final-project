import React from "react";
import './css/chemi.css'
import { useRef, useState } from "react";
import ChemiEditor1 from "./ChemiEditor1";
import ChemiList1 from "./ChemiList1";
function Chemi3() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, content1, content2, content3, content4, content5, content6, content7, content8) => {
   
    const newItem = {
      author,
      content,
      content1, content2, content3, content4, content5, content6, content7, content8,
     
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
       <ChemiEditor1 onCreate={onCreate} />
         <ChemiList1 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default Chemi3;
