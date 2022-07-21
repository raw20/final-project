import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function TabBtnMenu() {
  const [item, setItem] = useState([]);
  const itemData = "/db/onAndUpMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  }, []);
  return (
    <div className="btn-menu-wrap">
      {item.map((li) => (
        <>
          <div className="btn-menu">
            <span className="btn-menu-li">{li.menu}</span>
            <ul className="depth1">
              <NavLink
                to={`/chemiverseOnUp/item/${li.address}`}
                key={li.id}
                className={({ isActive }) => (isActive ? "item-menu on" : "item-menu")}
                state={{
                  id: li.id,
                  menu: li.menu,
                  dep: li.dep,
                  address: li.address,
                }}
              >
                {li.dep.map((ele) => (
                  <li className="depth1Li">{ele}</li>
                ))}
              </NavLink>
            </ul>
          </div>
        </>
      ))}
      <img style={{ width: "100px", height: "100px" }} src="/public/img/logo.png" alt="" />
    </div>
  );
}

export default TabBtnMenu;
