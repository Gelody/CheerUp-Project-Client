import React, { useState } from "react";
import "./Userinfo.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

// 회원 추가 정보 입력 페이지(나이, 성별, 관심사)
function Userinfo() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState("");
  const user = JSON.parse(window.sessionStorage.user);
  const userInfo = {
    age: age,
    gender: gender,
    interest: interest
  };
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userInfo);
    console.log(user);
    axios
      .post("/user/info", userInfo, { headers: { authorization: user } })
      .then(res => {
        if (res.status === 200) {
          alert("저장되었습니다.");
          history.push("/main");
        }
      })
      .catch(err => {
        if (err.response) {
          alert("회원정보 저장에 문제가 있습니다.");
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log("err:", err);
          console.log("err.response:", err.response);
          console.log("데이터:", err.response.data);
          console.log("상태코드:", err.response.status);
          console.log("headers:", err.response.headers);
        } else if (err.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log("request:", err.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("Error:", err.message);
        }
        console.log("config:", err.config);
      });
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
  };
  const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const onChangeInterest = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInterest(e.target.value);
  };
  return (
    <>
      <div className="userinfo_title">
        회원정보를 바탕으로 유사한 응원을 확인할 수 있습니다.
      </div>
      <form onSubmit={onSubmit}>
        <select
          className="userinfo_age"
          defaultValue={"연령대"}
          onChange={onChangeAge}
        >
          <option value="연령대" disabled>
            연령대
          </option>
          <option value="10">10대 이하</option>
          <option value="20">20대</option>
          <option value="30">30대</option>
          <option value="40">40대</option>
          <option value="50">50대</option>
          <option value="60">60대 이상</option>
        </select>
        <br />
        <select
          className="userinfo_gender"
          defaultValue={"성별"}
          onChange={onChangeGender}
        >
          <option value="성별" disabled>
            성별
          </option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
        <br />
        <select
          className="userinfo_interest"
          defaultValue={"관심분야"}
          onChange={onChangeInterest}
        >
          <option value="관심분야" disabled>
            관심분야
          </option>
          <option value="healthy">건강</option>
          <option value="test">시험</option>
          <option value="job">취업</option>
          <option value="love">연애</option>
          <option value="company">회사</option>
          <option value="business">사업</option>
          <option value="normal">일상</option>
        </select>
        <br />
        <button className="next_button" type="submit">
          저장하기
        </button>
      </form>
    </>
  );
}

export default Userinfo;
