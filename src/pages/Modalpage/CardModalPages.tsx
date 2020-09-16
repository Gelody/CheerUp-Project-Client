/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardModal from "./CardModal";

function CardModalPage() {
  const [isReview, setisReview]: any = useState(false);
  const [ismyCard, setisMyCard]: any = useState(false);
  const [myId, setmyId]: any = useState([]);
  const [ismodalOpen, setisModalOpen]: any = useState(false);
  const [modalCard, setModalCard]: any = useState([]);
  const [review, setReview]: any = useState([]);
  const cardId = window.location.href.split("/")[4];
  const user = JSON.parse(window.sessionStorage.user);
  const mycard = {
    headers: { authorization: user },
    params: {
      id: cardId,
    },
  };

  // 로그인한 유저의 id 요청
  useEffect(() => {
    axios
      .get("/user/getid", { headers: { authorization: user } })
      .then(({ data }) => {
        setmyId(data);
        // if (data) {
        //   console.log("유저 아이디를 성공적으로 받았습니다", data);
        // } else {
        //   console.log("유저의 아이디 데이터가 없습니다");
        // }
      })
      .catch((err) => console.log(err));
  }, []);

  // 내 모든 카드들 요청
  useEffect(() => {
    axios
      .get("/card/getOtherUrl", mycard)
      .then(({ data }) => {
        setModalCard(data);
        // if (data) {
        //   console.log(`모달카드를 잘 받았습니다.`, data);
        // } else {
        //   console.log(`카드 데이터가 없습니다.`);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 내 리뷰 요청
  useEffect(() => {
    axios
      .get("./card/getReview", mycard)
      .then(({ data }) => {
        setReview(data);
        // if (data) {
        //   console.log("후기를 잘 받았습니다", data);
        // } else {
        //   console.log("후기 데이터가 없습니다");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  const verifyUser = () => {
    if (myId === modalCard[0]?.user_Id) {
      setisMyCard(true);
    } else {
      setisMyCard(false);
    }
  };

  const reviewCheck = () => {
    if (review.review === null) {
      setisReview(false);
    } else {
      setisReview(true);
    }
  };

  return (
    <>
      <CardModal
        isOpen={ismodalOpen}
        close={closeModal}
        open={openModal}
        modalCard={modalCard}
        ismyCard={ismyCard}
        verifyUser={verifyUser}
        reviewCheck={reviewCheck}
        review={review}
        isReview={isReview}
      ></CardModal>
    </>
  );
}
export default CardModalPage;
