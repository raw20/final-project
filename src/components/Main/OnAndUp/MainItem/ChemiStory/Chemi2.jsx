import React from "react";
import './css/chemi.css'
import { useRef, useState } from "react";
import ChemiEditor from "./ChemiEditor";
import ChemiList from "./ChemiList";
import SmallSelectBox from '../../Main/SmallSelectBox';

function Chemi2() {
  const options = [
    { value: '0', label: 'Chemistory란?', address: 'chemistory' },
    { value: '1', label: '작성하기', address: 'chemistory' },
    { value: '2', label: '성찰저널', address: 'chemistory' },
    { value: '3', label: '자기개발목표', address: 'chemistory' }
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
   
    <div className="chemi-wrap2">
       <SmallSelectBox options={options} placeholder={"작성하기"} />
    <main>
   
        <div className="title">
          <h2>Chemi Story작성</h2>
        </div>
     
        <div className= 'dep1'>
        <div className="box">
         <ChemiEditor onCreate={onCreate} />
         <ChemiList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
 
      
          </div>
      
        </div>
    
        
      
      
    </main>
  </div>
 
  )
}

export default Chemi2;
