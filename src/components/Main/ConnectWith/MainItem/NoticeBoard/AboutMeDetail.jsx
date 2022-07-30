import React, { useState } from "react";
import "./css/style.css";
import "./css/aboutMeDetail.css";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addLike } from "../../../../../app/detailSlice";

function AboutMeDetail({
  posts,
  setContent,
  id,
  writer,
  title,
  views,
  date,
  content_text,
  content_img,
}) {
  const favListColor = [{ color: "#ccc" }, { color: "#f20" }];
  const [likes, setLikes] = useState("1");
  const dispatch = useDispatch();
  function handlerLikeFnc(e) {
    e.preventDefault();
    setLikes(likes === "1" ? " 0" : "1");
    dispatch(
      addLike({
        id,
        writer,
        title,
        views,
        date,
        content_text,
        content_img,
        like: likes,
      })
    );
  }
  return (
    <div className="aboutMe-wrap">
      <div className="aboutMe-header">
        <div className="aboutMe-category">{posts.category}</div>
        <h1 className="aboutMe-title"> {posts.title}</h1>
      </div>

      <div className="aboutMe-main">
        <div className="aboutMe-sub">
          <p className="aboutMe-date">작성일 : {posts.date}</p>
          <p className="aboutMe-views">조회수 : {posts.views}</p>
          <p className="aboutMe-like">좋아요 : {posts.like}</p>
        </div>
        <div className="aboutMe-img">
          <img src={posts.content_img} alt={posts.id} />
          <div className="aboutMe-text">{posts.content_text}</div>
        </div>
      </div>
      <div className="aboutMe-footer">
        <div className="aboutMe-file">첨부파일 {posts.file}</div>
        <button className="notice-btn" onClick={() => setContent(true)}>
          목록보기
        </button>
        <button className="notice-btn tab-like" onClick={handlerLikeFnc}>
          좋아요
          <MdFavorite
            className="heart"
            style={favListColor[parseInt(posts.like)]}
          />
        </button>
      </div>
    </div>
  );
}

export default AboutMeDetail;
