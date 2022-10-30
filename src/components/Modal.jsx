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
        <div className="modal-body">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            autem quibusdam adipisci quos, id repellat impedit perspiciatis a
            fugiat, aliquid voluptatibus magni sint nihil vitae minima error
            nobis quia quaerat.
          </p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-main"
            onClick={() => {
              handleModalToggle();
              console.log("Confirmed");
            }}
          >
            Confirm
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              handleModalToggle();
              console.log("Canceled");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
