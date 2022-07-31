import React from "react";
import { useState } from "react";
import TablePagenation from "./TablePagenation";
import AboutMeTableList from "./AboutMeTableList";
import WriteBtn from "./WriteBtn";
import { useSelector } from "react-redux";

function Table({ posts, writer, setWriter, setPosts }) {
  const [content, setContent] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const searchResult = useSelector((state) => state.table.AboutMeData);
  console.log("search data", searchResult);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  return (
    <>
      <AboutMeTableList
        posts={
          searchResult.length > 0
            ? currentPosts(searchResult)
            : currentPosts(posts)
        }
        totalPosts={searchResult.length > 0 ? searchResult.lengt : posts.length}
        content={content}
        setContent={setContent}
      ></AboutMeTableList>
      {content ? (
        <>
          <TablePagenation
            postsPerPage={postsPerPage}
            totalPosts={
              searchResult.length > 0 ? searchResult.length : posts.length
            }
            paginate={setCurrentPage}
          ></TablePagenation>
          <WriteBtn writer={writer} setWriter={setWriter} />
        </>
      ) : null}
    </>
  );
}

export default Table;
