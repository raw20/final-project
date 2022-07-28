import React from 'react';

const EduLecturerDetail = ({setViewDetail, lecData,lecCardIndex}) => {
  const data = lecData[lecCardIndex]
  return (
    <div className='detail_box'>
      <div className="profile">
        <div className="img_box">
          <img src={data.detail_pic} alt={data.name} />
        </div>
        <div className="detail_info">
          <span className='position'>{data.position}</span>
          <h1 className='name'>{data.name}</h1>
          <ul className='career_box'>
            {
              data.detail_career.map((item,index)=>(<li className='career_list' key={index}>{item}</li>))
            }
          </ul>
        </div>{/* info */}
      </div>{/* profile */}
      <div className="video_box">
        <iframe className='lec_video' width="560" height="315" src={data.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="subinfo_box">
        <div className='subinfo_one'>
          <span className='edu_title'>학력 및 자격, 저술 활동</span>
          <ul className='edu_box'>
              {
                data.detail_edu.map((item,index)=>(<li className='edu_list' key={index}>{item}</li>))
              }
          </ul>
        </div>
        <div className='subinfo_two'>
          <span className='dlec_title'>해당 분야 주요 출강 이력</span>
          <ul className='dlec_box'>
              {
                data.detail_lec.map((item,index)=>(<li className='dlec_list' key={index}>{item}</li>))
              }
          </ul>
        </div>
      </div>{/* subinfo */}
      <button className='list_btn' onClick={()=>setViewDetail(false)}>돌아가기</button>
    </div>
  );
};

export default EduLecturerDetail;