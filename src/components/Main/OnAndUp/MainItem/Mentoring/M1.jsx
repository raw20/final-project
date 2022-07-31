import React from "react";
import './css/M.css'
import SmallSelectBox from '../../Main/SmallSelectBox';
function M1() {
  const options = [
    { value: '0', label: '멘토링이란?', address: 'mentoring' },
    { value: '1', label: '계획서작성', address: 'mentoring' },
    { value: '2', label: '활동내용', address: 'mentoring' },

]
  return (
    
    <div className="mento-wrap1">
      <SmallSelectBox options={options} placeholder={"멘토링이란?"} />
      <main>
        <div className="title">
          <h2>멘토링이란?</h2>
          <h3>목적</h3>
        </div>
        <ul className="boxlist">
          <li className="box">
            <div className="col-box"></div>
            <div className="img-box"></div>
            <p>
              조직의 성과는 리더가 리더십을 잘 발휘하는 것과 리더의 지휘를 잘
              따르고 보좌하는 팔로워십에서 나온다.
            </p>
          </li>
          <li className="box">
          <div className="col-box light"></div>
            <div className="img-box"></div>
            <p>
              효과적인 팔로워십을 발휘할 수 있는 능력은 이후 효과적인 리더십을
              발휘하는 것의 원천이 된다.
            </p>
          </li>
          <li className="box">
          <div className="col-box"></div>
            <div className="img-box"></div>
            <p>
              적극적이고 주도적인 팔로워십을 발휘함으로써 조직 내 신뢰받는
              핵심인재가 된다.
            </p>
          </li>
        </ul>
       
      </main>
    </div>
  );
}

export default M1;
