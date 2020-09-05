import React from 'react';
import "./Card.css"
import Comment from './Comment'


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