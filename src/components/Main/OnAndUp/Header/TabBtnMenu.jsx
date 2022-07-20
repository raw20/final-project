import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function TabBtnMenu() {
  const [item, setItem] = useState([]);
  const itemData = "./db/mainItem.json";
  useEffect(() => {
    (async () => {
      const response = await fetch(itemData);
      const json = await response.json();
      setItem(json);
    })();
  });
  return (
    <>
      <div className='tab-btn-menu'>
      <NavLink
        to={`/chemiverseOnUp/item/${item.address}`}
        key={item.id}
        state={{
          id: item.id,
          menu: item.menu,
          dep: item.dep,
          address: item.address,
        }}
        >
        <span>{item.menu}</span>
      </NavLink>
      <ul className="depth1">
        <NavLink
        to={`/chemiverseOnUp/item/${item.address}`}
        key={item.id}
        state={{
          id: item.id,
          menu: item.menu,
          dep: item.dep,
          address: item.address,
        }}
        >
          {item.dep.map((ele)=><li className="depth1Li">{ele}</li>)}
        </NavLink>
        </ul>
      </div>
    </>
  );
}

export default TabBtnMenu;