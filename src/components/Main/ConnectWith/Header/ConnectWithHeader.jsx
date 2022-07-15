import React from "react";
import "./css/header.css";
import { Link, NavLink } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
function ConnectWithHeader() {
  const [item, setItem] = useState([]);
  const itemData = "./db/connenctWithMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  });
  return (
    <div className="header">
      <Link to="/" className="logo">
        logo
      </Link>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item) => (
            <li>
              <NavLink
                to={`/item/${item.address}`}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? "item-menu on" : "item-menu"
                }
                state={{
                  id: item.id,
                  title: item.title,
                  img: item.main_img,
                  address: item.address,
                  contents: item.contents,
                }}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/chemiverseOnUp" className="link">
        Chemiverse On & Up <IoCaretForwardOutline />
      </Link>
    </div>
  );
}

export default ConnectWithHeader;
