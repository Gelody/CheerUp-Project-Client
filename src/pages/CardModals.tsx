import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CardModals.css";
import axios from "axios";
import Comment from "./Comment";

function CardModal({ isOpen, close, open }: any) {
  const [modalCard, setModalCard]: any = useState([]);
  const history = useHistory();
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
      .get("/card/getUrl", mycard)
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
  useEffect(() => {
    open();
  }, []);
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <>
            <div className="ModalOverlay">
              <div className="ModalWrapper">
                <div className="ModalInner ">
                  <button
                    onClick={() => {
                      close();
                      history.push("/mypage");
                    }}
                  >
                    close
                  </button>
                  <Comment></Comment>
                </div>
              </div>
            </div>
          </>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default CardModal;
