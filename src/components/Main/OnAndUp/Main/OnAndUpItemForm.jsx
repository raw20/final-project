import React from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import component from "./TabComponent";
import "./css/itemForm.css";
import { useEffect } from "react";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";

function OnAndUpItemForm() {
  const { state } = useLocation(0);
  const [tabIndex, setTabIndex] = useState();
  const dispatch = useDispatch();

  function currentIndex(index) {
    setTabIndex(index);
  }
  useEffect(() => {
    dispatch(headerGnbOpcity("1"));
  });
  return (
    <div className="item-form">
      <div className="item-inner">
        <div className="item-location">
          {tabIndex === undefined
            ? `Chemiverse On&Up ▶ ${state.menu} ▶ ${state.dep[0]} `
            : `Chemiverse On&Up ▶ ${state.menu} ▶ ${state.dep[tabIndex]} `}
        </div>
        <div className="item-title">{state.menu}</div>
        <div className="item-contents">{state.explanation}</div>
        <ul className="item-btn-area">
          {state.dep.map((item, index) => (
            <li
              key={index}
              className="item-btn"
              onClick={() => currentIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="item-box">
          {tabIndex === undefined
            ? component[state.id].content[0]
            : component[state.id].content[tabIndex]}
        </div>
      </div>
    </div>
  );
}

export default OnAndUpItemForm;
