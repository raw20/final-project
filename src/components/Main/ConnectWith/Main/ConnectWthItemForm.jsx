import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/itemForm.css";
import { headerGnbOpcity } from "../../../../app/headerStateSlice";
function ConnectWthItemForm() {
  const { state } = useLocation(0);
  const { address } = useParams();
  const [data, setData] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const dispatch = useDispatch();

  async function getMainData() {
    const json = await (await fetch(connenctWithMenuData)).json();
    setData(json);
  }
  useEffect(() => {
    getMainData();
    dispatch(headerGnbOpcity("1"));
  }, []);
  console.log("state가 주소에 / 붙여도 읽혀지나아아", data);
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
        <div className="item-box">
          <Outlet context={{ address }} />
        </div>
      </div>
    </div>
  );
}

export default ConnectWthItemForm;
