import React, { useEffect, useRef, useState } from "react";
import { Typography, Image, Modal, Input, InputRef } from "antd";
import main from "$assets/main.png";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Index: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key == "k") {
        setOpenModal(true);
      }
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Title className="text-center font-bold">Bienvenido</Title>
      <Text className="text-center text-sm">
        💡 Utiliza <Text keyboard>ctrl</Text>+<Text keyboard>k</Text> para abrir
        el menú de herramientas disponibles
      </Text>
      <Image src={main} width={320} preview={false} />
      <Modal
        footer={null}
        onCancel={() => setOpenModal(false)}
        className="!top-5"
        closable={false}
        open={openModal}
      >
        <div className="w-full h-full min-h-[120px] p-6">
          <div className="w-full flex flex-col items-center">
            <Input
              placeholder="Busca herramientas..."
              size="large"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              bordered={false}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
