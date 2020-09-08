import React from "react";
import "./CardModals.css";
import Main from "./Main"

function CardModal({ card, isOpen, close }: any) {

    return (
        <React.Fragment>
            {
                isOpen ?
                    <React.Fragment>
                        <>
                            <div className="ModalOverlay" onClick={close}>
                                <div className="ModalWrapper">
                                    <div className="ModalInner ">
                                        <button onClick={close}>close</button>
                                        <Main></Main>
                                    </div>
                                </div>
                            </div>
                        </>
                    </React.Fragment>
                    :
                    null
            }
        </React.Fragment>
    )
}

export default CardModal;