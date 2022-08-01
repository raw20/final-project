import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/itemForm.css";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";
import { setFooterDisplay } from "../../../../app/footerStateSlice";

function ConnectWthItemForm() {
  const dispatch = useDispatch();
  const [item, setItem] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(connenctWithMenuData);
      const json = await response.json();
      setItem(json);
    })();
    dispatch(headerGnbOpcity("1"));
    dispatch(setFooterDisplay("on"));
  });
  return (
    <div className="connectwith-item-form">
      <div className="connectwith-item-inner">
        <div className="title-area">
          <div className="connectwith-item-img">
            <img src={`${item[id]?.main_img}`} alt={item[id]?.title} />
          </div>
          {/* img */}
          <div className="connectwith-item-text">
            <div className="connectwith-item-location">
              {`Chemiverse Connect With▶ ${item[id]?.title} `}
            </div>
            <div className="connectwith-item-title">
              {item[id]?.title}
              <span className="connectwith-item-eng-title">
                {item[id]?.eng_title}
              </span>
            </div>
            {item[id]?.contents.split("\n").map((line) => {
              return (
                <div className="connectwith-item-contents">
                  {line}
                  <br />
                </div>
              );
            })}
          </div>
          {/* text */}
        </div>
        {/* title-area */}
        <div className="connectwith-item-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ConnectWthItemForm;
