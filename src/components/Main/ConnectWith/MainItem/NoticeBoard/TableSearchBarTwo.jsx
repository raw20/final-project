import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../../../../app/searchTableSlice";
import "./css/tableSearchBar.css";

function TableSearchBarTwo({ posts }) {
  const [display, setDisplay] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("전체");
  const dispatch = useDispatch();
  function onSearch(e) {
    e.preventDefault();
    if (searchValue === null || searchValue === " ") {
      console.log("no data");
    } else if (type === selectTypeArray[1].name) {
      const filterData = posts.filter((ele) =>
        ele.writer.includes(searchValue)
      );
      dispatch(searchData(filterData));
    } else if (type === selectTypeArray[2].name) {
      const filterData = posts.filter((ele) => ele.title.includes(searchValue));
      dispatch(searchData(filterData));
    } else if (type === selectTypeArray[0].name) {
      const filterData = posts.filter(
        (ele) =>
          ele.title.includes(searchValue) || ele.writer.includes(searchValue)
      );
      dispatch(searchData(filterData));
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
      dispatch(searchData(""));
    }
  }
  const selectTypeArray = [
    {
      value: "all",
      name: "전체",
    },
    {
      value: "writer",
      name: "작성자",
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
}

export default TableSearchBarTwo;
