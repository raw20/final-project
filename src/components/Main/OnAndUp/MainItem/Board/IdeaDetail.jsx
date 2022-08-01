import React from "react";
import "./css/style.css";
import "./css/noticeDetail.css";
function NoticeDetail({ posts, setContent }) {
  return (
    <div className="b-notice-detail-wrap">
      <div className="b-notice-detail-header">
        <div className="b-notice-detail-category">{posts.category}</div>
        <h1 className="b-notice-detail-title"> {posts.title}</h1>
      </div>

      <div className="b-notice-detail-main">
        <p className="b-notice-detail-date">작성일 : {posts.date}</p>
        <div className="b-notice-detail-img">
          <img src={posts.content_img} alt={posts.id} />
          <div className="b-notice-detail-text">{posts.content_text}</div>
        </div>
      </div>
      <div className="b-notice-detail-footer">
        <div className="b-notice-detail-file">첨부파일 {posts.file}</div>
        <button className="b-notice-btn" onClick={() => setContent(true)}>
          목록보기
        </button>
      </div>
    </div>
  );
}

export default NoticeDetail;
