import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/Profile.css";
import userData from "../../../../../userData.json";
import { headerGnbOpcity } from "../../../../../app/headerStateSlice";

const Profile = () => {
  const userId = useSelector((state) => state.user.id.id);
  const dispatch = useDispatch();
  const user = userData.find((user) => {
    return user.id === userId;
  });
  dispatch(headerGnbOpcity("1"));

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
