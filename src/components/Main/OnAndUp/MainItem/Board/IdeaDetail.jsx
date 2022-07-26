import React from "react";
import "./css/style.css";
import "./css/noticeDetail.css";
function NoticeDetail({ posts, setContent }) {
  return (
    <div className="notice-detail-wrap">
      <div className="notice-detail-header">
        <div className="notice-detail-category">{posts.category}</div>
        <h1 className="notice-detail-title"> {posts.title}</h1>
      </div>

      <div className="notice-detail-main">
        <p className="notice-detail-date">작성일 : {posts.date}</p>
        <div className="notice-detail-img">
          <img src={posts.content_img} alt={posts.id} />
          <div className="notice-detail-text">{posts.content_text}</div>
        </div>
      </div>
      <div className="notice-detail-footer">
        <div className="notice-detail-file">첨부파일 {posts.file}</div>
        <button className="notice-btn" onClick={() => setContent(true)}>
          목록보기
        </button>
      </div>
    </div>
  );
}

export default NoticeDetail;
