import React from 'react';
import { useNavigate } from 'react-router-dom';
import content from './css/content.css';

const Login = ({ setLoginAuth }) => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    console.log('로그인되었습니다.');
    setLoginAuth(true);
    navigate('/chemiverseOnUp');
  }
  const LoginSearch = () => {
    navigate('/chemiverseOnUp/login-search')
  }
  return (
    <div className='login-form'>
      <div className='login-title'>
        로그인💡
      </div>
      <form onSubmit={(e) => { login(e) }}>
        <div className='login-id'>
          <div><input type="id" id="loginId" placeholder='아이디' /></div>
        </div>
        <div className='login-pw'>
          <div><input type="password" id="userPass" placeholder='비밀번호' /></div>
        </div>
        <div className='IdFwBtn'>
          <button id='searchBtn' onClick={LoginSearch}>ID/PW찾기</button>
        </div>
        <div>
          <button className="login-button" type="submit" value="로그인">로그인</button>
        </div>
      </form>
    </div>
  );
}


export default Login;