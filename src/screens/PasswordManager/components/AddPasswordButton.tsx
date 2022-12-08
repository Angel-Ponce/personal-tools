import { Button, Drawer } from "antd";
import React, { useState } from "react";

const AddPasswordButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Nueva</Button>
      <Drawer
        title="Nueva contraseña"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="w-full flex justify-end items-center gap-2">
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button type="primary">Guardar</Button>
        </div>
      </Drawer>
    </>
  );
};

export default AddPasswordButton;
