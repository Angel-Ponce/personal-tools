import { LockOutlined } from "@ant-design/icons";
import React from "react";
import { Tool } from "$organisms";
import { Divider } from "antd";
import { currentScreen } from "$stores";
import { useAtom } from "jotai";

export interface Tool {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Tools: React.FC<{ filter: string }> = ({ filter }) => {
  const [, setScreen] = useAtom(currentScreen);

  const tools: Tool[] = [
    {
      name: "Administrador de contraseñas",
      icon: <LockOutlined />,
      onClick: () => {
        setScreen("password-manager");
      },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2">
      {tools.map((t, i) => {
        if (
          filter.trim().length != 0 &&
          i <= 5 &&
          t.name
            .toLocaleLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim())
        ) {
          return (
            <div key={t.name}>
              <Tool {...t} />
              {i != tools.length - 1 && <Divider className="!m-0 !p-0" />}
            </div>
          );
        }

        return <div key={t.name}></div>;
      })}
    </div>
  );
};

export default Tools;
