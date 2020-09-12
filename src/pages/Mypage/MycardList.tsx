import React from "react";
import "./MycardList.css";
import { Link } from "react-router-dom";

// 나의 응원 카드 리스트
function MycardList({ mycard }: any) {
  const isLogin = true;

  return (
    <>
      <h1 className="mycard_title">내 카드</h1>
      <br />
      <div className="mycardlist_wrap">
        {mycard.map((card: any, index: any) => (
          <div key={index} className="mycard">
            <Link to={`/cardmodalpages/${card.id}`}>
              <span className="mycard_text"> {card.text}</span>
              <form>
                <button className="review_button" type="submit">
                  후기등록
                </button>
              </form>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MycardList;
