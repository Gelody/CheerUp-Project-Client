import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Background from "./background";
import swal from "sweetalert";

function Login() {
  // input을 담을 상태들과 상태변경 메서드 선언하기
  // Hooks 사용하기
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");
  const [, setIsSignin] = useState(false);
  const signInInfo = { userId: email, userPassword: password };
  const history = useHistory();

  // 서버 요청
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post("/user/login", signInInfo)
      // 세션 스토리지에 저장하는 것으로 구현
      .then(res => {
        sessionStorage.setItem("user", JSON.stringify(res.data.token));
        setIsSignin(true);
        if (res.status === 403) {
          swal("존재하지 않는 아이디입니다.", "", "warning");
          history.push("/login");
        } else if (res.status === 200 && res.data.age) {
          history.push("/main");
        } else if (!res.data.age) {
          swal("추가 회원 정보를 입력해주세요.", "", "info");
          history.push("/userinfo");
        }
      })
      .catch(err => {
        // console.log(err);
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
    <>
      <Background></Background>
      <form onSubmit={onSubmit} className="login_form">
        <h1 className="login_title">로그인</h1>
        <input
          required
          className="login_input"
          type="email"
          placeholder="아이디(이메일 주소)"
          onChange={onChangeEmail}
        />
        <br />
        <input
          required
          className="login_input"
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        />
        <br />
        <Link to="/findpassword" className="find_pwd">
          비밀번호를 잊어버렸나요?
        </Link>
        <br />
        <button className="login_button" type="submit">
          로그인
        </button>
        <br />
        <p className="text">계정이 없으신가요?</p>
        <Link to="/signup" className="signup_link">
          <p className="login_cta">회원가입</p>
        </Link>
      </form>
    </>
  );
}

export default Login;
