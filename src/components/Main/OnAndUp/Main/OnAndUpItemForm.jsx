import React from "react";
import { useState } from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/itemForm.css";
import "../../ConnectWith/MainItem/NoticeBoard/css/noticeBoard.css";
import { useEffect } from "react";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";
import { setFooterDisplay } from "../../../../app/footerStateSlice";

function OnAndUpItemForm() {
  const [tabIndex, setTabIndex] = useState();
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const onAndUpMenuData = "/db/onAndUpMenuData.json";
  const { id } = useParams();
  const depName = item[id]?.dep.map((li) => li);
  console.log(depName);
  useEffect(() => {
    (async () => {
      const response = await fetch(onAndUpMenuData);
      const json = await response.json();
      setItem(json);
    })();
    dispatch(headerGnbOpcity("1"));
    dispatch(setFooterDisplay("on"));
  }, []);
  console.log(id);
  function currentIndex(index) {
    setTabIndex(index);
  }

  return (
    <div className="item-form">
      <div className="item-inner">
        <div className="item-img">
          <img src={`${item[id]?.img}`} alt={item[id]?.menu} />
        </div>
        <div className="item-text">
          <div className="item-location">
            {tabIndex === undefined
              ? `Chemiverse On&Up ▶ ${item[id]?.menu} ▶ ${item[id]?.dep[0]} `
              : `Chemiverse On&Up ▶ ${item[id]?.menu} ▶ ${item[id]?.dep[tabIndex]} `}
          </div>
          <div className="item-title">{item[id] ? item[id]?.menu : null}</div>
          <div className="item-contents">
            {item[id] ? item[id]?.explanation : null}
          </div></div>
          {item[id]?.menu !== "교육장 이동" ? (
            <ul className="tab-btn-area">
              {item[id]?.onAndUpSubAddress.map((ele, index) => (
                <NavLink
                  to={`/chemiverseOnUp/${item[id]?.id}/${item[id]?.onAndUpItemAddress}/${index}`}
                  className={({ isActive }) =>
                    isActive ? "tab-btn on" : "tab-btn"
                  }
                >
                  <li
                    className="tab-btn-list"
                    key={index}
                    onClick={() => currentIndex(index)}
                  >
                    {depName[index]}
                  </li>
                </NavLink>
              ))}
            </ul>
          ) : null}

        <div className="item-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default OnAndUpItemForm;