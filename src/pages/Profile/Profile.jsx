import React from "react";
import Navbar from "../../components/Navbar";
import "./profile.css";
import profile from "../../assets/profileimage.png";
import {useNavigate } from "react-router-dom";

function Profile({profileData}) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar   profileData={profileData}  />
      <section className="profile-header">
        <h1>My Profile</h1>
      </section>
      <section className="profile-content">
        <div className="profile-image-div">
          <img src={profileData.image} alt="profile" />
        </div>
        <div className="profile-details" style={{ textAlign: "center" }}>
          <table style={{fontSize:"23px"}}>
            <tbody>
              <tr style={{height:"40px"}}>
                <td>Username : </td>
                <td><span>{profileData.username}</span></td>
              </tr>
              <tr style={{height:"40px"}}>
                <td>Name :</td>
                <td><span>{profileData.name}</span></td>
              </tr>
              <tr style={{height:"40px"}}>
                <td>Gender :</td>
                <td><span>{profileData.gender}</span></td>
              </tr>
              <tr style={{height:"40px"}}>
                <td> Email : </td>
                <td><span>{profileData.email}</span></td>
              </tr>
              <tr style={{height:"40px"}}>
                <td>Mobile :</td>
                <td><span>{profileData.mobile}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="profile-actions">
          <button className="edit-btn" onClick={()=>navigate("/editprofile")}>
            <i class="fa-solid fa-pencil"></i> Edit Profile
          </button>
          <button className="logout-btn" onClick={()=>navigate("/existinguser")}>
            <i class="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
