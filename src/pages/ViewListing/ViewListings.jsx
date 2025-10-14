import React from "react";
import Navbar from "../../components/Navbar";
import "./ViewListings.css";
import { useState } from "react";

function Viewlistings({ reports, setReports,profileData }) {

  const [searchTerm, setSearchTerm] = useState("");
  const filteredReports = reports.filter(
    (report) =>
      report.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())||
    report.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar profileData={profileData} />
      <h1 className="listings-title">Listings</h1>
      <section className="view-list-section">
        <div className="view-list-head">
          <h3 className="head-title">Reported Items</h3>
          <input
            type="text"
            placeholder="🔍 search"
            className="search-bar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {!reports || reports.length === 0 ? (
          <p style={{ textAlign: "center", margin: "20px", fontSize: "25px" }}>
            No items reported yet.
          </p>
        ) : filteredReports.length===0 ? (<p style={{ textAlign: "center", margin: "30px", fontSize: "25px" }}> No Items Found </p> ) : (
          <div className="view-list-body">
            <table border={"1"} style={{ borderWidth: "1px" }}>
              <thead>
                <tr style={{ height: "60px", fontWeight: "900" }}>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report, index) => (
                  <tr key={index} style={{ height: "50px" }}>
                    <td>{report.itemName}</td>
                    <td
                      style={{
                        backgroundColor:
                          report.status === "Lost" ? "red" : "green",
                      }}
                    >
                      {report.status}
                    </td>
                    <td>{report.location}</td>
                    <td>{report.date}</td>
                    <td>{report.description}</td>
                    <td>
                      {report.image ? (
                        <img
                          src={URL.createObjectURL(report.image)}
                          alt="uploaded"
                          width="100"
                          height="100"
                          style={{ padding: "10px" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>
                      <a
                        href={`mailto:${report.email}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        {" "}
                        <i
                          class="fa-regular fa-id-badge"
                          style={{ fontSize: "30px" }}
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}

export default Viewlistings;
