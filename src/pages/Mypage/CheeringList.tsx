import React from "react";
import { Link } from "react-router-dom";
function CheeringList({ cheerCard }: any) {
  return (
    <>
      <h1 className="mycard_title">응원한 카드</h1>
      <br />
      <div className="mycardlist_wrap">
        {cheerCard.map((card: any, index: any) => (
          <div key={index} className="mycard">
            <Link to={`/cardmodal/${card.id}`}>
              <span className="mycard_text">{card.Card.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheeringList;
