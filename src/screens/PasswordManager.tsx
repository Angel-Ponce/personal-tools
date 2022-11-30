import { LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const PasswordManager: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-fit flex items-center gap-4 mb-4">
        <LockOutlined className="text-[18px]" />
        <Text className="font-semibold text-lg w-fit text-left">
          Administrador de contraseñas
        </Text>
      </div>
    </div>
  );
};

export default PasswordManager;
