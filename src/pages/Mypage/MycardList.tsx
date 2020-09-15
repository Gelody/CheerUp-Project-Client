import React from "react";
import "./MycardList.css";
import { Link } from "react-router-dom";

// 나의 응원 카드 리스트
function MycardList({ mycard }: any) {
  const ismyCard = true;

  return (
    <>
      <h1 className="mycard_title">내 카드</h1>
      <br />
      <div className="mycardlist_wrap">
        {mycard.map((card: any, index: any) => (
          <div key={index} className="mycard">
            <Link to={`/cardmodalpages/${card.id}`}>
              <span className="mycard_text"> {card.text}</span>
            </Link>
            <Link to={`/reviewmodal/${card.id}`} className="review_button">
              후기등록
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MycardList;
