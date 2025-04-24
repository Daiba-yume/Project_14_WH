import { IoCloseCircle } from "react-icons/io5";
import "./Modal.scss";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalContent">
          <IoCloseCircle className="closeIcon" onClick={onClose} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
