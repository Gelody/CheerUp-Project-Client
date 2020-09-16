import React, { useState } from "react";
import ReviewUpload from "../Modalpage/ReviewUpload";

function ReviewModal() {
  const [ismodalOpen, setisModalOpen]: any = useState(false);

  const openModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <ReviewUpload
        isOpen={ismodalOpen}
        close={closeModal}
        open={openModal}
      ></ReviewUpload>
    </>
  );
}
export default ReviewModal;
