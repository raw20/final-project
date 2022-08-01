import React from "react";
import { useState } from "react";
import NoticeDetail from "./IdeaDetail";
import TableSearchBar from "./TableSearchBar";
const NoticeTableList = ({ posts, totalPosts, content, setContent, copyPosts, setPosts }) => {
  const [index, setIndex] = useState();
  function onClick(index) {
    setContent(false);
    setIndex(index);
  }
  return (
    <>
      {content ? (
        <div className="b-notice_table_area">
          <TableSearchBar posts={posts} copyPosts={copyPosts} setPosts={setPosts} />
          <span>
            총<span className="total"> {totalPosts}</span>건
          </span>
          <table className="b-notice_table">
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
                  <tr className="b-content_row" key={index}>
                    <td>{posts.id}</td>
                    <td>{posts.category}</td>
                    <td onClick={() => onClick(index)}>{posts.title}</td>
                    <td>{posts.date}</td>
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
