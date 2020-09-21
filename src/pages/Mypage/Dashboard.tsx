import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import swal from "sweetalert";

// 마이페이지에서의 대쉬보드(응원 받거나 한 숫자 카운트, 로그아웃)
function Dashboard({ cheeringCount, cheeredCount }: any) {
  const [userInfo, setUserInfo]: any = useState([]);
  const user = JSON.parse(window.sessionStorage.user);
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

  // 로그인한 유저의 id 요청
  useEffect(() => {
    axios
      .get("/user/getid", { headers: { authorization: user } })
      .then(({ data }) => {
        setUserInfo(data);
        if (data) {
          console.log("유저 아이디를 성공적으로 받았습니다", data);
        } else {
          console.log("유저의 아이디 데이터가 없습니다");
        }
      });
    // .catch((err) => console.log(err));
  }, []);

  console.log("유저네임", userInfo.userName);
  return (
    <>
      <div className="dashborad_wrap">
        <h1>대시보드</h1>
        <span>{userInfo.userName}의 응원레벨</span>
        <span>LV.{level(count)}</span>
        <button
          onClick={() => {
            sessionStorage.clear();
            swal("성공적으로 로그아웃 되었습니다.", "", "success");
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
