import React from 'react';

const EduNoticeDetail = ({lists,setContent}) => {
  return (
    <div className='edu_detail_wrap'>
      <div className="header">
        <div className="title_area">
          <span className='category'>{lists.category}</span>
          <span className='title'>{lists.title}</span>
        </div>
        <p className='date'>{lists.date}</p>
      </div>
      <div className="edu-detail-main">
        <div className="img_box">
          <img src={lists.content_img} alt={lists.id} />
        </div>
        <div className="text">
          <span>{lists.content_text}</span>
        </div>
      </div>
      <div className="footer">
        <button className="btn" onClick={() => setContent(true)}>
          목록보기
        </button>
      </div>
      
    </div>
  );
};

export default EduNoticeDetail;