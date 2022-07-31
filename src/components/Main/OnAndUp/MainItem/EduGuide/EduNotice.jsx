import React from "react";
import { useEffect, useState } from "react";
import EduNoticePage from "./EduNoticePage";
import "./css/EduNotice.css";
import EduNoticeDetail from './EduNoticeDetail';
import EduNoticeSearch from "./EduNoticeSearch";
import SmallSelectBox from '../../Main/SmallSelectBox';

function EduNotice() {
  const options = [
    { value: '0', label: '공지사항', address: 'eduguide' },
    { value: '1', label: '시간표', address: 'eduguide' },
    { value: '2', label: '강사소개', address: 'eduguide' }
]
  const [content, setContent] = useState(true);
  const [index, setIndex] = useState();
  const [lists, setLists] = useState([]);/* posts,setposts */
  const [copyPosts, setCopyPosts] = useState([])
  const LIST_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;
  useEffect(() => {
    fetch("/db/boardData.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);
  function onClick(index) {
    setContent(false);
    setIndex(index);
  }

  return (
    <div className="edu_notice_wrap">
      <SmallSelectBox options={options} placeholder={"공지사항"} />
      <div className="edu_notice_area">
        {content ? (
          <>
          <EduNoticeSearch 
          lists={lists} 
          setLists={setLists} 
          copyPosts={copyPosts} />
        <table className="edu_table">
          <thead>
            <tr>
              <th className="th_01">NO</th>
              <th className="th_02">CATEGORY</th>
              <th className="th_03">SUBJECT</th>
              <th className="th_04">DATE</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {[...lists]
              .reverse()
              .slice(startNum, endNum)
              .map((lists, index) => {
                return (
                  <tr key={index} className="body_row">
                    <td className="idName">{lists.id}</td>
                    <td className="list_cat">{lists.category}</td>
                    <td className="list_title" onClick={() => onClick(index)}>{lists.title}</td>
                    <td className="list_date">{lists.date}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
          </>
        ) : (
          <div>
            <EduNoticeDetail setContent={setContent} lists={[...lists].reverse()[index]}/>
          </div>
        )}
        {content ? (
        <EduNoticePage
          total={lists.length}
          page={page}
          setPage={setPage}
          listPerPage={LIST_PER_PAGE}
        />) : null}
      </div>
    </div>
  );
}
export default EduNotice;