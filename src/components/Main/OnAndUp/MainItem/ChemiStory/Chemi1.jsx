import React, { useEffect, useState } from "react";
import './css/chemi.css'
import SmallSelectBox from '../../Main/SmallSelectBox';

function Chemi1() {
  const options = [
    { value: '0', label: 'Chemistory란?', address: 'chemistory' },
    { value: '1', label: '작성하기', address: 'chemistory' },
    { value: '2', label: '성찰저널', address: 'chemistory' },
    { value: '3', label: '자기개발목표', address: 'chemistory' }
]
  return (
    <div className="chemi-wrap1">
      <SmallSelectBox options={options} placeholder={"Chemistory란?"} />

      <main>
        <div className="title">
          <h2>Chemi Story란?</h2>
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
        <div className="title">
          <h3>사용방법</h3>
        </div>
        <div className="box">
            <p>
                컨텐츠
            </p>
        </div>
      
      </main>
    </div>
  );
}

export default Chemi1;
