import React, { useState } from "react";
import "./Signup.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Signup() {
  // input을 담을 상태들과 상태변경 함수 선언하기
  // Hooks 사용하기
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const signUpInfo = {
    userId: email,
    userPassword: password,
    usernName: userName,
  };
  const history = useHistory();

  // 서버 요청 및 비밀번호 검증로직
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    password !== passwordCheck
      ? setPasswordErr(true)
      : console.log({ signUpInfo });
    axios
      .post("/user/join", signUpInfo)
      .then((res) => {
        if (res.status === 409) {
          alert("계정이 이미 존재합니다.");
          history.push(`/main/${Math.floor(Math.random() * 100)}`);
        } else if (res.status === 200) {
          alert("가입이 완료되었습니다.");
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="signup_form"
          required
          type="email"
          placeholder="아이디 (이메일 주소)"
          value={email}
          onChange={onChangeEamil}
        />

        <input
          className="signup_form"
          required
          type="username"
          placeholder="이름"
          value={userName}
          onChange={onChangeUserName}
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
  );
}

export default Signup;
