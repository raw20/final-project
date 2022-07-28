import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import content from './css/content.css';
import { login } from '../../../../../app/userSlice';

const Login = ({ setLoginAuth }) => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	/*  const loginSubmit = (e) => {
     // e.preventDefault();
     console.log('로그인되었습니다.');
     setLoginAuth(true);
     navigate('/chemiverseOnUp');
   } */
	const LoginSearch = () => {
		navigate('/chemiverseOnUp/login-search');
	};
	console.log(id);
	const handleSubmit = e => {
		e.preventDefault(e);
		dispatch(login({ id: id, pw: password }));
		setLoginAuth(true);
		navigate('/chemiverseOnUp');
	};

	return (
		<div className="login-form">
			<div className="login-title">로그인💡</div>
			<form onSubmit={e => handleSubmit(e)}>
				{/*       <form onSubmit={(e) => { login(e) }}> */}
				<div className="login-id">
					<div>
						<input
							type="id"
							id="loginId"
							placeholder="아이디"
							value={id}
							onChange={e => setId(e.target.value)}
						/>
					</div>
				</div>
				<div className="login-pw">
					<div>
						<input
							type="password"
							id="userPass"
							placeholder="비밀번호"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="IdFwBtn">
					<button id="searchBtn" onClick={LoginSearch}>
						ID/PW찾기
					</button>
				</div>
				<div>
					<button className="login-button" type="submit" value="로그인">
						로그인
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
