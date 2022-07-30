import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { countView } from "../../../../../app/detailSlice";
import AboutMeDetail from "./AboutMeDetail";
import TableSearchBarTwo from "./TableSearchBarTwo";
const AboutMeTableList = ({ posts, totalPosts, content, setContent }) => {
  const [index, setIndex] = useState();
  const dispatch = useDispatch();
  let count = 0;
  let today = new Date();
  let year = String(today.getFullYear());
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let date = String(today.getDate());
  const todayNow = `${year}.${month}.${date}`;

  function onClick(index) {
    setContent(false);
    setIndex(index);
    dispatch(
      countView({
        id: posts[index].id,
        writer: posts[index].writer,
        title: posts[index].title,
        views: count,
        date: posts[index].date,
        content_text: posts[index].content_text,
        content_img: posts[index].content_img,
        like: posts[index].like,
      })
    );
  }
  return (
    <>
      {content ? (
        <div className="aboutMe_table_area">
          <TableSearchBarTwo />

          <span>
            총<span className="total"> {totalPosts}</span>건
          </span>

          <table className="aboutMe_table">
            <thead>
              <tr>
                <th>NO</th>
                <th>WRITER</th>
                <th>SUBJECT</th>
                <th>VIEWES</th>
                <th>DATE</th>
                <th>LIKE</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((posts, index) => (
                <tr className="content_row" key={index}>
                  <td>{posts.writer === "교육담당자" ? "필독" : posts.id}</td>
                  <td>{posts.writer}</td>
                  <td onClick={() => onClick(index)}>
                    {todayNow === posts.date
                      ? `(NEW)  ${posts.title} `
                      : posts.title}
                  </td>
                  <td>{posts.views}</td>
                  <td>{posts.date}</td>
                  <td>{posts.like}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <AboutMeDetail
            setContent={setContent}
            posts={posts[index]}
            id={posts[index].id}
            writer={posts[index].writer}
            title={posts[index].title}
            views={posts[index].views}
            date={posts[index].date}
            content_text={posts[index].content_text}
            content_img={posts[index].content_img}
          />
        </div>
      )}
    </>
  );
};

export default AboutMeTableList;
