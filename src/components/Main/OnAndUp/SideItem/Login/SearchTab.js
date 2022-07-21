import React, { useState } from 'react';
import PwModal from './PwModal'
import './css/search.css';

function SearchTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const [modalOpen, setModalOpen] = useState(false)
  const modalClose = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen)
  }

  const tabContArr = [
    {
      tabTitle: (
        <div className='search-tab'>
          <li className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}> 아이디 찾기</li>
        </div>
      ),
      tabCont: (
        <div id='tab-content'>
          <input type="name" id="userName" placeholder='이름을 입력하세요' />
          <input type="tel" id='phoneNumber' placeholder='휴대폰 번호를 입력하세요' />
          <button id='idBtn' type="submit">회원정보로 찾기</button>
        </div>

      )
    },
    {
      tabTitle: (
        <div className='search-tab'>
          <li className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}> 비밀번호 찾기 </li>
        </div>
      ),
      tabCont: (
        <div id='tab-content'>
          <input type="id" id="userId" placeholder='아이디를 입력하세요' />
          <input type="name" id="userPwName" placeholder='이름을 입력하세요' />
          <input type="tel" id='phoneNumber' placeholder='휴대폰 번호를 입력하세요' />
          {/*  <button id='pwBtn' type="submit"> 비밀번호 변경</button>  */}
          <div>
            <>
              <button id='pwChange' onClick={modalClose}>비밀번호 변경</button>
              {modalOpen && <PwModal modalClose={modalClose}></PwModal>}
            </>

          </div>
        </div>
      )
    }
  ];
  return (
    <div className='tab-box'>
      {/*       <div className='tab-title'>ID/FW찾기</div> */}
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle
        })}
      </ul>
      <div>
        {tabContArr[activeIndex].tabCont}
      </div>
    </div>
  );
}

export default SearchTab;