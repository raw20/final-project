import React from 'react';
import { useState } from "react";
import './css/tableSearchBar.css'

const EduNoticeSearch = ({lists, setLists, copyPosts}) => {
  const [display, setDisplay] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("전체");

  function onSearch(e) {
    e.preventDefault();
    if (searchValue === null || searchValue === " ") {
      console.log("no data");
    } else if (type === selectTypeArray[1].name) {
      const filterData = lists.filter((ele) =>
        ele.writer.includes(searchValue)
      );
      setLists(filterData);
    } else if (type === selectTypeArray[2].name) {
      const filterData = lists.filter((ele) => ele.title.includes(searchValue));
      setLists(filterData);
    } else if (type === selectTypeArray[0].name) {
      const filterData = lists.filter(
        (ele) =>
          ele.title.includes(searchValue) || ele.writer.includes(searchValue)
      );
      setLists(filterData);
    }
  }
  function handlerSelectType(e) {
    setType((typeName) => (typeName = e.target.innerText));
    setDisplay((display) => display);
  }
  function handlerShowType() {
    setDisplay((display) => !display);
  }
  function handlerChanegeData(e) {
    if (e.key === "Backspace") {
      setLists(copyPosts);
    }
  }
  const selectTypeArray = [
    {
      value: "all",
      name: "전체",
    },
    {
      value: "category",
      name: "카테고리",
    },
    {
      value: "title",
      name: "제목",
    },
  ];
  return (
    <div className="table-search">
      <form className="table-search-form" onSubmit={(e) => onSearch(e)}>
        <div
          className={display ? "contents-type" : "contents-type on"}
          onClick={handlerShowType}
        >
          {type}
          <ul className={display ? "type-tab" : "type-tab on"}>
            {selectTypeArray.map((li, index) => (
              <li
                className="type-tab-list"
                key={index}
                onClick={handlerSelectType}
              >
                {li.name}
              </li>
            ))}
          </ul>
        </div>
        <input
          className="table-search-input"
          type="text"
          value={searchValue}
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
          onKeyDown={handlerChanegeData}
        />
        <button type="submit" className="table-search-submit">
          버튼
        </button>
      </form>
    </div>
  );
};

export default EduNoticeSearch;