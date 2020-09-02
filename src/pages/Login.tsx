import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";

function Login() {
  // input을 담을 상태들과 상태변경 메서드 선언하기
  // Hooks 사용하기
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignin, setIsSignin] = useState(false);
  const signInInfo = { userId: email, userPassword: password };
  const history = useHistory();

  // 서버 요청
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post("/user/login", signInInfo)
      // 세션 스토리지에 저장하는 것으로 구현
      .then((res) => {
        console.log(JSON.stringify(res.data.token));
        sessionStorage.setItem("user", JSON.stringify(res.data.token));
        setIsSignin(true);
        if (res.status === 403) {
          alert("존재하지 않는 아이디입니다.");
          history.push("/login");
        } else if (res.status === 200) {
          history.push(`/main/${Math.floor(Math.random() * 100)}`);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSignin(false);
        setError(err.message);
      });
  };

  // input 값 state 담기
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          className="login_form"
          type="email"
          placeholder="아이디(이메일 주소)"
          onChange={onChangeEmail}
        />

        <input
          required
          className="login_form"
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        />

        <button className="login_button" type="submit">
          로그인
        </button>

        <p className="text">또는</p>

        <button className="google_button">구글 로그인</button>
        <button className="kakao_button">카카오 로그인</button>

        <p className="text">계정이 없으신가요?</p>
        <Link to="/signup" className="signup_link">
          회원가입
        </Link>
      </form>
    </div>
  );
}

export default Login;
