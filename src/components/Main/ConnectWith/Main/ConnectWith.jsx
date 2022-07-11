import React, { useEffect, useState } from "react";
import ConnectItem from "./ConnectItem";
import "./css/connectwith.css";
function ConnectWith() {
  const [data, setData] = useState([]);
  const mainData = "./db/mainData.json";

  useEffect(() => {
    (async () => {
      const response = await fetch(mainData);
      const json = await response.json();
      setData(json);
    })();
  });

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
