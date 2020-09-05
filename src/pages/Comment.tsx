import React, { useState, useEffect } from 'react';
import SnsShare from "./SnsShare"
import axios from "axios";

function Comment({ cardId }: any) {
    const [text, setText] = useState("");
    const [comments, setComments]: any = useState("");
    const card = { cardId }
    const user = JSON.parse(window.sessionStorage.user);
    const comment_upload_Data = { text: text, id: card.cardId }
    const config = {
        headers: { authorization: user },
        params: {
            id: card.cardId
        },
    }


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

    useEffect(() => {
        axios
            .get('/comment/getAll', config)
            .then(({ data }: any) => {
                setComments(data);
                if (data) {
                    console.log("모든 댓글을 성공적으로 가져왔습니다", data)
                } else {
                    console.log("댓글 데이터가 없습니다")
                }
            })
            .catch((err: any) => console.log(err));
        console.log("id", card.cardId)
    }, [card.cardId, config]);

    return (
        <>
            <div className="comment">
                의 댓글입니다.
            <SnsShare />

                <div>
                    {comments}
                    <form onSubmit={onSubmit}>
                        <textarea className="form"
                            value={text}
                            onChange={onChangeText}
                            maxLength={50}
                            placeholder="댓글달기..">
                        </textarea>
                        <button className="button" type="submit">댓글 등록하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Comment;