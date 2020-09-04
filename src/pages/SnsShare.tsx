import React from 'react';

const url = (window.location.href);
const title = "Cheer-Up!"

function SnsShare() {

    const naverShare = ((e: any) => {
        let shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
        document.location.href = shareURL;
    });

    const TwitterShare = ((e: any) => {
        let ShareURL = "https://twitter.com/intent/tweet?text=" + url + "&title=" + title;
        document.location.href = ShareURL;
    });


    return (
        <>
            <button className="contents-button" onClick={naverShare}>
                네이버공유</button>

            <button className="contents-button" onClick={TwitterShare}>
                트위터공유</button>
        </>
    )
}

export default SnsShare;