import React from "react";
//import { useState } from "react";
import { useLocation } from "react-router-dom";
//import component from "../../OnAndUp/Main/TabComponent";
import "./css/itemForm.css";
function ItemForm() {
  const { state } = useLocation(0);
  return (
    <div className="item-form">
      <div className="item-inner">
        <div className="item-img">
          <img src={`/img/${state.img}`} alt={state.title} />
        </div>
        <div className="item-location">
          {`Connect With Me ▶ ${state.title} `}
        </div>
        <div className="item-title">{state.title}</div>
        <div className="item-contents">{state.contents}</div>

        <div className="item-box"></div>
      </div>
    </div>
  );
}

export default ItemForm;
