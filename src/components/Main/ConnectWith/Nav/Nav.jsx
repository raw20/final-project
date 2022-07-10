import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/nav.css";
function Nav() {
  const [data, setData] = useState([]);
  const mainData = "./db/mainData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(mainData);
      const json = await response.json();
      setData(json);
    })();
  });
  return (
    <div id="nav">
      <ul>
        {data.map((title) => (
          <li key={title.id}>
            <NavLink
              to={`/${title.address}`}
              className={({ isActive }) =>
                isActive ? "navList on" : "navList"
              }
            >
              {title.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
