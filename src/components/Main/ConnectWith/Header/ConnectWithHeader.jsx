import React from "react";
import "./css/header.css";
import { Link, NavLink } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAndUp } from "../../../../app/headerStateSlice";
function ConnectWithHeader() {
  const [item, setItem] = useState([]);
  const itemData = "./db/connenctWithMenuData.json";
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  }, []);
  return (
    <div className="header">
      <Link to="/" className="logo">
        logo
      </Link>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item, index) => (
            <li>
              <NavLink
                to={`/${item.address}`}
                key={item.id}
                className={({ isActive }) => (isActive ? "item-menu on" : "item-menu")}
                state={{
                  id: item.id,
                  title: item.title,
                  img: item.main_img,
                  address: item.address,
                  contents: item.contents,
                  index: index,
                }}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/chemiverseOnUp"
        className="link"
        onClick={() => {
          dispatch(onAndUp("false"));
        }}
      >
        Chemiverse On & Up <IoCaretForwardOutline />
      </Link>
    </div>
  );
}

export default ConnectWithHeader;
