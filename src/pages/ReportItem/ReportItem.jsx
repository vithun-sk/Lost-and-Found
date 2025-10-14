import React from "react";
import Navbar from "../../components/Navbar";
import "./ReportItem.css";
import { useState } from "react";
import { useRef } from "react";

function Reportitem({ reports, setReports ,profileData }) {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    itemName: "",
    status: "Lost",
    description: "",
    date: "",
    location: "",
    email: "",
    contactNumber: "",
    image: null,
  });

  //Handle storing values
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };
  // Handle the Submit process
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = { ...formData };
    setReports((prev) => [...prev, newReport]);
    console.log("new",newReport)
    alert("Form submitted!");
    setFormData({
      itemName: "",
      status: "Lost",
      description: "",
      location: "",
      date: "",
      contactNumber: "",
      email: "",
      image: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleReset = (e) => {
    setFormData({
      itemName: "",
      status: "Lost",
      description: "",
      location: "",
      date: "",
      contactNumber: "",
      email: "",
      image: null,
    });
  };
  return (
    <>
      <Navbar profileData={profileData} />
      <div className="report-box">
        <h1 className="report-title">Report Item</h1>
        <form onSubmit={handleSubmit}>
          {/* First Row  */}
          <section className="row-one">
            {/* Item Name  */}
            <div className="input-name">
              <h3 className="heading">Item Name</h3>
              <input
                name="itemName"
                type="text"
                placeholder="Enter Item Name"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Status  */}
            <div className="input-status">
              <h3 className="heading">Status</h3>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>
          </section>
          {/* Second Row */}
          <section className="row-two">
            {/* Input Descripition  */}
            <div className="input-description">
              <h3 className="heading">Description</h3>
              <textarea
                name="description"
                placeholder="Give the description of the product Found/Lost"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </section>
          {/* Third Row  */}
          <section className="row-three">
            {/* Date */}
            <div className="input-date">
              <h3 className="heading">Date</h3>
              <input
                name="date"
                type="date"
                placeholder="Enter Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            {/* Location  */}
            <div className="input-location">
              <h3 className="heading">Location( where you Found/Lost)</h3>
              <input
                name="location"
                type="text"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </section>
          {/* Fourth Row */}
          <section className="row-four">
            {/* Email */}
            <div className="input-email">
              <h3 className="heading">Email</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Mobile Number */}
            <div className="input-number">
              <h3 className="heading">Contact Number </h3>
              <input
                type="tel"
                name="contactNumber"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
          </section>
          {/* Fifth Row */}
          <section className="row-five">
            {/* Image */}
            <div className="input-image">
              <h3 className="heading">Image of the Item (If Available)</h3>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                ref={fileInputRef}
              />
            </div>
          </section>

          <div className="row-button">
            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Reportitem;
