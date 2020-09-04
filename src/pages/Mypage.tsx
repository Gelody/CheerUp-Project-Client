import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import MycardList from "./MycardList";
import CheeringList from "./CheeringList";
import Nav from "./Nav";
import axios from "axios";

function Mypage() {
  const [mycard, setmycard]: any = useState([])
  const user = JSON.parse(window.sessionStorage.user);
  useEffect(() => {
    axios
      .get('/card/get', { headers: { authorization: user } })
      .then((res) => {
        if (res.status === 200) {
          console.log("카드의 정보를 성공적으로 가져왔습니다")
          for (let i = 0; i < res.data.length; i++) {
            // mycard.push(<li>res.data[i].text</li>)
            mycard.push(res.data[i].text)
          }
          console.log("여기는 마이페이지", mycard)
        } else {
          console.log("카드의 정보를 가져오는데 문제가 있습니다")
        }
      })
      .catch(err => console.log(err))
  })

  return (
    <>
      <Nav></Nav>
      <Dashboard></Dashboard>
      <MycardList mycards={mycard} />
      {/* <MycardList {...mycard} /> */}
      <CheeringList></CheeringList>
    </>
  );
}

export default Mypage;
