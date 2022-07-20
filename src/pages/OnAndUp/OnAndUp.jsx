import React, { useEffect, useState } from "react";
import "./css/main.css";
import OnAndUpItemList from "../../components/Main/OnAndUp/Main/OnAndUpItemList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectWith } from "../../app/headerStateSlice";

function OnAndUp() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const dataURL = "./db/onAndUpMenuData.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(dataURL);
      const json = await response.json();
      setData(json);
    })();
  });

  return (
    <div className="wrap">
      <div className="main">
        <div className="main-img">
          <ul className="main-item">
            {data.map((item) => (
              <OnAndUpItemList key={item.id} item={item} />
            ))}
          </ul>
          <Link
            to={`/`}
            className="connect-with-btn"
            onClick={() => dispatch(connectWith("true"))}
          >
            <span className="connect-with-rectangle">Connect With</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnAndUp;
