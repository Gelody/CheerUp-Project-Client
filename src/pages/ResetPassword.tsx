import React, { useState } from "react";

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

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordErr(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type="passwords"
          value={password}
          onChange={onChangePassword}
        ></input>
        <input
          type="passwords"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        ></input>
        {passwordErr ? <p>비밀번호가 일치하지 않습니다.</p> : <p></p>}
        <button type="submit">비밀번호 바꾸기</button>
        {token}
      </form>
    </>
  );
}

export default IsValidToken;
