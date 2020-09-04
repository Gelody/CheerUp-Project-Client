import React from 'react';
import "./Card.css"
import Comment from './Comment'


function Card({ cards }: any) {
    return (
        <>
            <div className="maincard_wrapper">
                {cards.map((card: any, index: any) => (
                    <div className="maincard_box">
                        <div key={index} className="maincard">

                            <div className="maincards_text"> {card.text}</div>

                        </div>
                        <Comment></Comment>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;