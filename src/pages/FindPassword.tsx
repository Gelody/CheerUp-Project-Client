import React, { useState } from "react";
import axios from "axios";

function FindPassword() {
  const [email, setEmail] = useState("");
  const resetPwd = { email: email };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post("/mail/sendreset", resetPwd)
      .then(res => {
        if (res.status === 200) {
          alert("이메일에서 인증메일을 확인해주세요.");
          window.open(`https://www.${email.split("@")[1]}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          required
          type="email"
          className="pwd_eamil"
          placeholder="가입된 이메일주소"
          onChange={onChangeEmail}
        ></input>
        <button className="pwd_button" type="submit">
          재설정 메일 보내기
        </button>
      </form>
    </>
  );
}

export default FindPassword;
