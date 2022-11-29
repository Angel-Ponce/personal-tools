import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const Tool: React.FC<{
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
}> = ({ name, icon, onClick }) => {
  return (
    <div
      className="w-full p-3 flex gap-2 rounded-lg items-stretch justify-between hover:bg-gray-100 cursor-pointer transition-colors duration-200"
      onClick={onClick}
    >
      <div className="rounded-lg bg-white flex justify-center items-center w-10 h-10 text-[20px]">
        {icon}
      </div>
      <div className="flex-1 flex items-center">
        <Text className="font-semibold text-lg" underline>
          # {name}
        </Text>
      </div>
    </div>
  );
};

export default Tool;
