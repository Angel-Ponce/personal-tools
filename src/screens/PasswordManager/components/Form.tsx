import React from "react";
import { Form as AntDForm, Input, Button } from "antd";

const Form: React.FC = () => {
  const onFinish = (values: { name: string; password: string }) => {
    console.log(values);
  };

  return (
    <AntDForm
      layout="vertical"
      name="password-form"
      initialValues={{
        name: "",
        password: "",
      }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <AntDForm.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Este campo es obligatorio." }]}
      >
        <Input />
      </AntDForm.Item>
      <AntDForm.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: "Este campo es obligatorio." }]}
      >
        <Input.Password />
      </AntDForm.Item>
      <AntDForm.Item>
        <div className="w-full flex justify-end items-center gap-2">
          <Button>Cancelar</Button>
          <Button type="primary" htmlType="submit">
            Guardar
          </Button>
        </div>
      </AntDForm.Item>
    </AntDForm>
  );
};

export default Form;
