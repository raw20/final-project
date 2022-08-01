import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFooterDisplay } from "../../../../app/footerStateSlice";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";
import "./css/HeaderTab.css";

function HeaderTab() {
  const [item, setItem] = useState([]);
  const itemData = "/db/connenctWithMenuData.json";
  const dispatch = useDispatch();
  dispatch(headerGnbOpcity("2"));
  dispatch(setFooterDisplay("off"));
  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  }, []);
  return (
    <div className="HeaderTab-wrap">
      <div className="logo">logo</div>
      <NavLink to={-1} className="HeaderTab_close">
        close
      </NavLink>
      {item.map((li) => (
        <ul className="HeaderTab-menu">
          <NavLink
            to={
              li.id === 3
                ? `/${li.id}/${li.address}/notice`
                : `/${li.id}/${li.address}`
            }
            key={li.id}
            className={"HeaderTab-menu-link"}
            state={{
              id: li.id,
              title: li.title,
              eng_title: li.eng_title,
              contents: li.contents,
            }}
          >
            <li>{li.title}</li>
          </NavLink>
        </ul>
      ))}
      <NavLink to={`/chemiverseOnUp`} className="Go-ChemiverseOnUp">
        <img
          className="Chmeiverse-img"
          src={process.env.PUBLIC_URL + "/img/img-login.png"}
          alt="케미버스"
        />
        <span className="Go-ChemiverseOnUp-text">CHMIVERSE ON & UP ▶</span>
      </NavLink>
    </div>
  );
}
export default HeaderTab;
