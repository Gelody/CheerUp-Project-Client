/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Background from "./background";
import "./ConfirmEmail.css";
import swal from "sweetalert";
// 이메일에서 링크를 클릭하면 파라미터에 토큰을 달고 해당 컴포넌트로 이동
// useParams로 구한 쿼리를 /mail/confirmmail 로 post
// res 200과 400으로 온다.

function ConfirmEmail() {
  const history = useHistory();
  const url = window.location.href.split("?")[1];
  console.log(url);

  useEffect(() => {
    axios
      .post("/mail/confirmmail", {
        url: url,
      })
      .then((res) => {
        if (res.status === 200) {
          swal("이메일 인증이 완료되었습니다.", "", "success");
          history.push("/login");
        }
      })
      .catch((err) => {
        if (err.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          // console.log("err:", err);
          // console.log("err.response:", err.response);
          // console.log("데이터:", err.response.data);
          // console.log("상태코드:", err.response.status);
          // console.log("headers:", err.response.headers);
        } else if (err.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          // console.log("request:", err.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          // console.log("Error:", err.message);
        }
        // console.log("config:", err.config);
      });
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("야호");
  //    history.push("/login");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Background />
      <div className="confirm_title">이메일 인증이 완료되었습니다.</div>
    </>
  );
}

export default ConfirmEmail;
