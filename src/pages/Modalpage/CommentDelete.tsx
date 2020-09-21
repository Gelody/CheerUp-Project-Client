import React from "react";
import axios from "axios";
import swal from "sweetalert";

function CommentDelete({ cardId, commentId }: any) {
  const commentData = { card_id: cardId, comment_id: commentId };
  const user = JSON.parse(window.sessionStorage.user);

  // 댓글 삭제 요청
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/comment/delete", commentData, {
        headers: { authorization: user },
      })
      .then((res) => {
        if (res.status === 200) {
          swal("댓글이 삭제되었습니다.", "", "success");
          window.location.replace(cardId);
        } else {
          swal("댓글 삭제에 문제가 있습니다.", "", "warning");
        }
      });
    // .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <button className="comment_delete_button" type="submit">
          댓글삭제하기
        </button>
      </form>
    </>
  );
}

export default CommentDelete;
