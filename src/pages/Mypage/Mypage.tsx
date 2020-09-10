import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import MycardList from "./MycardList";
import CheeringList from "./CheeringList";
import Nav from "../Nav";
import axios from "axios";

function Mypage() {
  const [mycard, setMycard]: any = useState([]);
  const [cheerCard, setcheerCard]: any = useState([]);
  const [myCount, setmyCount]: any = useState([]);
  const [myId, setmyId]: any = useState([]);
  const user = JSON.parse(window.sessionStorage.user);

  useEffect(() => {
    axios
      .get("/user/getid", { headers: { authorization: user } })
      .then(({ data }) => {
        setmyId(data);
        if (data) {
          console.log("유저 아이디를 성공적으로 받았습니다", data);
        } else {
          console.log("유저의 아이디 데이터가 없습니다");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/comment/getMyComment", { headers: { authorization: user } })
      .then(({ data }) => {
        setmyCount(data);
        if (data) {
          console.log("내가 받은 응원 수의 총 합을 성공적으로 받았습니다", data);
        } else {
          console.log("응원 수의 총 합을 받아오는데 문제가 있습니다 데이터");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/card/get", { headers: { authorization: user } })
      .then(({ data }) => {
        setMycard(data);
        if (data) {
          console.log("나의 카드를 성공적으로 가져왔습니다");
        } else {
          console.log("카드 데이터가 없습니다");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/comment/getCheer", { headers: { authorization: user } })
      .then(({ data }) => {
        setcheerCard(data);
        if (data) {
          console.log("응원한 카드를 성공적으로 가져왔습니다")
        } else {
          console.log("카드 데이터가 없습니다")
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <Dashboard />
      <MycardList mycard={mycard} />
      <CheeringList cheerCard={cheerCard} />
    </>
  );
}

export default Mypage;
