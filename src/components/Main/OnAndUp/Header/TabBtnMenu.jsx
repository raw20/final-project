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
    })();
  }, []);
  return (
    <div className="btn-menu-wrap">
      <div className="btn-menu">
        <ul className="btn-menu-item">
          {item.map((item, index) => (
            <li className="btn-menu-depth1" key={index}>
              <NavLink
                to={`/chemiverseOnUp/${item.id}/${item.onAndUpItemAddress}/0`}
                state={{
                  id: item.id,
                  menu: item.menu,
                  dep: item.dep,
                  address: item.address,
                }}
                className={"btn-menu-box"}
              >
                {item.menu}
              </NavLink>
              <ul className="btn-menu-depth2">
                {item.dep.map((ele, index) => (
                  <li key={index} className="btn-menu-depth2-text">
                    <NavLink
                      to={`/chemiverseOnUp/${item.id}/${item.onAndUpItemAddress}/${index}`}
                      state={{
                        id: item.id,
                        menu: item.menu,
                        dep: item.dep,
                        address: item.onAndUpItemAddress,
                      }}
                      className={"btn-menu-depth2-item"}
                    >
                      {ele}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <NavLink to={-1} className="goback">
        <AiFillCloseSquare />
      </NavLink>
      <NavLink to={`/`} className="homepage">
        Chemiverse Connect With ▶
      </NavLink>
      <span className="img-balloon">열기구</span>
    </div>
  );
}

export default TabBtnMenu;
