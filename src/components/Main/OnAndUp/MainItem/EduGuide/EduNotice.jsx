import React from 'react';
import { useEffect,useState } from 'react';
import EduNoticePage from './EduNoticePage';
import './css/EduNotice.css'

function EduNotice() {
  const [lists,setLists] = useState([]);
  const LIST_PER_PAGE = 10;
  const [page,setPage] = useState(1);
  const startNum = (page-1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;
  useEffect(()=>{
    fetch('/db/boardData.json')
    .then((res) => res.json())
    .then((data)=> setLists(data))
  },[])
  return (
    <div className='edu_notice_area'>
      <table className='edu_table'>
        <thead>
          <tr>
            <th className='th_01'>NO</th>
            <th className='th_02'>CATEGORY</th>
            <th className='th_03'>SUBJECT</th>
            <th className='th_04'>DATE</th>
          </tr>
        </thead>
      <tbody>
        {
          [...lists].reverse().slice(startNum,endNum).map(({id,category,title,date})=>{
          return(
            <tr>
              <td className='idName'>{id}</td>
              <td className='listBody'>{category}</td>
              <td className='listBody'>{title}</td>
              <td className='listBody'>{date}</td>
            </tr>
          )
          })
        }
      </tbody>
      </table>
      <EduNoticePage
          total={lists.length} 
          page={page} 
          setPage={setPage} 
          listPerPage={LIST_PER_PAGE}
        />
    </div>
  );
};
export default EduNotice;