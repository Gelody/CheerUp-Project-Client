import React from 'react';
import './MycardList.css';
import './Mypage';
// ["ㅁㄴㅇㅁㄴㅇ", "ㅁㅇㅁㄴㅇ", "sasdasd"]
function MycardList({ mycards }: any) {
    console.log("여기는 카드리스트", mycards)

    const cardList = <ul>{mycards.map((mycard: string) => <li>{mycard}</li>)}</ul>
    // console.log(mycard)
    console.log("return하기전 카드리스트", cardList);
    return (
        <>
            <div className="mycardlist_wrap">
                프롭스를 리스트로 보여주면됩니다.
                나오나?
                {console.log("카드리스트", cardList)}
                {cardList}
                <form>
                    <button className="review_button" type="submit">후기등록</button>
                </form>
            </div>
        </>
    )
}

export default MycardList;