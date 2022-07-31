import React from "react";
import './css/chemi.css'
import { useRef, useState } from "react";
import ChemiEditor2 from "./ChemiEditor2";
import ChemiList2 from "./ChemiList2";
import SmallSelectBox from '../../Main/SmallSelectBox';
function Chemi4() {
  const options = [
    { value: '0', label: 'Chemistory란?', address: 'chemistory' },
    { value: '1', label: '작성하기', address: 'chemistory' },
    { value: '2', label: '성찰저널', address: 'chemistory' },
    { value: '3', label: '자기개발목표', address: 'chemistory' }
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
             <SmallSelectBox options={options} placeholder={"자기개발목표"} />
          <ChemiEditor2 onCreate={onCreate} />
      <ChemiList2 onEdit={onEdit} onRemove={onRemove} diaryList={data} />
          </div>
  
  );
}

export default Chemi4;
