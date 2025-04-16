import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import "./Modal.scss";

function Modal() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="modal">
      {toggle && (
        <div className="overlay">
          <div className="modalContent">
            <IoCloseCircle
              className="closeIcon"
              onClick={() => setToggle(false)}
            />

            <p>Employee created !</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
