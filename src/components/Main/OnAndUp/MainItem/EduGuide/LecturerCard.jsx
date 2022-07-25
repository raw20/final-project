import React from 'react';
import { Link } from 'react-router-dom';

const LectuererCard = ({lec}) => {
  return (
    <li className='card'>
      <div className="lec_box">
        <div className="img_box">
          <img className="img" alt={lec.name} src={lec.pic} />
        </div>
        <div className="info_box">
          <div className="namebox">
            <span className="name">{lec.name}</span>
            <span> {lec.position}</span>
          </div>
          <div className='career_box'>
          <span>주요경력</span>
          <span className="career">{lec.career1}</span>
          <span className="career">{lec.career2}</span>
        </div>
        <div className="module_box">
          <span>진행중인 모듈</span>
          <select name="" id="">
            <option value="" disabled selected hidden>선택</option>
            <option value="">신입사원의 매너</option>
            <option value="">선배와의 관계 형성과 팔로워십</option>
            <option value="">협업 방식 및 마인드</option>
            <option value="">조직 커뮤니케이션 스킬</option>
          </select>
        </div>
        </div>
        
      </div>
    </li>
  );
};

export default LectuererCard;