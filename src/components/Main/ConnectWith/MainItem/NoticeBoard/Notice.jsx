import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";
function Notice() {
  const dataURL = "./db/boardData.json";
  const [list, setList] = useState([]);
  const LIST_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;
  useEffect(() => {
    (async () => {
      const response = await fetch(dataURL);
      const json = await response.json();
      setList(json);
    })();
  }, []);
  console.log(list);
  return (
    <div>
      <div className="title"> 공지사항 </div>
      <div className="search-area">
        <ul className="list-tab">
          {[...list]
            .reverse()
            .slice(startNum, endNum)
            .map(({ id, Writer, title, category }) => (
              <li key={id}>
                <div className="list-header">
                  <span className="idName">{id}</span>
                </div>
                <div className="list-main">
                  <span className="listTitle">{title}</span>
                  <span className="listWriter">{Writer}</span>
                  <span className="listCategory">{category}</span>
                </div>
              </li>
            ))}
        </ul>
        <Pagination
          total={list.length}
          page={page}
          setPage={setPage}
          listPerPage={LIST_PER_PAGE}
        />
      </div>
    </div>
  );
}

export default Notice;
