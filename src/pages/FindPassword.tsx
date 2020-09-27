import React, { useState } from "react";
import axios from "axios";
import Background from "./background";
import "./FindPassword.css";
import swal from "sweetalert";

function FindPassword() {
  const [email, setEmail] = useState("");
  const resetPwd = { email: email };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.post("/mail/sendreset", resetPwd).then((res) => {
      if (res.status === 200) {
        swal("이메일에서 인증메일을 확인해주세요.", "", "info");
        window.open(`https://www.${email.split("@")[1]}`);
      }
    });
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Background />
      <div className="form_wrap">
        <h1 className="fpw_title">비밀번호 재설정하기</h1>
        <form onSubmit={onSubmit}>
          <input
            required
            type="email"
            className="pwd_email"
            placeholder="가입된 이메일주소"
            onChange={onChangeEmail}
          ></input>
          <button className="pwd_button" type="submit">
            재설정 메일 보내기
          </button>
        </form>
      </div>
    </>
  );
}

export default FindPassword;
