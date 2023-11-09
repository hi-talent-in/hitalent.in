import { useEffect, useRef, useState } from "react";

const useClickOutside = () => {
  const [show, setShow] = useState(false);
 
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { show, setShow, popoverRef };
};

export default useClickOutside;
