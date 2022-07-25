import React from "react";
import ConnectWithHeader from "../Main/ConnectWith/Header/ConnectWithHeader";
import OnAndUpHeader from "../Main/OnAndUp/Header/OnAndUpHeader";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connectWith, onAndUp } from "../../app/headerStateSlice";

function Header({ LoginAuth, setLoginAuth }) {
  const headerType = useSelector((state) => state.headerLayout.value);
  const opacity = useSelector((state) => state.headerLayout.opacity);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname;

  if (pathName === "/") {
    dispatch(connectWith("true"));
  } else if (pathName === "/chemiverseOnUp") {
    dispatch(onAndUp("false"));
  }
  return (
    <div>
      {headerType === "true" ? (
        <ConnectWithHeader
          opacity={opacity}
          LoginAuth={LoginAuth}
          setLoginAuth={setLoginAuth}
        />
      ) : (
        <OnAndUpHeader
          opacity={opacity}
          LoginAuth={LoginAuth}
          setLoginAuth={setLoginAuth}
        />
      )}
    </div>
  );
}

export default Header;
