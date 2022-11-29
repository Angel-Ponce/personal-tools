import { HomeOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { Tool } from "$organisms";
import { Divider } from "antd";
import { currentScreen, openModal } from "$stores";
import { useAtom } from "jotai";

export interface Tool {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Tools: React.FC<{ filter: string }> = ({ filter }) => {
  const [, setScreen] = useAtom(currentScreen);
  const [, setIsOpenModal] = useAtom(openModal);

  const tools: Tool[] = [
    {
      name: "Inicio",
      icon: <HomeOutlined />,
      onClick: () => {
        setScreen("main");
        setIsOpenModal(false);
      },
    },
    {
      name: "Administrador de contraseñas",
      icon: <LockOutlined />,
      onClick: () => {
        setScreen("password-manager");
        setIsOpenModal(false);
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
