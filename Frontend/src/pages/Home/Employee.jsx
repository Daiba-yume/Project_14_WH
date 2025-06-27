import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Modal from "react-modal-yume";
import "./Employee.scss";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

/**
 * Page de création d’un employé
 * Affiche un formulaire et une modale de confirmation
 */
function Employee() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Ouvre la modale après la création d’un employé
  const handleOpenModal = () => setModalOpen(true);
  // Ferme la modale et redirige vers la page liste des employés
  const handleCloseModal = () => {
    setModalOpen(false);
    navigate("/EmployeeList");
  };
  return (
    <section>
      {/* Formulaire d’employé, déclenche handleOpenModal si succès */}
      <Form onSuccess={handleOpenModal} />
      {/* Modale de confirmation */}
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <PiUserCircleCheckDuotone className="icon" size={100} />
        <h1>Employee Created !</h1>
        <p>The employee has been created successfully</p>
      </Modal>
    </section>
  );
}

export default Employee;
