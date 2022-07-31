import React from "react";
import { useState } from "react";
import NoticeDetail from "./NoticeDetail";
import TableSearchBar from "./TableSearchBar";
const NoticeTableList = ({
  posts,
  totalPosts,
  content,
  setContent,
  copyPosts,
  setPosts,
}) => {
  const [index, setIndex] = useState();
  function onClick(index) {
    setContent(false);
    setIndex(index);
  }
  return (
    <>
      {content ? (
        <div className="notice_table_area">
          <TableSearchBar
            posts={posts}
            copyPosts={copyPosts}
            setPosts={setPosts}
          />
          <span>
            총<span className="total"> {totalPosts}</span>건
          </span>
          <table className="notice_table">
            <thead>
              <tr>
                <th>NO</th>
                <th>CATEGORY</th>
                <th>SUBJECT</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {totalPosts === 0 ? (
                <h2>검색결과 없음</h2>
              ) : (
                posts.map((posts, index) => (
                  <tr className="content_row" key={index}>
                    <td className="td-id">{posts.id}</td>
                    <td className="td-cat">{posts.category}</td>
                    <td className="td-title" onClick={() => onClick(index)}>{posts.title}</td>
                    <td className="td-date">{posts.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <NoticeDetail setContent={setContent} posts={posts[index]} />
        </div>
      )}
    </>
  );
};

export default NoticeTableList;
