import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Reportitem from "./pages/ReportItem/ReportItem";
import Viewlistings from "./pages/ViewListing/ViewListings";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import profileImage from "../src/assets/profileimage.png";
import Newuser from "./pages/Login/NewUser/NewUser";
import Existinguser from "./pages/Login/ExistingUser/Existinguser"

function App() {
  const [profileData , setProfileData]=useState({
    username: "sample-user",
    name: "User",
    gender:"Male",
    email: "user@gmail.com",
    mobile: "9978229787",
    image: profileImage,
  })
  const [reports, setReports] = useState([]);
  return (
    <>
      <BrowserRouter  basename="/Lost-and-Found">
        <Routes>
          <Route path="/" element={<Home profileData={profileData} />} />
          <Route
            path="/reportitem"
            element={<Reportitem reports={reports} setReports={setReports} profileData={profileData} />}
          />
          <Route
            path="/viewlistings"
            element={<Viewlistings reports={reports} setReports={setReports} profileData={profileData}/>}
          />
          <Route path="/profile" element={<Profile profileData={profileData}/>} />
          <Route path="/editprofile" element={
            <EditProfile profileData={profileData} setProfileData={setProfileData} />} />
          <Route path="/newuser" element={<Newuser/>}/>
          <Route path="/existinguser" element={<Existinguser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
