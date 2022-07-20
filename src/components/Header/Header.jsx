import React from "react";
import ConnectWithHeader from "../Main/ConnectWith/Header/ConnectWithHeader";
import OnAndUpHeader from "../Main/OnAndUp/Header/OnAndUpHeader";
import { useSelector } from "react-redux";

function Header() {
  const headerType = useSelector((state) => state.headerLayout.value);
  console.log(headerType);
  return (
    <>{headerType === "true" ? <ConnectWithHeader /> : <OnAndUpHeader />} </>
  );
}

export default Header;
