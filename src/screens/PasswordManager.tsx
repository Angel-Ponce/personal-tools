import {
  CheckCircleTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  EyeInvisibleTwoTone,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Divider, Tooltip, Typography } from "antd";
import React, { useState } from "react";

import savedPasswords from "$assets/passwords/index.json";
import { DryBadge } from "$atoms";

const { Text } = Typography;

export interface Password {
  id: string;
  name: string;
  password: string;
  visible: boolean;
  copied: boolean;
}

const PasswordManager: React.FC = () => {
  const [passwords, setPasswords] = useState<Password[]>(
    savedPasswords.passwords.map((p) => ({
      ...p,
      visible: false,
      copied: false,
    }))
  );

  const togglePasswordVisibility = (pwd: Password) => {
    setPasswords((curr) =>
      curr.map((p) => ({
        ...p,
        visible: pwd.id == p.id ? !p.visible : p.visible,
      }))
    );
  };

  const copyPassword = (pwd: Password) => {
    if (navigator.clipboard) navigator.clipboard.writeText(pwd.password);

    setPasswords((curr) =>
      curr.map((p) => ({ ...p, copied: pwd.id == p.id ? true : p.copied }))
    );

    setTimeout(() => {
      setPasswords((curr) =>
        curr.map((p) => ({ ...p, copied: pwd.id == p.id ? false : p.copied }))
      );
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-4">
        <LockOutlined className="text-[18px]" />
        <Text className="font-semibold text-lg w-fit text-left">
          Administrador de contraseñas
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end w-full">
          <Button>Nueva</Button>
        </div>
        {passwords.map((p, i) => (
          <div key={p.id} className="w-full">
            <div className="flex items-center justify-between gap-2 p-2">
              <div className="flex-1 font-semibold flex gap-2 items-center">
                <DryBadge className="!px-2 !py-0 font-normal">2</DryBadge>
                <Text>{p.name}</Text>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <Text>{p.visible ? p.password : "*".repeat(20)}</Text>
                <Tooltip
                  title={p.copied ? "Copiado!" : "Copiar"}
                  placement="right"
                >
                  <Button
                    icon={
                      p.copied ? (
                        <CheckCircleTwoTone className="text-[12px]" />
                      ) : (
                        <CopyTwoTone className="text-[12px]" />
                      )
                    }
                    size="small"
                    onClick={() => copyPassword(p)}
                    type="text"
                  />
                </Tooltip>
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  icon={
                    !p.visible ? (
                      <EyeTwoTone className="text-[12px]" />
                    ) : (
                      <EyeInvisibleTwoTone className="text-[12px]" />
                    )
                  }
                  size="small"
                  onClick={() => togglePasswordVisibility(p)}
                />
                <Button
                  icon={
                    <EditTwoTone
                      className="text-[12px]"
                      twoToneColor="orange"
                    />
                  }
                  size="small"
                />
                <Button
                  icon={
                    <DeleteTwoTone className="text-[12px]" twoToneColor="red" />
                  }
                  size="small"
                />
              </div>
            </div>
            {i != passwords.length - 1 && (
              <Divider className="!m-0 !p-0 !mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordManager;
