import React from 'react';
import { useParams } from 'react-router-dom';
import "./Card.css"
import Comment from './Comment'
function Card() {
    let { id } = useParams();
    return (
        <>
            <div className="card_box">
                <div className="card">
                    {id}의 카드입니다.
                asdsdasd
                asdasdasd
            </div>
                <Comment></Comment>
            </div>
        </>
    )
}

export default Card;