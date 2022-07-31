import React from "react";
import './css/M.css'
import { useRef, useState } from "react";
import MEditor1 from "./MEditor1";
import MList1 from './MList1';
import SmallSelectBox from '../../Main/SmallSelectBox';
function M3() {
  const options = [
    { value: '0', label: '멘토링이란?', address: 'mentoring' },
    { value: '1', label: '계획서작성', address: 'mentoring' },
    { value: '2', label: '활동내용', address: 'mentoring' },

]
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
       <SmallSelectBox options={options} placeholder={"활동내용"} />
        <MEditor1 onCreate={onCreate} />
        <MList1 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
   
      
  );
}

export default M3;
