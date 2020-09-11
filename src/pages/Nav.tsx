import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import profileImg from "../images/profile.png";
import notificationImg from "../images/notification.png";
import uploadImg from "../images/upload.png";
import "./Nav.css";

// 네비게이션 바
function Nav() {
  return (
    <>
      <nav className="navBar">
        <Link to="/main">
          <img className="main_link_icon" src={logoImg} alt="logo"></img>
        </Link>

        <Link to="/mypage" className="mypage_link">
          <img
            className="mypage_link_icon"
            src={profileImg}
            alt="profile"
          ></img>
        </Link>

        <Link to="/upload" className="upload_link">
          <img className="upload_link_icon" src={uploadImg} alt="profile"></img>
        </Link>

        <img
          className="notification_link_icon"
          src={notificationImg}
          alt="profile"
        ></img>
      </nav>
    </>
  );
}

export default Nav;
