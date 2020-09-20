import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import Background from "./background";

// 인트로 페이지
function Intro() {
  return (
    <>
      <Background />
      <div className="bg_video">
        <div className="video_contents">
          <div className="intro_title">Cheer-Up</div>
          <div className="intro_subtitle">당신을 응원합니다</div>
          <div className="intro_copy">응원 품앗이 SNS</div>
          <Link to="/login" className="link_button">
            <p className="intro_cta">시작하기</p>
          </Link>
        </div>
      </div>
    </>
  );
  {
    /* <div className="intro_wrap">
        <div className="intro_img">
          <div className="intro_text">
            <h1>Cheer-Up!</h1>
            <h2>당신을 응원합니다</h2>
          </div>
        </div>
        <br />
        
      </div> */
  }
}

export default Intro;
