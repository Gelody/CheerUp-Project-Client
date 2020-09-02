import React, { useState } from "react";
import "./UploadCard.css"
import axios from "axios";

function UploadCard() {
    const [text, setText] = useState("");
    const cardData = { text: text }

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        axios
            .post("/card", cardData)
            .then((res) => {
                if (res.data.success) {
                    alert("카드가 등록되었습니다.");
                } else {
                    alert("카드 등록에 문제가 있습니다.");
                }
            })
            .catch(err => console.log(err))
    };

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <textarea className="upload_form"
                        value={text}
                        onChange={onChangeText}
                        maxLength={250}
                        placeholder="어떤 일에 응원이 필요하신가요?">
                    </textarea>
                    <button className="upload_button" type="submit">카드 등록하기</button>
                </form>
            </div >
        </>
    )
}

export default UploadCard;