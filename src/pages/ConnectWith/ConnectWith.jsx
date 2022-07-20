import React, { useEffect, useState } from "react";
import ConnectItem from "../../components/Main/ConnectWith/Main/ConnectItem";

import "./css/connectwith.css";

function ConnectWith() {
  const [data, setData] = useState([]);
  const mainData = "./db/connenctWithMenuData.json";
  async function getMainData() {
    const json = await (await fetch(mainData)).json();
    setData(json);
  }
  useEffect(() => {
    getMainData();
  }, []);
  return (
    <>
      <div className="main">
        <ul className="connect">
          {data.map((cnData) => (
            <ConnectItem key={cnData.id} data={cnData} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ConnectWith;
