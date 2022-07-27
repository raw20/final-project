import React from "react";
import { useState } from "react";
import TablePagenation from "./TablePagenation";
import AboutMeTableList from "./BoardTableList";
import WriteBtn from "./WriteBtn";

function BoardTable({ posts, copyPosts, writer, setWriter, setPosts }) {
  const [content, setContent] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <>
      <AboutMeTableList posts={currentPosts(posts)} totalPosts={posts.length} content={content} setContent={setContent} copyPosts={copyPosts} setPosts={setPosts}></AboutMeTableList>
      {content ? (
        <>
          <TablePagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></TablePagenation>
          <WriteBtn writer={writer} setWriter={setWriter} />
        </>
      ) : null}
    </>
  );
}

export default BoardTable;
