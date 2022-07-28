import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './css/header.css';
import { BiUser } from 'react-icons/bi';
import { IoLogInOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';

function OnAndUpHeader({ LoginAuth, setLoginAuth }) {
	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/chemiverseOnUp/login');
	};

	function goToLogout() {
		setLoginAuth(false);
		navigate('/');
	}
	const [item, setItem] = useState([]);
	const onAndUpMenuData = '/db/onAndUpMenuData.json';

	useEffect(() => {
		(async () => {
			const response = await fetch(onAndUpMenuData);
			const json = await response.json();
			setItem(json);
		})();
	}, []);

  return (
    <div id="header">
      <Link className="logo" to="/chemiverseOnUp">
        logo
      </Link>
      <div className="main-item">
        <ul className="gnb">
          {item.map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/chemiverseOnUp/item/${item.onAndUpItemAddress}`}
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
                    address: item.onAndUpItemAddress,
                  }}
                >
                  {item.dep.map((ele, index) => (
                    <li key={index} className="depth1Li">{ele}</li>
                  ))}
                </NavLink>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-item">
        <ul className="util">
          <li id="mypage">
            <NavLink to={`/chemiverseOnUp/Profile`}>
              <BiUser />
            </NavLink>
          </li>
          {LoginAuth ? (
            <span onClick={() => goToLogout()}>
              <IoLogOutOutline />
            </span>
          ) : (
            <span onClick={() => goToLogin()}>
              <IoLogInOutline />
            </span>
          )}
          <NavLink
            to={`/chemiverseOnUp/tab`}
            state={{
              id: item.id,
              menu: item.menu,
              dep: item.dep,
              address: item.address,
            }}
            className={"tab-btn"}
          >
            탭버튼
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default OnAndUpHeader;
