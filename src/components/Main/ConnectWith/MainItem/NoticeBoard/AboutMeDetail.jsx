import React, { useState } from "react";
import "./css/style.css";
import "./css/aboutMeDetail.css";
import { MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../../../../../app/detailSlice";

function AboutMeDetail({ posts, setContent, id }) {
  const favListColor = [{ color: "#f20" }, { color: "#ccc" }];
  const [likes, setLikes] = useState("1");
  const likeValue = useSelector((state) => state.item.likes);
  const dispatch = useDispatch();
  function handlerLikeFnc(e) {
    e.preventDefault();
    setLikes(likes === "1" ? "0" : "1");
    dispatch(
      addLike({
        id: posts.id,
        title: posts.title,
        writer: posts.writer,
        content_text: posts.content_text,
        content_img:
          "http://conference.exc.co.kr/chemiverse/assets/img/img-board-view.png",
        file: "N",
        like: parseInt(likes),
        views: posts.views,
        date: posts.date,
      })
    );
  }
  return (
    <div className="aboutMe-wrap">
      <div className="aboutMe-header">
        <div className="aboutMe-title-area">
          <h1 className="aboutMe-title"> {posts.title}</h1>
        </div>
        <div className="aboutMe-sub">
          <p className="aboutMe-date">작성일 : {posts.date}</p>
          <div className="aboutMe-sub-sub">
            <p className="aboutMe-views">조회수 : {posts.views}</p>
            <p className="aboutMe-like">좋아요 : {posts.like}</p>
          </div>
        </div>
      </div>
      <div className="aboutMe-main">
        <div className="aboutMe-img">
          <img src={posts.content_img} alt={posts.id} />
          <div className="aboutMe-text">{posts.content_text}</div>
          <button className="tab-like" onClick={handlerLikeFnc}>
          좋아요
          <MdFavorite className="heart" style={favListColor[likes]} />
        </button>
        </div>
      </div>
      <div className="aboutMe-footer">
        <button className="aboutMe-list-btn" onClick={() => setContent(true)}>
          목록보기
        </button>
      </div>
    </div>
  );
}

export default AboutMeDetail;
