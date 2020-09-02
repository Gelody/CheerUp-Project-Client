import React from 'react';
import './MycardList.css'

function MycardList() {
    return (
        <>
            <div className="mycardlist_wrap">
                내 카드 리스트입니다.
            <form>
                    <button className="review_button" type="submit">후기등록</button>
                </form>
            </div>
        </>
    )
}

export default MycardList;