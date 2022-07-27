import React from "react";
import { useSelector } from 'react-redux'
import './css/Profile.css'

const Profile = () => {
  const userId = useSelector((state) => state.user.id.id)
  console.log(userId)

  return (
    <div className='profile-inner'>
      <h1 className='profile-title'>Profile</h1>
      {/*       <div className='profile-title'>Profile</div> */}
      <div className='profile-container'>
        <div className='profile-img'>
        </div>
        <div className='profile-content'>
          <div className='profile-name'>
            <span>Name</span>: {userId}
          </div>
          <div className='profile-department'>
            <span>Department </span>: 마케팅 부서
          </div>
          <div className='profile-number'>
            <span>Number </span>: 010-1234-1234
          </div>
          <div className='profile-email'>
            <span>Email</span> : 1234@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
