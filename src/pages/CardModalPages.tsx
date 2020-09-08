import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import CardModal from "./CardModals";

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
      <CardModal
        isOpen={ismodalOpen}
        close={closeModal}
        open={openModal}
      ></CardModal>
    </>
  );
}
export default CardModalPage;
