import {
  DeleteTwoTone,
  EditTwoTone,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Divider, Typography } from "antd";
import React from "react";

import savedPasswords from "$assets/passwords/index.json";
import { DryBadge } from "$atoms";

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
      <div className="flex flex-col gap-2">
        <div className="flex justify-end w-full">
          <Button>Nueva</Button>
        </div>
        <div className="flex items-center justify-between gap-2 p-2">
          <Text className="flex-1 font-semibold flex gap-2 items-center">
            <DryBadge className="!px-2 !py-0 font-normal">2</DryBadge>
            Facebook
          </Text>
          <Text className="flex-1">*************</Text>
          <div className="flex gap-2 items-center">
            <Button
              icon={<EyeTwoTone className="text-[12px]" />}
              size="small"
            />
            <Button
              icon={
                <EditTwoTone className="text-[12px]" twoToneColor="orange" />
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
        <Divider className="!m-0 !p-0" />
      </div>
    </div>
  );
};

export default PasswordManager;
