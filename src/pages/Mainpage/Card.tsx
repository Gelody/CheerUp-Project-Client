import React, { useEffect } from "react";
import "./Card.css";
import Comment from "./MainpageComment";

// 메인페이지의 카드(카드 내용과 댓글)
function Card({ cards }: any) {
  if (cards.length === 0) {
    return <div>Loading...</div>;
  }
  console.log("카드는 뭣을?", { cards });
  return (
    <>
      <div className="maincard_wrapper">
        {cards.map((card: any, id: any) => (
          <div key={id} className="maincard_box">
            <div className="maincard">
              <img
                src={require(`../../images/${Math.floor(
                  Math.random() * 10
                )}.jpg`)}
                className="card_img"
              ></img>
              {/* <PutImg /> */}
              <div className="maincards_date">
                {card.D_day} 까지 응원해주세요!
              </div>
              <div className="maincards_text">{card.text}</div>
            </div>

            {card.review ? (
              <div className="main_review_box">
                <span className="main_review_text">
                  카드작성자의 후기 :{card.review}
                </span>
              </div>
            ) : null}

            <Comment cardId={card.id}></Comment>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
