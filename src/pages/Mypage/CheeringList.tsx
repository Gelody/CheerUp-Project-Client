import React from "react";
import { Link } from "react-router-dom";

// 내가 응원 한 카드 리스트
function CheeringList({ cheerCard }: any) {
  const isLogin = false;
  return (
    <>
      <h1 className="mycard_title">응원한 카드</h1>
      <br />
      <div className="mycardlist_wrap">
        {cheerCard.map((card: any, index: any) => (
          <div key={index} className="mycard">
            <Link to={`/cardmodalpages/${card?.card_id}`}>
              <span className="mycard_text">{card.Card?.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheeringList;
