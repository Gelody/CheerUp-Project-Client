import React from 'react';

function CheeringList({ cheerCard }: any) {
    return (
        <>
            <h1 className="mycard_title">응원한 카드</h1>
            <br />
            <div className="mycardlist_wrap">

                {cheerCard.map((card: any, index: any) => (
                    <div key={index} className="mycard">
                        <span className="mycard_text">{card.text}</span>
                    </div>
                ))}

            </div>
        </>
    )
}

export default CheeringList;