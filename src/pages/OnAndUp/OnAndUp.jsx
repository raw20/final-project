import React, { useEffect, useState } from "react";
import "./css/main.css";
import OnAndUpItemList from "../../components/Main/OnAndUp/Main/OnAndUpItemList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectWith } from "../../app/headerStateSlice";
import { FiSearch } from "react-icons/fi";
import { headerGnbOpcity } from "../../app/headerStateSlice";
import OnAndUpMobileSlider from "./OnAndUpMobileSlider";
import { setFooterDisplay } from "../../app/footerStateSlice";

function OnAndUp() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const onAndUpMenuData = "/db/onAndUpMenuData.json";

  async function getMainData() {
    const json = await (await fetch(onAndUpMenuData)).json();
    setData(json);
    dispatch(headerGnbOpcity("0"));
    dispatch(setFooterDisplay("off"));
  }
  useEffect(() => {
    getMainData();
  }, []);
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
        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            name=""
            placeholder="Type to search"
          />
          <FiSearch />
        </div>
      </div>
      {/* main */}
      <div className="mobile-slider">
        <OnAndUpMobileSlider />
      </div>
    </div>
  );
}

export default OnAndUp;
