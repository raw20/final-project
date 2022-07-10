import React from "react";
import { Link } from "react-router-dom";

function ItemList({ item }) {
  return (
    <Link className="main-item-list" to={`/chemiverseOnUp/${item.address}`}>
      <li className="main-item-list-rectangle">{item.menu}</li>
    </Link>
  );
}

export default ItemList;
