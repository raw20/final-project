import React from "react";
import { useSelector } from "react-redux";
import "./css/Profile.css";
import userData from "../../../../../userData.json";

const Profile = () => {
  const userId = useSelector((state) => state.user.id.id);
  console.log(userId);
  const user = userData.find((user) => {
    return user.id === userId;
  });
  console.log(user);

  if (!user) {
    return <div>No user data</div>;
  }

  return (
    <div className="profile-inner">
      <h1 className="profile-title">Profile</h1>
      {/*       <div className='profile-title'>Profile</div> */}
      <div className="profile-container">
        <div className="profile-img"></div>
        <div className="profile-content">
          <div className="profile-name">
            <span>Name</span>: {user.name}
          </div>
          <div className="profile-department">
            <span>Department </span>: {user.department}
          </div>
          <div className="profile-number">
            <span>Number </span>: {user.number}
          </div>
          <div className="profile-email">
            <span>Email</span> : {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
