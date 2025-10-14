import React from "react";
import Navbar from "../../components/Navbar";
import {useNavigate } from "react-router-dom";
import "./Home.css"

function Home({profileData}) {
  const navigate=useNavigate();
  return (
    <>
      <Navbar  profileData={profileData} />
      <div className="home-about">
        <h1 className="about-title">Welcome to FindItNow </h1>
        <p className="about-content">
          “Your go-to platform to report lost & found items and help reunite
          people with their belongings.”
        </p>
        <button className="report-link-home" onClick={()=>navigate("/reportitem")}>Report Item</button>
      </div>
      <div className="website-activity-stats">
            <div className="total-cases-container">
              <h1 className="total-cases">10</h1>
              <h2>Total Cases Reported</h2>
            </div>
            <div className="cases-solved-container">
              <h1 className="cases-solved">5</h1>
              <h2>Cases Solved</h2>
            </div>
            <div className="total-users-container">
              <h1 className="total-users">20</h1>
              <h2>Total Users</h2>
            </div>
      </div>
    </>
  );
}

export default Home;
