import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";

// 마이페이지에서의 대쉬보드(응원 받거나 한 숫자 카운트, 로그아웃)
function Dashboard({ cheeringCount, cheeredCount }: any) {
  const history = useHistory();
  const count = cheeringCount[0]?.Commentcount;
  const level = (count: any) => {
    if (count >= 500) {
      return 100;
    } else if (count < 500) {
      return Math.ceil(count / 5);
    } else if (count < 6) {
      return 1;
    }
  };
  console.log(count);

  return (
    <>
      <div className="dashborad_wrap">
        <h1>대시보드</h1>
        <span>당신의 응원레벨</span>
        <span>LV.{level(count)}</span>
        <button
          onClick={() => {
            sessionStorage.clear();
            alert("성공적으로 로그아웃 되었습니다.");
            history.push("/");
          }}
        >
          로그아웃
        </button>
        <br />
        <li>
          총 받은 응원 수 누적데이터
          <p className="Total_Count">
            지금까지 총 {cheeredCount} 개의 응원을 받았습니다.
          </p>
        </li>
        <li>
          총 응원 한 수 누적데이터
          <p className="Total_Count">
            지금까지 총 {cheeringCount[0]?.Commentcount} 개의 응원을 했습니다.
          </p>
        </li>
      </div>
    </>
  );
}

export default Dashboard;
