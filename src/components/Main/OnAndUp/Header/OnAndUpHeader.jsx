import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
import { MdSearch } from "react-icons/md";
function OnAndUpHeader() {
  const [item, setItem] = useState([]);
  const onAndUpMenuData = "/db/onAndUpMenuData.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(onAndUpMenuData);
      const json = await response.json();
      setItem(json);
    })();
  }, []);
  console.log("header-link", item);
  return (
    <div id="header">
      <Link className="logo" to="/chemiverseOnUp">
        logo
      </Link>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item) => (
            <li>
              <NavLink
                to={`/chemiverseOnUp/${item.onAndUpItemAddress}`}
                key={item.id}
                state={{
                  id: item.id,
                  menu: item.menu,
                  dep: item.dep,
                  address: item.onAndUpItemAddress,
                }}
              >
                {item.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-item">
        <ul className="util">
          <li id="mypage">
            <Link to={`/chemiverseOnUp/mypage`}>마이페이지</Link>
          </li>
          <li id="login">
            <Link to={`/chemiverseOnUp/login`}>로그인</Link>
          </li>
          <li id="search">
            <MdSearch />
          </li>
          <li id="tab-btn">탭버튼</li>
        </ul>
      </div>
    </div>
  );
}

export default OnAndUpHeader;
