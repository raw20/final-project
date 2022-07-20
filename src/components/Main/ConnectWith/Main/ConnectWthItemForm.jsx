import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import component from "./TabComponent";
import "./css/itemForm.css";
import { useEffect } from "react";
function ConnectWthItemForm() {
  const { state } = useLocation(0);
  const [data, setData] = useState([]);
  const mainData = "./db/connenctWithMenuData.json";

  const getDataJson = async () => {
    const json = await (await fetch(mainData)).json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    getDataJson();
  }, []);
  return (
    <div className="item-form">
      <div className="item-inner">
        <div className="item-img">
          <img src={`${state.img}`} alt={state.title} />
        </div>
        <div className="item-text">
          <div className="item-location">
            {`Connect With Me ▶ ${state.title} `}
          </div>
          <div className="item-title">{state.title}</div>
          <div className="item-contents">{state.contents}</div>
        </div>
        <div className="item-box">{component[state.id].content[0]}</div>
      </div>
    </div>
  );
}

export default ConnectWthItemForm;
