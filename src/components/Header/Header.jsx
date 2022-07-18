import React from "react";
import ConnectWithHeader from "../Main/ConnectWith/Header/ConnectWithHeader";
import OnAndUpHeader from "../Main/OnAndUp/Header/OnAndUpHeader";

function Header({ auth }) {
  return <>{auth ? <ConnectWithHeader /> : <OnAndUpHeader />}</>;
}

export default Header;
