import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import MycardList from "./MycardList";
import CheeringList from "./CheeringList";
import Nav from "./Nav";
import axios from "axios";

function Mypage() {
  const [mycard, setMycard]: any = useState([])
  const user = JSON.parse(window.sessionStorage.user);

  useEffect(() => {
    axios
      .get('/card/get', { headers: { authorization: user } })
      .then(({ data }) => {
        setMycard(data);
        if (data) {
          console.log("나의 카드를 성공적으로 가져왔습니다")
        } else {
          console.log("카드 데이터가 없습니다")
        }
      })
      .catch(err => console.log(err))
  }, [user]);

  return (
    <>
      <Nav />
      <Dashboard />
      <MycardList mycard={mycard} />
      <CheeringList />
    </>
  );
}

export default Mypage;
