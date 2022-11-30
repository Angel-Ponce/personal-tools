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
  const [isOpenModal, setIsOpenModal] = useAtom(openModal);
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
    const handler = (e: KeyboardEvent) => {
      if (e.key == "Enter" && isOpenModal) {
        filteredTools.find((t) => t.focus)?.onClick();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [isOpenModal, filteredTools]);

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
  }, [toolFocused, filteredTools.length]);

  useEffect(() => {
    const filtered = tools
      .filter(
        (t, i) =>
          t.name
            .toLocaleLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim()) && i < 5
      )
      .map((t, i) => ({ ...t, focus: i == toolFocused }));

    setFilteredTools(filtered);
  }, [filter, toolFocused]);

  return (
    <div className="w-full flex flex-col gap-2">
      {filteredTools.map((t, i) => {
        return (
          <div key={t.name}>
            <Tool {...t} />
            {i != tools.length - 1 && <Divider className="!m-0 !p-0" />}
          </div>
        );
      })}
    </div>
  );
};

export default Tools;
