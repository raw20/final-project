import React, { useEffect, useState } from "react";
import ConnectItem from "../../components/Main/ConnectWith/Main/ConnectItem";
import { useDispatch } from "react-redux";
import { headerGnbOpcity } from "../../app/headerStateSlice";
import "./css/connectwith.css";

function ConnectWith() {
  const [data, setData] = useState([]);
  const connenctWithMenuData = "/db/connenctWithMenuData.json";
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(connenctWithMenuData);
      const json = await response.json();
      setData(json);
    })();
    dispatch(headerGnbOpcity("0"));
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
