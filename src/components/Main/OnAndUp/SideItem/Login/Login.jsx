import React, { useState, useId, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import content from "./css/content.css";
import { login } from "../../../../../app/userSlice";
import userData from "../../../../../userData.json";
import { setFooterDisplay } from "../../../../../app/footerStateSlice";
import { headerGnbOpcity } from "../../../../../app/headerStateSlice";

const Login = ({ setLoginAuth }) => {
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(setFooterDisplay("off"));
  dispatch(headerGnbOpcity("2"));
  /*  const loginSubmit = (e) => {
     // e.preventDefault();
     console.log('로그인되었습니다.');
     setLoginAuth(true);
     navigate('/chemiverseOnUp');
   } */
  const LoginSearch = () => {
    navigate("/chemiverseOnUp/login-search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력을 안 한 경우
    if (id.length === 0 || password.length === 0) {
      //console.log(error);
      /* setError(true); */
      alert("아이디와 비밀번호를 입력하세요.");
    }

    const user = userData.find((user) => user.id === id);
    // 아이디가 일치하는 사용자가 없는 경우
    if (!user) {
      alert("아이디가 일치하지않습니다.");
      return setError(true);
    }

    // 패스워드가 일치하지 않는 경우
    if (user.password !== password) {
      alert("비밀번호가 일치하지않습니다.");
      return setError(true);
    }

    dispatch(login({ id: id, pw: password }));
    setLoginAuth(true);
    navigate("/chemiverseOnUp");
  };

  return (
    <div className="login-form">
      <div className="login-title">로그인💡</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/*       <form onSubmit={(e) => { login(e) }}> */}
        <div className="login-id">
          <div>
            <input
              type="id"
              id="loginId"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="IdFwBtn">
          <button id="searchBtn" onClick={LoginSearch}>
            ID/PW찾기
          </button>
          {/*   <span>{error ? true : "로그인 정보가 올바르지 않습니다."}</span> */}
        </div>
        <div>
          {error ? (
            <button className="error-button">로그인</button>
          ) : (
            /*    (<span>로그인 정보가 올바르지 않습니다 </span>) */
            <button className="login-button" type="submit" value="로그인">
              로그인
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
