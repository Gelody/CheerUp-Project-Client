import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Mypage from "../Mypage/Mypage";
import "./ReviewUpload.css";
import axios from "axios";

function ReviewUpload({ isOpen, open, close }: any) {
  const [text, setText] = useState("");
  const cardId = window.location.href.split("/")[4];
  const cardData = { text: text, id: cardId };
  const user = JSON.parse(window.sessionStorage.user);
  const history = useHistory();

  useEffect(() => {
    open();
  }, []);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/card/reviewUpdate", cardData, {
        headers: { authorization: user },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("후기가 등록 되었습니다.");
          history.push("/mypage"); // 마이페이지로
        } else {
          alert("후기 등록에 문제가 있습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <Mypage></Mypage>
          <div className="ModalOverlay">
            <div className="modal_Wrapper">
              <div className="modal_Inner ">
                <button
                  className="close_button"
                  onClick={() => {
                    close();
                    history.push("/mypage");
                  }}
                >
                  close
                </button>

                <div className="review_container">
                  <form onSubmit={onSubmit}>
                    <textarea
                      className="review_update_form"
                      value={text}
                      onChange={onChangeText}
                      maxLength={300}
                      placeholder="후기를 등록 해 주세요"
                    ></textarea>
                    <button className="review_update_button" type="submit">
                      후기 등록하기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </>
  );
}

export default ReviewUpload;
