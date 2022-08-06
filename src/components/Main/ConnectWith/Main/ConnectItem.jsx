import React from "react";
import "./css/connectItem.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectWith } from "../../../../app/headerStateSlice";

function ConnectItem({ data }) {
  const dispatch = useDispatch();
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
          {data.contents.split("\n").map((line, index) => {
            return (
              <div className="content" key={index}>
                {line}
                <br />
              </div>
            );
          })}
          <section className="sticky">
            <div className="bubbles">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </section>
          <div className="img">
            <img src={`${data.img}`} alt={data.title} />
          </div>
        </li>
      </Link>
    </>
  );
}

export default ConnectItem;
