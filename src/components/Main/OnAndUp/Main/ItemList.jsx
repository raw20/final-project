import React from "react";
import { Link } from "react-router-dom";

function ItemList({ item }) {
  return (
    <Link
      className="main-item-list"
      to={`/chemiverseOnUp/item/${item.address}`}
      state={{
        menu: item.menu,
        dep: item.dep,
      }}
    >
      <li className="main-item-list-rectangle">{item.menu}</li>
    </Link>
  );
}

export default ItemList;
