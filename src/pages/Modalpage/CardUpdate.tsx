import React, { useState } from "react";
import axios from "axios";
import "./CardUpdate.css"

function MycardUpdate({ cardId }: any) {
    const [text, setText] = useState("");
    const user = JSON.parse(window.sessionStorage.user);
    const cardData = { text: text, id: cardId };

    // 카드 수정 요청
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        axios
            .post("/card/update", cardData, { headers: { authorization: user } })
    }

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <textarea className="modal_update_form"
                        value={text}
                        onChange={onChangeText}
                        maxLength={300}
                        placeholder="카드내용을 수정해주세요">
                    </textarea>
                    <button className="modal_update_button" type="submit">카드 수정하기</button>
                </form>
            </div >
        </>
    )
}

export default MycardUpdate;