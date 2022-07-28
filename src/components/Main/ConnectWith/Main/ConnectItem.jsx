import React from "react";
import "./css/connectItem.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectWith } from "../../../../app/headerStateSlice";

function ConnectItem({ data }) {
  const json = JSON.stringify(data.contents);
  const content = json.split("\\n").join("<br>");
  const dispatch = useDispatch();
  console.log(content);
  return (
    <>
      <Link
        to={
          data.id === 3
            ? `/${data.id}/${data.address}/notice`
            : `/${data.id}/${data.address}`
        }
        className="link-item"
        style={{ textDecoration: "none" }}
      >
        <li
          className="item-list"
          onClick={() => {
            dispatch(connectWith("true"));
          }}
        >
          <div className="title">{data.title}</div>
          <pre className="content">{data.contents}</pre>
          <div className="img">
            <img src={`${data.img}`} alt={data.title} />
          </div>
        </li>
      </Link>
    </>
  );
}

export default ConnectItem;
