import React from "react";
import { useState } from "react";

import EduNoticePage from "./EduNoticePage";
import EduNoticeList from "./EduNoticeList ";
import NoticeWriteBtn from "./NoticeWriteBtn";

function NoticeTable({ posts, writer, setWriter }) {
  const [content, setContent] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  console.log("writer", writer);
  return (
    <>
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
