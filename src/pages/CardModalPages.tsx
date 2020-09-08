import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CardModal from './CardModals';
import axios from 'axios';


function CardModalPage() {

    const [modalcard, setmodalCard]: any = useState([]);
    // 모달 카드 받아오는 요청
    useEffect(() => {
        axios
            .get('/card/getAll')
            .then(({ data }) => {
                setmodalCard(data);
                if (data) {
                    console.log("모달 카드를 성공적으로 가져왔습니다")
                } else {
                    console.log("카드 데이터가 없습니다")
                }
            })
            .catch(err => console.log(err));
    }, []);

    const [ismodalOpen, setisModalOpen]: any = useState(false);

    const openModal = () => {
        setisModalOpen(true)
    }
    const closeModal = () => {
        setisModalOpen(false)
    }


    return (
        <>
            {/* <Link to="/cardmodal" className="CardModalbutton" onClick={openModal}>Modal Open</Link> */}
            <button className="CardModalbutton" onClick={openModal}>Modal Open</button>
            <CardModal card={modalcard} isOpen={ismodalOpen} close={closeModal}></CardModal>
        </>
    )
}
export default CardModalPage;