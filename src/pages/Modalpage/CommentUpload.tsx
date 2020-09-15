import React, { useState } from "react";
import axios from "axios";
import "./CommentUpload.css"

function CommentUpload({ cardId }: any) {
    const user = JSON.parse(window.sessionStorage.user);
    const [text, setText] = useState("");
    const comment_upload = { text: text, id: cardId };


    // 댓글 등록 요청
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        axios
            .post("/comment/create", comment_upload, {
                headers: { authorization: user },
            })
    };

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <div className="modal_comment_form_wrap">
            <form onSubmit={onSubmit}>
                <textarea
                    className="modal_comment_form"
                    value={text}
                    onChange={onChangeText}
                    maxLength={50}
                    placeholder="댓글달기.."
                ></textarea>
                <button className="modal_comment_button" type="submit">
                    등록
          </button>
            </form>
        </div>
    )
}

export default CommentUpload;