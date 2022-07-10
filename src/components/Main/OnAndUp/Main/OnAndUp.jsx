import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./css/main.css";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

function OnAndUp(props) {
  const [data, setData] = useState([]);
  const dataURL = "./db/mainItem.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataURL);
      const json = await response.json();
      setData(json);
    })();
  });
  return (
    <div className="wrap">
      <div id="header">
        <Header />
      </div>
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
