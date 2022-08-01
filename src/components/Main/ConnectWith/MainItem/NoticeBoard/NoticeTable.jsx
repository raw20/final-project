import React from "react";
import { useState } from "react";
import TablePagenation from "./TablePagenation";
import NoticeTableList from "./NoticeTableList";

function NoticeTable({ posts, copyPosts, setPosts }) {
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
      <NoticeTableList
        posts={currentPosts(posts)}
        totalPosts={posts.length}
        content={content}
        setContent={setContent}
        copyPosts={copyPosts}
        setPosts={setPosts}
      ></NoticeTableList>
      {content ? (
        <>
          <TablePagenation
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
            page={currentPage}
          ></TablePagenation>
        </>
      ) : null}
    </>
  );
}

export default NoticeTable;
