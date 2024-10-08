import { useState } from "react"


export const usePopupHints = () => {
  const [show, setShow] = useState(0);
  return {show, setShow};
}