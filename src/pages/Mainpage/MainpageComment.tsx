/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainpageComment.css";

// 메인페이지의 댓글란(댓글 업로드 & 모든 댓글 요청)
function Comment({ cardId }: any) {
  const [text, setText] = useState("");
  const [comments, setComments]: any = useState([]);
  const card = { cardId };
  const user = JSON.parse(window.sessionStorage.user);
  const comment_upload_Data = { text: text, id: card.cardId };
  const comment_get_Data = {
    headers: { authorization: user },
    params: {
      id: card.cardId
    }
  };

  // 댓글 업로드 요청
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/comment/create", comment_upload_Data, {
      headers: { authorization: user }
    });
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // 댓글 받아오는 요청
  useEffect(() => {
    axios
      .get("/comment/get", comment_get_Data)
      .then(({ data }) => {
        setComments(data);
        // if (data) {
        //   console.log("모든 댓글을 성공적으로 가져왔습니다");
        // } else {
        //   console.log("댓글 데이터가 없습니다");
        // }
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <div className="comment_wrap">
      <div className="comment_box">
        <br />
        {comments.map((comments: any, index: any) => (
          <div key={index} className="comments">
            <span className="comments_user_name">{comments.User.userName}</span>
            <span className="user_comment"> {comments.text}</span>
          </div>
        ))}
      </div>

      <div className="comment_form_wrap">
        <form onSubmit={onSubmit}>
          <textarea
            className="comment_form"
            value={text}
            onChange={onChangeText}
            maxLength={80}
            placeholder="댓글달기.."
          ></textarea>
          <button className="comment_button" type="submit">
            등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
