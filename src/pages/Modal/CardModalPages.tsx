import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCardModal from "./CardModal";

function CardModalPage() {
  const [ismodalOpen, setisModalOpen]: any = useState(false);
  const [ismyCard, setisMyCard]: any = useState(false);
  const [modalCard, setModalCard]: any = useState([]);
  const cardId = window.location.href.split("/")[4];
  const user = JSON.parse(window.sessionStorage.user);
  const mycard = {
    headers: { authorization: user },
    params: {
      id: cardId,
    },
  };

  useEffect(() => {
    axios
      .get("/card/getOtherUrl", mycard)
      .then(({ data }) => {
        setModalCard(data);
        if (data) {
          console.log(`모달카드를 잘 받았습니다.`, data);
        } else {
          console.log(`카드 데이터가 없습니다.`);
        }
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

  const deleteCard = () => {
    setisMyCard(true);
  }

  return (
    <>
      <MyCardModal
        isOpen={ismodalOpen}
        close={closeModal}
        open={openModal}
        ismyCard={ismyCard}
        myCard={deleteCard}
        modalCard={modalCard}
      ></MyCardModal>
    </>
  );
}
export default CardModalPage;
