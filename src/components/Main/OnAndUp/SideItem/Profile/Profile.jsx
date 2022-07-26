import React from "react";
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.user.value)

  return (
    <div className='profile-inner'>
      <div className='profile-title'>Profile</div>
      <p> Name :{user.id}</p>
    </div>
  );
};

export default Profile;
