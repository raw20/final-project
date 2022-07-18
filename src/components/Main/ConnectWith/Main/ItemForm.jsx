import React, { useState, useEffect } from "react";
//import { useState } from "react";
import { useLocation } from "react-router-dom";
import component from "./TabComponent";
import "./css/itemForm.css";
function ItemForm() {
  const { state } = useLocation(0);
  const [item, setItem] = useState([]);
  const itemData = "/db/onAndUpMenuData.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  },[]);

  if (!state) {
    item.map((data) => {

      //console.log(state)
      console.log(data.address)
    })
  }
  return (
    <div className="item-form">
      {/* <div className="item-inner">
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
      </div> */}
    </div>
  );
}

export default ItemForm;
