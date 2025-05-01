import React, { useState } from "react";
import Form from "../../components/Form/Form";
/* import Modal from "../../components/Modal/Modal"; */
import { Modal } from "react-customdaiba-modal";
import "./Employee.scss";

function Employee() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <section>
      <Form onSuccess={handleOpenModal} />
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <p>Employee created !</p>
      </Modal>
    </section>
  );
}

export default Employee;
