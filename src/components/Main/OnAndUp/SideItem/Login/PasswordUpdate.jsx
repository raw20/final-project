import React from "react";
import './css/PwContent.css';

const PasswordUpdate = () => {

  return (
    <div className='pw-inner'>
      <h1 className='pw-title'>비밀번호 변경</h1>
      <form>
        <input type="id" id="modalId" placeholder='아이디' />
        <input type="userOriginPass" id="origin-pass" placeholder='현재비밀번호' />
        <input type="userChangePass" id='change-pass' placeholder='변경비밀번호' />
        <input type="userChangePass" id='change-pass' placeholder='비밀번호확인' />
        <button id='pwBtn' type="button">확인</button>
      </form>
    </div>
  );
};


export default PasswordUpdate;
