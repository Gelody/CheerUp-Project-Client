import React from "react";
import axios from "axios";

function CommentDelete({ cardId, commentId }: any) {
    const commentData = { card_id: cardId, comment_id: commentId }
    const user = JSON.parse(window.sessionStorage.user);

    // 댓글 삭제 요청
    const onSubmit = () => {
        axios
            .post('/comment/delete', commentData, { headers: { authorization: user } })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <button className="button" type="submit">댓글삭제하기</button>
            </form>
        </>
    )
}

export default CommentDelete;