import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Instagram</h2>

      <div className="nav-item">
        <i className="bi bi-house-door"></i>
        <span>Home</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-search"></i>
        <span>Search</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-compass"></i>
        <span>Explore</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-play-btn"></i>
        <span>Reels</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-chat"></i>
        <span>Messages</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-heart"></i>
        <span>Notifications</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-plus-square"></i>
        <span>Create</span>
      </div>

      <div className="nav-item">
        <i className="bi bi-person-circle"></i>
        <span>Profile</span>
      </div>
    </div>
  );
}

export default Navbar;