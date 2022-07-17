import React, { useEffect, useState } from "react";
import "./css/main.css";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

function OnAndUp({ main, setMain }) {
  const [data, setData] = useState([]);
  const dataURL = "./db/onAndUpMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataURL);
      const json = await response.json();
      setData(json);
      setMain(false);
    })();
  });
  return (
    <div className="wrap">
      <div className="main">
        <div className="main-img">
          <ul className="main-item">
            {data.map((item) => (
              <ItemList key={item.id} item={item} />
            ))}
          </ul>
          <Link to={`/`} className="connect-with-btn">
            <span className="connect-with-rectangle">Connect With</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnAndUp;
