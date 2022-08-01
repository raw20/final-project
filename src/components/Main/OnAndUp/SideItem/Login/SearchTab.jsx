import React, { useState, useId, useReducer } from "react";
import PwModal from "./PwModal";
import { useDispatch, useSelector } from "react-redux";
import userData from "../../../../../userData.json";
import "./css/search.css";
import { userSearch } from "../../../../../app/userSlice";

function SearchTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const user = userData.find((user) => user.name === name);
  const userId = useSelector((state) => state.user.id);
  console.log(userId);
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //이름이 일치하는 사용자가 없는 경우
    if (!user) {
      alert("이름이 일치하지않습니다.");
    }

    // 패스워드가 일치하지 않는 경우
    if (user.number !== number) {
      alert("휴대폰 번호가 일치하지않습니다.");
    }

    dispatch(userSearch({ name: name, number: number }));
  };

  const tabContArr = [
    {
      tabTitle: (
        <div className="search-tab">
          <li
            className={activeIndex === 0 ? "is-active" : ""}
            onClick={() => tabClickHandler(0)}
          >
            아이디 찾기
          </li>
        </div>
      ),
      tabCont: (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div id="tab-content">
            <input
              type="name"
              id="userName"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              id="phoneNumber"
              placeholder="휴대폰 번호를 입력하세요"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button id="idBtn" type="submit">
              회원정보로 찾기
            </button>
          </div>
        </form>
      ),
    },
    {
      tabTitle: (
        <div className="search-tab">
          <li
            className={activeIndex === 1 ? "is-active" : ""}
            onClick={() => tabClickHandler(1)}
          >
            {" "}
            비밀번호 찾기{" "}
          </li>
        </div>
      ),
      tabCont: (
        <div id="tab-content">
          <input type="id" id="userId" placeholder="아이디를 입력하세요" />
          <input type="name" id="userPwName" placeholder="이름을 입력하세요" />
          <input
            type="tel"
            id="phoneNumber"
            placeholder="휴대폰 번호를 입력하세요"
          />
          <div>
            <>
              <button id="pwChange" onClick={modalClose}>
                비밀번호 변경
              </button>
              {modalOpen && <PwModal modalClose={modalClose}></PwModal>}
            </>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="tab-box">
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}

export default SearchTab;
