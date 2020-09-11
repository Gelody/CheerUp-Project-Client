import React, { useState, useEffect } from "react";
import Card from "./Card";
import Nav from "../Nav";
import axios from "axios";


// 메인페이지, 모든 카드 받아오는 요청
function Main() {
  const [cards, setCards]: any = useState([])

  useEffect(() => {
    axios
      .get('/card/getAll')
      .then(({ data }) => {
        setCards(data);
        // if (data) {
        //   console.log("모든 카드를 성공적으로 가져왔습니다")
        // } else {
        //   console.log("카드 데이터가 없습니다")
        // }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <Card cards={cards} />
    </>
  );
}

export default Main;