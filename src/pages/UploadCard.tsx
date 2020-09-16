import React, { useState } from "react";
import "./UploadCard.css";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// 카드 업로드 기능
function UploadCard() {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const user = JSON.parse(window.sessionStorage.user);
  const cardData = { text: text, user_Id: "user" };

  // 달력
  const onChangeDate = () => {
    setDate(date);
  };

  // 카드 등록 요청
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/card/create", cardData, { headers: { authorization: user } })
      .then((res) => {
        if (res.status === 200) {
          alert("카드가 등록되었습니다.");
        } else {
          alert("카드 등록에 문제가 있습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <textarea
            className="upload_form"
            value={text}
            onChange={onChangeText}
            maxLength={300}
            placeholder="Step1. 어떤 일에 응원이 필요하신가요?"
          ></textarea>
          <p className="calendar_title">
            Step.2 언제까지 응원이 필요하신지 선택 해 주세요
          </p>
          <Calendar
            className="calendar"
            onChange={onChangeDate}
            value={date}
          ></Calendar>
          <button className="upload_button" type="submit">
            카드 등록하기
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadCard;
