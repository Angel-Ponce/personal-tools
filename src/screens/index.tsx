import React from "react";
import { Typography, Image } from "antd";
import main from "../static/main.gif";

const { Title, Text } = Typography;

const Index: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Title className="text-center font-bold">Bienvenido</Title>
      <Text className="text-center text-sm">
        💡 Utiliza <Text keyboard>ctrl</Text>+<Text keyboard>k</Text> para abrir
        el menú de herramientas disponibles
      </Text>
      <Image src={main} width={360} />
    </div>
  );
};

export default Index;
