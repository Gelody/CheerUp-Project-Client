import React from "react";
import "./background.css";

function Background() {
  return (
    <div className="video_wrap">
      <video autoPlay loop muted>
        <source
          src="https://s3.ap-northeast-2.amazonaws.com/cheerup.site/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9E%90%EB%A3%8C/background2-2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Background;
