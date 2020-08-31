import React from 'react';
import { useParams } from 'react-router-dom';

function Card() {
    let { id } = useParams();
    return <div>{id}의 카드입니다.</div>
}

export default Card;