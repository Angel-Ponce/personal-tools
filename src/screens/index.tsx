import React from "react";
import { Typography, Image } from "antd";

const { Title, Text } = Typography;

const Index: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <Title className="text-center font-bold">Bienvenido</Title>
      <Text className="text-center text-sm">
        💡 Utiliza <Text keyboard>ctrl</Text>+<Text keyboard>k</Text> para abrir
        el menú de herramientas disponibles
      </Text>
      {/* <Image src="../assets/images/main.gif" width={300} /> */}
    </div>
  );
};

export default Index;
