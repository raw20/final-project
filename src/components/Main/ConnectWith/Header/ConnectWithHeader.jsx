import React, { useEffect, useState } from "react";
import "./css/header.css";
import { Link, NavLink } from "react-router-dom";
import { IoCaretForwardOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { headerGnbOpcity, onAndUp } from "../../../../app/headerStateSlice";
function ConnectWithHeader({ opacity, LoginAuth }) {
  const [item, setItem] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(connenctWithMenuData);
      const json = await response.json();
      setItem(json);
      console.log("login auth : ", LoginAuth);
    })();
  }, []);
  return (
    <div
      className={
        opacity === "0" ? "connectwith-header off" : "connectwith-header"
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
            <li key={item.id}>
              <NavLink
                to={
                  item.id === 3
                    ? `/${item.id}/${item.address}/notice`
                    : `/${item.id}/${item.address}`
                }
                className={({ isActive }) =>
                  isActive ? "item-menu on" : "item-menu"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={LoginAuth === true ? "/chemiverseOnUp" : "/chemiverseOnUp/login"}
        className="link"
        onClick={() => {
          dispatch(onAndUp("false"));
        }}
      >
        Chemiverse On & Up <IoCaretForwardOutline />
      </Link>
      <Link to="/headertab" className="connect-with-header-tab">
        내비
      </Link>
    </div>
  );
}

export default ConnectWithHeader;
