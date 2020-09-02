import React from 'react';

const url = (window.location.href);
const title = "Cheer-Up!"

function SnsShare() {

    const KaKaoStoryShare = ((e: any) => {
        let ShareURL = "https://story.kakao.com/share?url=" + url;
        document.location.href = ShareURL;
    });

    const naverShare = ((e: any) => {
        let shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
        document.location.href = shareURL;
    });

    const TwitterShare = ((e: any) => {
        let ShareURL = "https://twitter.com/intent/tweet?text=" + url + "&title=" + title;
        document.location.href = ShareURL;
    });

    const FacebookShare = ((e: any) => {
        let appId = 716381135578203
        let message = "share"
        let ShareURL = "https://www.facebook.com/dialog/share?"
            + 'app_id=' + appId
            + '&display=popup&caption=' + message
            + '&href=' + url
            + '&redirect_uri=' + encodeURIComponent('https://www.facebook.com/');;
        document.location.href = ShareURL;
    })

    const LinkedInShare = ((e: any) => {
        let ShareURL = "https://www.linkedin.com/shareArticle?url=" + url + "&title=" + title;
        document.location.href = ShareURL;
    })


    return (
        <>
            <button className="contents-button" onClick={naverShare}>
                네이버공유하기</button>

            <button className="contents-button" onClick={KaKaoStoryShare}>
                카카오스토리공유하기</button>

            <button className="contents-button" onClick={TwitterShare}>
                트위터공유하기</button>

            <button className="contents-button" onClick={FacebookShare}>
                페이스북공유하기</button>

            <button className="contents-button" onClick={LinkedInShare}>
                링크드인공유하기
            </button>
        </>
    )
}

export default SnsShare;