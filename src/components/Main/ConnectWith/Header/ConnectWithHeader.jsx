import React, { useEffect, useState } from "react";
import "./css/header.css";
import { Link, NavLink } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { headerGnbOpcity, onAndUp } from "../../../../app/headerStateSlice";
function ConnectWithHeader() {
  const [item, setItem] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const dispatch = useDispatch();
  const opacity = useSelector((state) => state.headerLayout.opacity);

  useEffect(() => {
    (async () => {
      const response = await fetch(connenctWithMenuData);
      const json = await response.json();
      setItem(json);
      console.log("head-opacity", opacity);
    })();
  }, []);
  return (
    <div
      className={
        opacity === 1 ? "connectwith-header off" : "connectwith-header"
      }
    >
      <Link
        to="/"
        className="logo"
        onClick={() => dispatch(headerGnbOpcity("0"))}
      >
        logo
      </Link>
      <div className="main-item">
        <ul className={opacity === "0" ? "gnb off" : "gnb"}>
          {item.map((item, index) => (
            <li>
              <NavLink
                to={`/item/${item.address}/${item.id}`}
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
