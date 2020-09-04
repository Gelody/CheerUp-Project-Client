import React from 'react';
import './MycardList.css';

function MycardList({ mycard }: any) {
    return (
        <>
            <div className="mycardlist_wrap">
                {mycard.map((card: any, index: any) => (
                    <div key={index}>
                        <div>{card.text}</div>
                        <form>
                            <button className="review_button" type="submit">후기등록</button>
                        </form>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MycardList;