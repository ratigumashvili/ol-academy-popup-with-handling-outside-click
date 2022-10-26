import { useEffect, useRef } from "react";

const Modal = ({ handleModalToggle }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalToggle();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleModalToggle]);

  return (
    <div className="modal-container">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-header">
          <h1>Modal title</h1>
          <button className="btn btn-close" onClick={handleModalToggle}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
