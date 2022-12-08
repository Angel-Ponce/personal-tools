import { Button, Modal } from "antd";
import React, { useState } from "react";

const AddPasswordButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Nueva</Button>
      <Modal
        title="Nueva contraseña"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        cancelText="Cancelar"
        okText="Guardar"
      >
        Aquí el formulario
      </Modal>
    </>
  );
};

export default AddPasswordButton;
