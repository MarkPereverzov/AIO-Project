import { useState } from "react";

export const useFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return { showModal, handleShow, handleClose };
}