import React from 'react';
import './MycardList.css'
import axios from 'axios';

function MycardList() {
    const user = JSON.parse(window.sessionStorage.user);
    let A: any = [];

    axios
        .get('/card/get', { headers: { authorization: user } })
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                console.log("카드의 정보를 성공적으로 가져왔습니다")
                A.push(res.data);
            } else {
                console.log("카드의 정보를 가져오는데 문제가 있습니다")
            }
        })
        .catch(err => console.log(err))

    return (
        <>
            <div className="mycardlist_wrap">
                받아온 데이터를 이곳에 보여주고 싶습니다.
                {console.log(A)}
                {console.log(A)}
                {console.log(A)}
                {A}
                <form>
                    <button className="review_button" type="submit">후기등록</button>
                </form>
            </div>
        </>
    )
}

export default MycardList;