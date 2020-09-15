import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

// 인트로 페이지
function Intro() {
  return (
    <>
      <div className="intro_wrap">
        <div className="intro_img">
          <div className="intro_text">
            <h1>Cheer-Up!</h1>
            <h2>당신을 응원합니다</h2>
          </div>
        </div>
        <br />
        <Link to="/login" className="link_button">
          시작하기
      </Link>
      </div>
    </>
  );
}

export default Intro;
