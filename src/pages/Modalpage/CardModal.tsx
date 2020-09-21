/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CardModal.css";
import MyCardDelete from "./CardDelete";
import SNSShare from "./SnsShare";
import CommentUpload from "./CommentUpload";
import CardUpdate from "./CardUpdate";
import CommentDelete from "./CommentDelete";
import Mypage from "../Mypage/Mypage";

// 카드 모달 (버튼들, 카드 수정, 카드 삭제, 댓글 등록, 댓글 삭제)
function CardModal({
  modalCard,
  isOpen,
  open,
  close,
  verifyUser,
  ismyCard,
  review,
  isReview,
  reviewCheck,
  myId,
}: any) {
  const modalComments = modalCard[0]?.Comment;
  const history = useHistory();
  const [updateClick, setUpdateClick]: any = useState(false); // 카드 수정 버튼 클릭 상태 관리

  useEffect(() => {
    open();
  }, []);

  useEffect(() => {
    reviewCheck();
  }, []);

  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <>
            <Mypage></Mypage>
            {reviewCheck()}
            {verifyUser()}
            <div className="ModalOverlay">
              <div className="modal_Wrapper">
                <div className="modal_Inner ">
                  <div className="button_box">
                    <button
                      className="close_button"
                      onClick={() => {
                        close();
                        history.push("/mypage");
                      }}
                    >
                      close
                    </button>

                    <SNSShare></SNSShare>

                    {ismyCard ? (
                      <button
                        onClick={() => setUpdateClick(true)}
                        className="nav_update_button"
                      >
                        카드수정
                      </button>
                    ) : null}
                    {ismyCard ? (
                      <MyCardDelete cardId={modalCard[0]?.id}></MyCardDelete>
                    ) : null}
                  </div>

                  {updateClick ? (
                    <CardUpdate
                      cardId={modalCard[0]?.id}
                      cardText={modalCard[0]?.text}
                    ></CardUpdate>
                  ) : null}

                  <div className="modal_card">
                    <div className="modal_card_date">
                      {modalCard[0]?.D_day}까지 응원 해주세요
                    </div>

                    <br />
                    <br />

                    <div className="modal_card_text">{modalCard[0]?.text}</div>
                  </div>

                  {isReview ? (
                    <div className="modal_review_box">
                      <span className="review_text">
                        카드작성자 {myId.userName}님의 후기
                        <br />:{review.review}
                      </span>
                    </div>
                  ) : null}

                  <div className="modal_comment_box">
                    {modalComments?.map((comment: any, index: any) => (
                      <div key={index}>
                        <span className="modal_comments_username">
                          {comment.User.userName}
                        </span>

                        <span className="modal_comments">{comment.text}</span>
                        <span>
                          {ismyCard ? (
                            <CommentDelete
                              cardId={modalCard[0]?.id}
                              comments={modalCard[0]?.Comment}
                              commentId={comment.id}
                            ></CommentDelete>
                          ) : null}
                        </span>
                      </div>
                    ))}
                  </div>
                  <CommentUpload cardId={modalCard[0]?.id}></CommentUpload>
                </div>
              </div>
            </div>
          </>
        </React.Fragment>
      ) : null}
    </>
  );
}

export default CardModal;
