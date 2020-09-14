import React from 'react';
import "./Card.css"
import Comment from "./MainpageComment"

// 메인페이지의 카드(카드 내용과 댓글)
function Card({ cards }: any) {
    return (
        <>
            <div className="maincard_wrapper">
                {cards.map((card: any, id: any) => (
                    <div key={id} className="maincard_box">
                        <div className="maincard">
                            <div className="maincards_text"> {card.text}</div>
                        </div>
                        <Comment cardId={card.id}></Comment>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;