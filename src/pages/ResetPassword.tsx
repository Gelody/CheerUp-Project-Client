import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// useQuery 를 이용해서 리팩토링 할 것.
function IsValidToken() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const token = window.location.href.split("=")[1];
  const resetInfo = {
    token: token,
    newPassword: password
  };
  const history = useHistory();

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordErr(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    password !== passwordCheck
      ? setPasswordErr(true)
      : console.log({ resetInfo });
    axios
      .post("/mail/resetpassword", resetInfo)
      .then(res => {
        if (res.status === 202) {
          alert("비밀번호가 변경되었습니다.");
          history.push("/login");
        } else if (res.status === 402) {
          alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="passwords"
          value={password}
          placeholder="비밀번호"
          onChange={onChangePassword}
        ></input>
        <input
          type="passwords"
          value={passwordCheck}
          placeholder="비밀번호 확인"
          onChange={onChangePasswordCheck}
        ></input>
        {passwordErr ? <p>비밀번호가 일치하지 않습니다.</p> : <p> </p>}
        <button type="submit">비밀번호 바꾸기</button>
        {token}
      </form>
    </>
  );
}

export default IsValidToken;
