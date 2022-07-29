import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./css/tableSearchBar.css";

function TableSearchBarTwo({ posts, copyPosts, setPosts }) {
  const [display, setDisplay] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("전체");
  const listdata = useSelector((state) => state.item.data);
  console.log("listdata : ", listdata.length, "posts:", posts.length);
  function onSearch(e) {
    e.preventDefault();
    if (searchValue === null || searchValue === " ") {
      console.log("no data");
    } else if (type === selectTypeArray[1].name) {
      console.log("1111");
      const filterData = listdata.filter((ele) =>
        ele.writer.includes(searchValue)
      );
      console.log(filterData);
      setPosts(filterData);
    } else if (type === selectTypeArray[2].name) {
      const filterData = listdata.filter((ele) =>
        ele.title.includes(searchValue)
      );
      setPosts(filterData);
    } else if (type === selectTypeArray[0].name) {
      const filterData = listdata.filter(
        (ele) =>
          ele.title.includes(searchValue) || ele.writer.includes(searchValue)
      );
      setPosts(filterData);
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
      setPosts(listdata);
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
