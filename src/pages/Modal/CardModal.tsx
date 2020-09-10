import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CardModal.css";
import MyCardDelete from "./CardDelete";
import SNSShare from "./SnsShare"
import CommentUpload from "./CommentUpload"

function CardModal({ modalCard, isOpen, close, open, ismyCard, deleteCard }: any) {
    const modalComments = modalCard[0]?.Comment;
    const history = useHistory();

    useEffect(() => {
        open();
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
                                        <MyCardDelete cardId={modalCard[0]?.id}></MyCardDelete>
                                    </div>

                                    <div className="modal_card">
                                        <div className="modal_card_text">{modalCard[0]?.text}</div>
                                    </div>

                                    <div className="modal_comment_box">
                                        {modalComments?.map((comment: any, index: any) => (
                                            <div key={index}>
                                                <span className="modal_comments_username">{comment.User.userName}</span>
                                                <span className="modal_comments">{comment.text}</span>
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
