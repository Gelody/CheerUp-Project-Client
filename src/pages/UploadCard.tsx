import React from 'react';
import './UploadCard.css'

function UploadCard() {

    return (
        <div className="container">
            <form>
                <textarea className="upload_form"
                    maxLength={250}
                    placeholder="어떤 응원이 필요한가요?">
                </textarea>
                <button className="upload_button" type="submit">응원글 게시하기</button>
            </form>
        </div >
    )
}

export default UploadCard;