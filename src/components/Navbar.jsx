import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import profile from "../assets/profileimage.png";


function Navbar({profileData}) {
  return (
    <>
      <nav>
        <h1 className="website-name">FindItNow</h1>
        <ul>
          <li className="home-link">
            <Link to="/">Home</Link>
          </li>
          <li className="reportitem-link">
            <Link to="/reportitem">Report Item</Link>
          </li>
          <li className="viewlistings-link">
            <Link to="/viewlistings">View Listings</Link>
          </li>
        </ul>
        <Link to="/profile" className="profile-link"><img src={profileData?.image || profile}  alt="image" width={40} height={40} style={{borderRadius:"50%"}}/></Link>
      </nav>

      
    </>
  );
}
export default Navbar;
