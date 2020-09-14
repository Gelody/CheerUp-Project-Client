import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
        url: url
      })
      .then(res => {
        if (res.status === 200) {
          alert("이메일 인증이 완료되었습니다.");
          history.push("/login");
        }
      })
      .catch(err => {
        if (err.response) {
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

        // if (err.response.status === 404) {
        //   alert("이메일 인증에 문제가 있습니다.");
        // }
        // // history.push("/signup");
        // console.log("캐치:", err);
        // console.log(err.response);
        // console.log(err.response.status);
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
    <div>
      이메일 인증이 완료되었습니다. <p />
      3초 뒤 자동으로 이동합니다...
      {url}
    </div>
  );
}

export default ConfirmEmail;
