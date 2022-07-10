import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { MdSearch } from "react-icons/md";
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
      <NavLink className="logo" to={`/chemiverseOnUp`}>
        logo
      </NavLink>

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
          <li id="mypage">
            <NavLink to={`/chemiverseOnUp/mypage`}>마이페이지</NavLink>
          </li>
          <li id="login">
            <NavLink to={`/chemiverseOnUp/login`}>로그인</NavLink>
          </li>
          <li id="search">
            <MdSearch />
          </li>
          <li id="tab-btn">탭버튼</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
