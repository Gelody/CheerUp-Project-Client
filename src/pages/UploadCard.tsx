import React, { useState } from "react";
import "./UploadCard.css"
import axios from "axios";

function UploadCard() {
    const [text, setText] = useState("");
    const user = JSON.parse(window.sessionStorage.user);
    const cardData = { text: text, user_Id: "user" }

    // 카드 등록 요청 
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("/card/create", cardData, { headers: { authorization: user } })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
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
                        maxLength={300}
                        placeholder="어떤 일에 응원이 필요하신가요?">
                    </textarea>
                    <button className="upload_button" type="submit">카드 등록하기</button>
                </form>
            </div >
        </>
    )
}

export default UploadCard;




