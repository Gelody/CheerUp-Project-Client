import React from "react";
import axios from "axios";

function CommentDelete({ cardId, commentId }: any) {
    const commentData = { card_id: cardId, comment_id: commentId }
    const user = JSON.parse(window.sessionStorage.user);

    // 댓글 삭제 요청
    const onSubmit = () => {
        axios
            .post('/comment/delete', commentData, { headers: { authorization: user } })
            // .then((data) => {
            //     if (data) {
            //         console.log(data)
            //         alert("댓글이 삭제되었습니다.")
            //     } else {
            //         alert("댓글 삭제에 문제가 있습니다.")
            //     }
            // })
            .catch(err => console.log(err))
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