/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CardModal.css";
import MyCardDelete from "./CardDelete";
import SNSShare from "./SnsShare";
import CommentUpload from "./CommentUpload";
import CardUpdate from "./CardUpdate";
import CommentDelete from "./CommentDelete";
import Mypage from "../Mypage/Mypage"

// 카드 모달 (버튼들, 카드 수정, 카드 삭제, 댓글 등록, 댓글 삭제)
function CardModal({ modalCard, isOpen, open, close, ismyCard, verifyUser, myId }: any) {
    const modalComments = modalCard[0]?.Comment;
    const history = useHistory();

    useEffect(() => {
        open();
    }, []);


    useEffect(() => {
        if (myId === modalCard[0]?.user_Id) {
            verifyUser(); // true 
        }
    }, [])

    return (
        <React.Fragment>
            {isOpen ? (
                <React.Fragment>
                    <>
                        <Mypage></Mypage>
                        <div className="ModalOverlay">
                            <div className="modal_Wrapper">
                                <div className="modal_Inner ">

                                    <div className="button_box">
                                        <button className="close_button"
                                            onClick={() => {
                                                close();
                                                history.push("/mypage");
                                            }}
                                        >close</button>
                                        <SNSShare></SNSShare>

                                        <button className="nav_update_button">카드수정하기</button>
                                        <MyCardDelete cardId={modalCard[0]?.id}></MyCardDelete>

                                        {ismyCard ? (
                                            <MyCardDelete cardId={modalCard[0]?.id}></MyCardDelete>) : null
                                        }

                                    </div>

                                    <div className="modal_card">
                                        <div className="modal_card_text">{modalCard[0]?.text}</div>
                                    </div>


                                    <CardUpdate cardId={modalCard[0]?.id} cardText={modalCard[0]?.text}></CardUpdate>


                                    <div className="modal_comment_box">
                                        {modalComments?.map((comment: any, index: any) => (
                                            <div key={index}>
                                                <span className="modal_comments_username">{comment.User.userName}</span>
                                                <span className="modal_comments">{comment.text}</span>
                                                <CommentDelete cardId={modalCard[0]?.id} comments={modalCard[0]?.Comment} commentId={comment.id}></CommentDelete>
                                            </div>
                                        ))}
                                    </div>
                                    <CommentUpload cardId={modalCard[0]?.id}></CommentUpload>
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
