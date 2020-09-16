import React, { useState } from "react";
import "./Card.css";
import Comment from "./MainpageComment";

// 메인페이지의 카드(카드 내용과 댓글)
function Card({ cards }: any) {
  // const [isReview, setisReview]: any = useState(false);

  // const reviewCheck = () => {
  //     if (review.review === null) {
  //       setisReview(false);
  //     } else {
  //       setisReview(true);
  //     }
  //   };

  return (
    <>
      <div className="maincard_wrapper">
        {cards.map((card: any, id: any) => (
          <div key={id} className="maincard_box">
            <div className="maincard">
              <div className="maincards_text"> {card.text}</div>
            </div>
            <div className="main_review_box">
              <span className="main_review_text">
                카드작성자의 후기 :{card.review}
              </span>
            </div>
            <Comment cardId={card.id}></Comment>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
