import React from "react";
import { useState } from "react";
import NoticeDetail from "./NoticeDetail";

const EduNoticeList = ({ posts, totalPosts, content, setContent }) => {
  const [index, setIndex] = useState();
  function onClick(index) {
    setContent(false);
    setIndex(index);
  }
  return (
    <>
      {content ? (
        <div className="table_area">
          <span>
            총<span className="total"> {totalPosts}</span>건
          </span>
          <table className="edu_table">
            <thead>
              <tr>
                <th>NO</th>
                <th>CATEGORY</th>
                <th>SUBJECT</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((posts, index) => (
                <tr className="content_row">
                  <td>{posts.id}</td>
                  <td>{posts.category}</td>
                  <td onClick={() => onClick(index)}>{posts.title}</td>
                  <td>{posts.date}</td>
                </tr>
              ))}
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

export default EduNoticeList;
