import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TablePagenation from "./TablePagenation";
import AboutMeTableList from "./AboutMeTableList";
import WriteBtn from "./WriteBtn";

function AboutMeTable({ posts, writer, setWriter }) {
  const [content, setContent] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const searchData = useSelector((state) => state.table.AboutMeData);
  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  return (
    <>
      {searchData.length > 0 ? (
        <AboutMeTableList
          posts={currentPosts(searchData)}
          totalPosts={searchData.length}
          content={content}
          setContent={setContent}
        ></AboutMeTableList>
      ) : (
        <AboutMeTableList
          posts={currentPosts(posts)}
          totalPosts={posts.length}
          content={content}
          setContent={setContent}
        ></AboutMeTableList>
      )}

      {content ? (
        <>
          <TablePagenation
            postsPerPage={postsPerPage}
            totalPosts={
              searchData.length > 0 ? searchData.length : posts.length
            }
            paginate={setCurrentPage}
          ></TablePagenation>
          <WriteBtn writer={writer} setWriter={setWriter} />
        </>
      ) : null}
    </>
  );
}

export default AboutMeTable;
