import { Button, Drawer } from "antd";
import React, { useState } from "react";
import Form from "./Form";

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
        <Form />
      </Drawer>
    </>
  );
};

export default AddPasswordButton;
