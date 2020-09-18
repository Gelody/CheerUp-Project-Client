import React, { useState, useEffect } from "react";
import Card from "./Card";
import Nav from "../Nav";
import axios from "axios";

// 메인페이지, 모든 카드 받아오는 요청
function Main() {
  const [cards, setCards]: any = useState([]);
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching]: any = useState(false);

  const loadData = () => {
    let url = `/card/getAll/?page=${page}`;
    axios
      .get(url)
      .then(({ data }) => {
        setCards([...cards, ...data]);
        setPage(page + 1);
        setIsFetching(false);
        if (data) {
          console.log("모든 카드를 성공적으로 가져왔습니다", data);
          console.log(page);
        } else {
          console.log("카드 데이터가 없습니다");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isScrolling = () => {
    if (
      window.innerHeight + Math.floor(document.documentElement.scrollTop) !==
      document.documentElement.offsetHeight
    ) {
      // 제일 하단이 아닐 때는 그냥 리턴
      return;
    }
    setIsFetching(true); // 제일 하단일 때 fetching 되었음을 기록하기
  };

  useEffect(() => {
    loadData();
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);
  // 첫 렌더링과 마지막 unmount에서 호출하기

  useEffect(() => {
    if (isFetching) {
      loadData();
    }
  }, [isFetching]);

  return (
    <>
      <Nav />
      <Card cards={cards} />
    </>
  );
}

export default Main;
