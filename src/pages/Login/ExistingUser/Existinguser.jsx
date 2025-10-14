import React from "react";
import "./Existinguser.css";
import { useNavigate } from "react-router-dom";
export default function Existinguser() {
  return (
    <article className="existing-user">
      <div className="login-header">Login</div>
      <div className="login-content">
        {/* User Name */}
        <section>
          <h3 className="login-username-head">Username</h3>
          <div className="login-username-input">
            <i className="fa-solid fa-user "></i>
            <input type="text" placeholder="Username" />
          </div>
        </section>

        {/* Password */}
        <section>
          <h3 className="login-password-head">Password</h3>
          <div className="login-password-input">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
        </section>

        <section className="existinguser-actions">
            <button className="login-btn">LOG IN</button>
            <p style={{fontSize:"15px", marginLeft:"-20px"}}>Don't have an account? <a href="/newuser" style={{color:"blue"}}>sign up</a></p>
        </section>
      </div>
    </article>
  );
}
