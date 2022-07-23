import React from "react";
import { useState } from "react";
import NoticeTablePagenation from "./NoticeTablePagenation";
import NoticeTableList from "./NoticeTableList ";
import NoticeWriteBtn from "./NoticeWriteBtn";
import NoticeTableSearchBar from "./NoticeTableSearchBar";

function NoticeTable({ posts, writer, setWriter, setPosts }) {
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
      <NoticeTableSearchBar posts={posts} setPosts={setPosts} />
      <NoticeTableList
        posts={currentPosts(posts)}
        totalPosts={posts.length}
        content={content}
        setContent={setContent}
      ></NoticeTableList>
      {content ? (
        <>
          <NoticeTablePagenation
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          ></NoticeTablePagenation>
          <NoticeWriteBtn writer={writer} setWriter={setWriter} />
        </>
      ) : null}
    </>
  );
}

export default NoticeTable;
