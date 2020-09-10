import React from "react";
import axios from "axios";

function MycardDelete({ cardId }: any) {
    console.log(cardId)
    const cardData = { id: cardId }
    const user = JSON.parse(window.sessionStorage.user);
    const onSubmit = () => {
        axios
            .post('/card/delete', cardData, { headers: { authorization: user } })
            .then((data) => {
                if (data) {
                    alert("카드가 삭제되었습니다.")
                } else {
                    alert("카드 삭제에 문제가 있습니다.")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <button className="card_delete" type="submit">카드삭제하기</button>
            </form>
        </>
    )
}

export default MycardDelete;