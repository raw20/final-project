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

<<<<<<< HEAD
  const [viewButton, setViewButton] = useState(true);
  const button = useState("ture") ? viewButton : setViewButton;
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
  )
=======
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
								to={`/chemiverseOnUp/${item.id}/${item.onAndUpItemAddress}/0`}
								state={{
									id: item.id,
									menu: item.menu,
									dep: item.dep,
									address: item.address,
								}}
								className={({ isActive }) => (isActive ? 'item-menu on' : 'item-menu')}
							>
								<span>{item.menu}</span>
							</NavLink>
							<ul className="depth1">
								{item.dep.map((ele, index) => (
									<li key={index} className="depth1Li">
										<NavLink
											to={`/chemiverseOnUp/${item.id}/${item.onAndUpItemAddress}/${index}`}
											state={{
												id: item.id,
												menu: item.menu,
												dep: item.dep,
												address: item.onAndUpItemAddress,
											}}
											className={({ isActive }) => (isActive ? 'item-menu on' : 'item-menu')}
										>
											{ele}
										</NavLink>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
			<div className="side-item">
				<ul className="util">
					<li id="mypage">
						<NavLink to={`/chemiverseOnUp/mypage`}>
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
						className={'tab-btn'}
					>
						탭버튼
					</NavLink>
				</ul>
			</div>
		</div>
	);
>>>>>>> cb4b04271314afd374c1be9fa5aa7776965a2584
}

export default OnAndUpHeader;
