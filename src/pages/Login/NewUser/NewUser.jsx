import React from "react";
import "./NewUser.css";
export default function NewUser() {
  return (
    <>
      <article className="new-user">
        <section className="newuser-header">
          <div className="newuser-header-content">Create Account</div>
        </section>
        <section className="newuser-input">
          <div className="first-row">
            {" "}
            {/* First Row */}
            <div className="newuser-name">
              <h6>Name</h6>
              <input type="text" placeholder="Enter Name" required/>
            </div>
            <div className="newuser-gender">
              <h6>Gender</h6>
              <select required>
                <option value="">- - Select - -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div className="second-row">
            <div className="newuser-email">
              <h6>Email</h6>
              <input type="email" placeholder="Enter email" required/>
            </div>
            <div className="newuser-mobile">
              <h6>Mobile Number</h6>
              <input
                type="tel"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter Mobile number"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                required
              />
            </div>
          </div>

          <div className="third-row">
            <div className="newuser-username">
              <h6>Username</h6>
              <input type="text" placeholder="Enter Username" required />
            </div>
            <div className="newuser-password">
              <h6>Password</h6>
              <input type="text" placeholder="Enter Password" required/>
            </div>
          </div>
        </section>
        <section className="signup-actions">
            <button className="signup-btn" onClick={()=>alert("Signed up sucessfully")}>SIGN UP</button>
            <p style={{marginLeft:"-10px"}}>Already have an account? <a href="/existinguser" style={{color:"blue"}}>Login</a></p>
        </section>
      </article>
    </>
  );
}
