import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import MyCardModal from "./MyCardModals";

function CardModalPage() {
  const [ismodalOpen, setisModalOpen]: any = useState(false);

  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      {/* <Link to="/cardmodal" className="CardModalbutton" onClick={openModal}>Modal Open</Link> */}
      {/* <button className="CardModalbutton" onClick={openModal}>Modal Open</button> */}
      <MyCardModal
        isOpen={ismodalOpen}
        close={closeModal}
        open={openModal}
      ></MyCardModal>
    </>
  );
}
export default CardModalPage;
