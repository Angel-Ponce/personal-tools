import { HomeOutlined, LockOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Tool } from "$organisms";
import { Divider } from "antd";
import { currentScreen, openModal } from "$stores";
import { useAtom } from "jotai";

export interface Tool {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  focus: boolean;
}

const Tools: React.FC<{ filter: string }> = ({ filter }) => {
  const [toolFocused, setToolFocused] = useState(-1);
  const [, setScreen] = useAtom(currentScreen);
  const [, setIsOpenModal] = useAtom(openModal);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);

  const tools: Tool[] = [
    {
      name: "Inicio",
      icon: <HomeOutlined />,
      onClick: () => {
        setScreen("main");
        setIsOpenModal(false);
      },
      focus: false,
    },
    {
      name: "Administrador de contraseñas",
      icon: <LockOutlined />,
      onClick: () => {
        setScreen("password-manager");
        setIsOpenModal(false);
      },
      focus: false,
    },
  ];

  useEffect(() => {
    const handler = (e: CustomEvent<number>) => {
      setToolFocused((prev) => prev + e.detail);
    };

    window.addEventListener("navigation", handler);

    return () => window.removeEventListener("navigation", handler);
  }, []);

  useEffect(() => {
    if (toolFocused >= filteredTools.length) {
      setToolFocused(0);
    }

    if (toolFocused < 0) {
      const lastIndex = filteredTools.length - 1;
      setToolFocused(lastIndex);
    }

    setFilteredTools((prev) =>
      prev.map((t, i) => ({ ...t, focus: toolFocused == i }))
    );

    console.log(filteredTools);
  }, [toolFocused, filteredTools.length]);

  useEffect(() => {
    const filtered = tools
      .filter(
        (t) =>
          filter.trim().length != 0 &&
          t.name
            .toLocaleLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim())
      )
      .map((t) => ({ ...t, focus: false }));

    setFilteredTools(filtered);
  }, [filter]);

  return (
    <div className="w-full flex flex-col gap-2">
      {filteredTools.map((t, i) => {
        if (i <= 5) {
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
