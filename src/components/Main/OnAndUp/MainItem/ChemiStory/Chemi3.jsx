import React from "react";
import './css/chemi.css'
import { useRef, useState } from "react";
import ChemiEditor1 from "./ChemiEditor1";
import ChemiList1 from "./ChemiList1";
import SmallSelectBox from '../../Main/SmallSelectBox';

function Chemi3() {
  const options = [
    { value: '0', label: 'Chemi Story란?', address: 'chemistory' },
    { value: '1', label: '작성하기', address: 'chemistory' },
    { value: '2', label: '성찰저널', address: 'chemistory' },
    { value: '3', label: '자기계발목표', address: 'chemistory' }
]
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
      <SmallSelectBox options={options} placeholder={"성찰저널"} />
       <ChemiEditor1 onCreate={onCreate} />
         <ChemiList1 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default Chemi3;
