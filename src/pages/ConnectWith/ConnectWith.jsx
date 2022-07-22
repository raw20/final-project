import React, { useEffect, useState } from "react";
import ConnectItem from "../../components/Main/ConnectWith/Main/ConnectItem";
import { useSelector, useDispatch } from "react-redux";
import { headerGnbOpcity } from "../../app/headerStateSlice";
import "./css/connectwith.css";

function ConnectWith() {
  const [data, setData] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const opacity = useSelector((state) => state.headerLayout.opacity);
  const dispatch = useDispatch();
  async function getMainData() {
    const json = await (await fetch(connenctWithMenuData)).json();
    setData(json);
  }
  useEffect(() => {
    getMainData();
    dispatch(headerGnbOpcity("0"));
    console.log("cwa", opacity);
  }, []);
  return (
    <>
      <div className="main">
        <ul className="connect">
          {data.map((cnData) => (
            <ConnectItem key={cnData.id} data={cnData} opacity={opacity} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConnectWith;
