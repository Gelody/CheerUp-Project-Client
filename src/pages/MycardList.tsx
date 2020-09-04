import React from 'react';
import './MycardList.css'

function MycardList(props: any) {
    console.log(props)
    let list = props
    console.log(list)
    return (
        <>
            <div className="mycardlist_wrap">
                받아온 데이터를 이곳에 보여주고 싶습니다.
                <form>
                    <button className="review_button" type="submit">후기등록</button>
                </form>
            </div>
        </>
    )
}

export default MycardList;