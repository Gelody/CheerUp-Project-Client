import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import Background from "./background";

function Signup() {
  // input을 담을 상태들과 상태변경 함수 선언하기
  // Hooks 사용하기
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [usableName, setUsableName] = useState(false);
  const [unusableName, setUnusableName] = useState(false);
  const [clickVerifyButton, setClickVerifyButton] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const signUpInfo = {
    userId: email,
    userPassword: password,
    userName: userName,
  };
  const NameInfo = { userName: userName };

  // 아이디 중복 확인 서버 요청
  const idCheck = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(userName);
    axios
      .post("/user/checkName", NameInfo)
      .then((res) => {
        if (res.status === 200) {
          setUsableName(true);
          setClickVerifyButton(true);
        } else if (res.status === 203) {
          setUnusableName(true);
          setClickVerifyButton(false);
        }
      })
      .catch((err) => console.log(err));
  };

  // 서버 요청 및 비밀번호 검증로직
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    password !== passwordCheck
      ? setPasswordErr(true)
      : console.log({ signUpInfo });
    axios
      .post("/user/join", signUpInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("가입하신 이메일로 발송된 인증메일을 확인해주세요.");
          window.open(`https://www.${email.split("@")[1]}`);
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log(err.response.data);
          alert("가입된 이메일입니다.");
        }
      });
  };

  // input 값 state 담기
  const onChangeEamil = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // 비밀번호 check 실시간 검증
  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordErr(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  return (
    <>
      <Background />
      <div className="signup_form_wrap">
        <h1 className="signup_title">회원가입</h1>

        <form onSubmit={idCheck}>
          <input
            className="username_from"
            required
            type="username"
            placeholder="닉네임"
            value={userName}
            onChange={onChangeUserName}
          />
          {clickVerifyButton ? (
            usableName ? (
              <p className="usable_user">사용가능한 닉네임입니다.</p>
            ) : null
          ) : unusableName ? (
            <p className="unusable_user">이미 사용중인 닉네임입니다.</p>
          ) : null}

          <button className="username_check_button" type="submit">
            중복확인
          </button>
        </form>

        <form onSubmit={onSubmit}>
          <input
            className="signup_form"
            required
            type="email"
            placeholder="이메일주소"
            value={email}
            onChange={onChangeEamil}
          />

          <input
            className="signup_form"
            required
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />

          <input
            className="signup_form"
            required
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          {passwordErr ? (
            <p className="password-feedback">비밀번호가 일치하지 않습니다.</p>
          ) : (
            <p></p>
          )}
          <button className="signup_button" type="submit">
            가입하기
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
