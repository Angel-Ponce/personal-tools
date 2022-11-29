import { LockOutlined } from "@ant-design/icons";
import React from "react";
import { Tool } from "$organisms";
import { Divider } from "antd";

export interface Tool {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const tools: Tool[] = [
  {
    name: "Administrador de contraseñas",
    icon: <LockOutlined />,
    onClick: () => {
      // do stuff
    },
  },
];

const Tools: React.FC<{ filter: string }> = ({ filter }) => {
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
            <div>
              <Tool {...t} key={`tool-${i}`}></Tool>
              {i != tools.length - 1 && <Divider className="!m-0 !p-0" />}
            </div>
          );
        }

        return <></>;
      })}
    </div>
  );
};

export default Tools;
