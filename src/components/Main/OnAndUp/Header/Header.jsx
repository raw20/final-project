import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
function Header(props) {
  const [item, setItem] = useState([]);
  const itemData = "./db/mainItem.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  });
  return (
    <>
      <div className="logo">logo</div>
      <div className="main-item">
        <ul className="gnb">
          {item.map((ele) => (
            <li>
              <NavLink to={`/chemiverseOnUp/${ele.address}`}>
                {ele.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-item">
        <ul className="util">
          <li>
            <NavLink to={`/chemiverseOnUp/mypage`}>마이페이지</NavLink>
          </li>
          <li>
            <NavLink to={`/chemiverseOnUp/login`}>로그인</NavLink>
          </li>
        </ul>
      </div>
      <div className="side-tab">탭버튼</div>
    </>
  );
}

export default Header;
