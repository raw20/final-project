import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ConnectWithHeader from "../Main/ConnectWith/Header/ConnectWithHeader";
import OnAndUpHeader from "../Main/OnAndUp/Header/OnAndUpHeader";

function Header() {
  const [part, setPart] = useState(true);
  useEffect(() => {
    console.log(part);
  }, [part]);

  return <>{part ? <ConnectWithHeader /> : <OnAndUpHeader />}</>;
}

export default Header;
