import React from "react";
import { useLocation } from "react-router-dom";
import "./css/itemForm.css";
function ItemForm() {
  const { state } = useLocation();
  return (
    <div className="item-form">
      <div className="item-inner">
        <div className="item-title">{state.menu}</div>
        {state.dep.map((item) => (
          <button className="item-btn">{item}</button>
        ))}
        <div className="item-box"></div>
      </div>
    </div>
  );
}

export default ItemForm;
