import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Modal from "react-modal-yume";
import "./Employee.scss";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Employee() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/EmployeeList");
  };
  return (
    <section>
      <Form onSuccess={handleOpenModal} />
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <PiUserCircleCheckDuotone className="icon" size={100} />
        <h1>Employee Created !</h1>
        <p>The employee has been created successfully</p>
      </Modal>
    </section>
  );
}

export default Employee;
