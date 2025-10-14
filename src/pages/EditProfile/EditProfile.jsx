import React from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import profile from "../../assets/profileimage.png";

function EditProfile({ profileData, setProfileData }) {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(profileData.image);
  const [formData, setFormData] = useState({
    username: profileData.username,
    name: profileData.name,
    email: profileData.email,
    gender: profileData.gender,
    mobile: profileData.mobile,
  });
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      alert("Username is required");
      return;
    }
    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }
    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }
    if (!/^[\w.-]+@gmail\.com$/i.test(formData.email)) {
      alert("Email must be a valid Gmail address (example@gmail.com)");
      return;
    }

    if (!formData.gender.trim()) {
      alert("Gender is required");
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    setProfileData({
      ...profileData,
      username: formData.username,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      gender: formData.gender,
      image: profileImage,
    });
    alert("Changes Saved");
    navigate("/profile");
  };

  return (
    <>
      <section className="editprofile-header">
        <h1>Edit Profile</h1>
      </section>
      <section className="editprofile-content">
        <div className="edit-image">
          <img src={profileImage} alt="profile" width={150} height={150} />
          <button className="edit-imagebtn" onClick={handleButtonClick}>
            <i className="fa-solid fa-pencil"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="edit-userinfo">
          <table style={{ borderSpacing: "15px" }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "800", fontSize: "20px" }}>
                  Username :
                </td>
                <td>
                  <input
                    type="text"
                    name="username"
                    className="edit-username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "800", fontSize: "20px" }}>Name :</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="edit-name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "800", fontSize: "20px" }}>
                  Gender :
                </td>
                <td>
                  <select
                    name="gender"
                    className="edit-gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Others</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "800", fontSize: "20px" }}>Email :</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    className="edit-email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "800", fontSize: "20px" }}>
                  Contact :
                </td>
                <td>
                  <input
                    type="tel"
                    name="mobile"
                    className="edit-number"
                    pattern="[0-9]{10}"
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setFormData({ ...formData, mobile: value.slice(0, 10) });
                    }}
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="edit-actions">
          <button className="edit-savebtn" onClick={handleSubmit}>
            Save Changes
          </button>
          <button
            className="edit-cancelbtn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>
      </section>
    </>
  );
}
export default EditProfile;
