import React from 'react';
import { useParams } from 'react-router-dom';
import "./Card.css"
import Comment from './Comment'
import axios from 'axios';

function Card() {
    let { id } = useParams();

    axios
        .get('/card/getAll')
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                console.log("모든 카드 불러오는데 성공했습니다")
            } else {
                console.log("카드의 정보를 가져오는데 문제가 있습니다")
            }
        })
        .catch(err => console.log(err))

    return (
        <>
            <div className="card_box">
                <div className="card">
                    {id}의 카드입니다.
            </div>
                <Comment></Comment>
            </div>
        </>
    )
}

export default Card;