import React, { useState } from "react";
import Dashboard from "./Dashboard";
import MycardList from "./MycardList";
import CheeringList from "./CheeringList";
import Nav from "./Nav";
import axios from "axios";

function Mypage() {
  const [mycard, setmycard]: any = useState([])
  const user = JSON.parse(window.sessionStorage.user);

  axios
    .get('/card/get', { headers: { authorization: user } })
    .then((res) => {
      if (res.status === 200) {
        console.log("카드의 정보를 성공적으로 가져왔습니다")
        mycard.push(res.data);
        // console.log(mycard)
      } else {
        console.log("카드의 정보를 가져오는데 문제가 있습니다")
      }
    })
    .catch(err => console.log(err))

  return (
    <>
      <Nav></Nav>
      <Dashboard></Dashboard>
      <MycardList {...mycard} />
      <CheeringList></CheeringList>
    </>
  );
}

export default Mypage;
