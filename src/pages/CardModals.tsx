import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CardModals.css";
import axios from "axios";

function CardModal({ isOpen, close, open }: any) {
  const [modalCard, setModalCard]: any = useState([]);
  const modalComments = modalCard[0]?.Comment
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
                <button className="close_button"
                  onClick={() => {
                    close();
                    history.push("/mypage");
                  }}
                >close</button>

                <div className="ModalInner ">
                  <div className="modalcard">{modalCard[0]?.text}</div>

                  {modalComments?.map((comment: any, index: any) => (
                    <div key={index} className="modalcomment">
                      {comment.User.userName}
                      {comment.text}

                    </div>
                  ))}

                </div>

              </div>
            </div>
          </>
        </React.Fragment>
      ) : null
      }
    </React.Fragment >
  );
}

export default CardModal;
