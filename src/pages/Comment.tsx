import React from 'react';
import { useParams } from 'react-router-dom';

function Comment() {
    let { id } = useParams();
    return (
        <>
            <div className="comment">
                {id}의 댓글입니다.
            </div>
        </>
    )
}

export default Comment;