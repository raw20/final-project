import React from "react";
import { useState } from "react";
import EduNoticePage from "./EduNoticePage";
import EduNoticeList from "./EduNoticeList ";
import NoticeWriteBtn from "./NoticeWriteBtn";

function NoticeTable({ posts, writer, setWriter, setPosts }) {
  const [content, setContent] = useState(true);
  const [type, setType] = useState("카테고리");
  const [display, setDisplay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  function onSearch(e) {
    e.preventDefault();
    if (searchValue === null || searchValue === " ") {
      console.log("no data");
    } else if (type === selectTypeArray[0].name) {
      const filterData = posts.filter((ele) =>
        ele.category.includes(searchValue)
      );
      setPosts(filterData);
    } else if (type === selectTypeArray[1].name) {
      const filterData = posts.filter((ele) => ele.title.includes(searchValue));
      setPosts(filterData);
    } else if (type === selectTypeArray[2].name) {
      const filterData = posts.filter((ele) =>
        ele.writer.includes(searchValue)
      );
      setPosts(filterData);
    }
    setSearchValue("");
  }
  function handlerSelectType(e) {
    setType((typeName) => (typeName = e.target.innerText));
    setDisplay((display) => !display);
  }
  function handlerShowType() {
    setDisplay((display) => !display);
  }
  const selectTypeArray = [
    {
      value: "category",
      name: "카테고리",
    },
    {
      value: "title",
      name: "제목",
    },
    {
      value: "writer",
      name: "작성자",
    },
  ];

  return (
    <>
      <form onSubmit={(e) => onSearch(e)}>
        <p className="contents-type" onClick={handlerShowType}>
          {type}
        </p>
        <ul className={display ? "type-tab" : "type-tab on"}>
          {selectTypeArray.map((li, index) => (
            <li key={index} onClick={handlerSelectType}>
              {li.name}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={searchValue}
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
        />
        <button type="submit">검색</button>
      </form>
      <EduNoticeList
        posts={currentPosts(posts)}
        totalPosts={posts.length}
        content={content}
        setContent={setContent}
      ></EduNoticeList>
      {content ? (
        <>
          <EduNoticePage
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          ></EduNoticePage>
          <NoticeWriteBtn writer={writer} setWriter={setWriter} />
        </>
      ) : null}
    </>
  );
}

export default NoticeTable;
