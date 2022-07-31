import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";

function TabBtnMenu() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const itemData = "/db/onAndUpMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
      dispatch(headerGnbOpcity("2"));
    })();
  }, []);

  return (
    <div className="btn-menu-wrap">
      {item.map((li) => (
        <div className="btn-menu">
          <span className="btn-menu-depth1">{li.menu}</span>
          <ul>
            <NavLink
              to={`/chemiverseOnUp/item/${li.address}`}
              key={li.id}
              className={({ isActive }) =>
                isActive ? "btn-menu-box on" : "btn-menu-box"
              }
              state={{
                id: li.id,
                menu: li.menu,
                dep: li.dep,
                address: li.address,
              }}
            >
              {li.dep.map((ele) => (
                <li className="btn-menu-depth2">{ele}</li>
              ))}
            </NavLink>
          </ul>
        </div>
      ))}
      <NavLink to={-1} className="goback">
        <AiFillCloseSquare />
      </NavLink>
      <span className="img-balloon">열기구</span>
      <span className="bottom-logo">로고</span>
    </div>
  );
}

export default TabBtnMenu;
