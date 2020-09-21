import React from "react";
import "./MycardList.css";
import { Link } from "react-router-dom";
// 나의 응원 카드 리스트
function MycardList({ mycard }: any) {
  return (
    <>
      <h1 className="mycard_title">응원받은 카드</h1>
      <br />
      <div className="mycardlist_wrap">
        {mycard.map((card: any, index: any) => (
          <div key={index} className="mycard">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cheerup.site/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9E%90%EB%A3%8C/6f621257d310f1e1bc9f85f3b9d873a0e645a876002c24d97e018031124940da_v1.jpg" />
            <Link to={`/cardmodalpages/${card.id}`}>
              <span className="mycard_text"> {card.text}</span>
            </Link>
            <Link to={`/reviewmodal/${card.id}`} className="review_button">
              {/* <Link to={`/reviewmodal/${card.id}/1`} className="review_button"> */}
              후기등록
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default MycardList;
