import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';


const EduLectuererCard = ({lec, setViewDetail, index, setLecCardIndex,lecCardIndex}) => {

  const [display, setDisplay] = useState(true);

  function onClick(index) {
    setLecCardIndex(index)
    setViewDetail(true);
  }

  function handlerSelectType(e) {
    setDisplay((display) => !display);
  }

  function handlerShowType() {
    setDisplay((display) => !display);
  }

  const selectTypeArray = [
    {
      value: "manner",
      name: "신입사원의 매너",
    },
    {
      value: "followership",
      name: "선배와의 관계 형성과 팔로워십",
    },
    {
      value: "cowork",
      name: "협업 방식 및 마인드",
    },
    {
      value: "communication",
      name: "조직 커뮤니케이션 스킬",
    }
  ];
  return (
    <li className='card'>
      <div className="lec_box">
        <div className="img_box">
          <img className="img" alt={lec.name} src={lec.pic} />
        </div>
        <div className="info_box">
          <div className="namebox">
            <span className="name">{lec.name}</span>
            <span className='position'> {lec.position}</span>
          </div>
          <div className='career_box'>
            <span>주요경력</span>
            <span className="career">{lec.career1}</span>
            <span className="career">{lec.career2}</span>
          </div>
          <div className="lecturer_module_box">
            <span>진행중인 모듈</span>
            <div className={display ? "contents-type" : "contents-type on"} onClick={handlerShowType}>
              선택
              <ul className={display ? "type-tab" : "type-tab on"}>
                {selectTypeArray.map((li, index) => (
                  <li
                    className="type-tab-list"
                    key={index}
                    onClick={handlerSelectType}
                  >
                  <Link to="/3/noticeBoard/aboutme">
                  {li.name}
                  </Link>
                </li>
              ))}
              </ul>
          </div>{/* 탭 */}
        </div>{/* 모듈박스 */}
        </div>{/* info_box */}
        <div className="movebtn_box">
          <button className='detail_btn' onClick={()=>onClick(index)}></button>
        </div>
      </div>
    </li>
  );
};

export default EduLectuererCard;