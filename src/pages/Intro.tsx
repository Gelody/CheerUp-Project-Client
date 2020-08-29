import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
    let idNum = Math.floor(Math.random() * 10);
    return (
        <Link to={`/${idNum}`}>
            시작하기
        </Link>
    );
}

export default Intro;