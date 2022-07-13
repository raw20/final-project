import React from "react";
import { Link } from "react-router-dom";

function ItemList({ item }) {
  return (
    <Link
      className="main-item-list"
      key={item.id}
      to={`/chemiverseOnUp/item/${item.address}`}
      state={{
        id: item.id,
        menu: item.menu,
        dep: item.dep,
        address: item.address,
        explanation: item.explanation,
      }}
    >
      <li className="main-item-list-rectangle">{item.menu}</li>
    </Link>
  );
}

export default ItemList;
