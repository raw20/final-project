import React from "react";

function NoticeDetail({ posts, setContent }) {
  return (
    <div>
      {posts.title}
      <button onClick={() => setContent(true)}>목록보기</button>
    </div>
  );
}

export default NoticeDetail;
