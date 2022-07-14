import React, { useEffect, useState } from "react";
import ConnectItem from "./ConnectItem";
import "./css/connectwith.css";

function ConnectWith({ auth, setAuth }) {
  const [data, setData] = useState([]);
  const mainData = "./db/mainData.json";
  console.log(auth);
  useEffect(() => {
    (async () => {
      const response = await fetch(mainData);
      const json = await response.json();
      setData(json);
      setAuth(true);
    })();
  }, [auth, setAuth]);

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
