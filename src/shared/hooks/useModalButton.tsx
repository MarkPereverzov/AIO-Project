import { useState } from "react"


export const useModalButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return {show, handleClose, handleOpen};
}