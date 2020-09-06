import React, { useState, useEffect } from 'react';
import SnsShare from "./SnsShare";
import axios from "axios";
import './Comments.css';

function Comment({ cardId }: any) {
    const [text, setText] = useState("");
    const [comments, setComments]: any = useState([]);
    const card = { cardId }
    const user = JSON.parse(window.sessionStorage.user);
    const comment_upload_Data = { text: text, id: card.cardId };
    const comment_get_Data = {
        headers: { authorization: user },
        params: {
            id: card.cardId,
        },
    }

    // 댓글 등록 요청
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("/comment/create", comment_upload_Data, { headers: { authorization: user } })
            .then((res) => {
                if (res.status === 200) {
                    alert("댓글이 등록되었습니다.");
                } else {
                    alert("댓글 등록에 문제가 있습니다.");
                }
            })
            .catch(err => console.log(err))
    };

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    // 모든 댓글 받아오는 요청
    useEffect(() => {
        axios
            .get('/comment/get', comment_get_Data)
            .then(({ data }) => {
                setComments(data);
                if (data) {
                    console.log("모든 댓글을 성공적으로 가져왔습니다")
                    console.log(data)
                } else {
                    console.log("댓글 데이터가 없습니다")
                }
            })
            .catch((err: any) => console.log(err));
    }, []);


    return (
        <div className="comment_wrap">
            <div className="comment_box">
                <SnsShare />
                <br />
                {comments.map((comments: any) => (
                    <div className="comments_list">
                        <span className="comments_user_name">{comments.User.userName}</span>
                        <span className="user_comment"> {comments.text}</span>
                    </div>
                ))}
            </div>

            <div className="comment_form_wrap">
                <form onSubmit={onSubmit}>
                    <textarea className="comment_form"
                        value={text}
                        onChange={onChangeText}
                        maxLength={50}
                        placeholder="댓글달기..">
                    </textarea>
                    <button className="comment_button" type="submit">등록</button>
                </form>
            </div>
        </div>
    )
}

export default Comment;