import React, { useEffect, useState } from "react";
import { Typography, Image, Modal, Input } from "antd";
import main from "$assets/images/main.png";
import { Tools } from "$organisms";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EnterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { currentScreen, openModal } from "$stores";
import { useAtom } from "jotai";
import PasswordManager from "$screens/PasswordManager";

const { Title, Text } = Typography;

const Main: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useAtom(openModal);
  const [search, setSearch] = useState<string>("");
  const [screen] = useAtom(currentScreen);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key == "k") {
        setIsOpenModal((prev) => !prev);
        return;
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (isOpenModal && /^(ArrowUp|ArrowDown|Tab)$/.test(e.key)) {
        const increment =
          e.key == "ArrowUp" ? -1 : e.key == "ArrowDown" ? 1 : 1;
        window.dispatchEvent(
          new CustomEvent("navigation", { detail: increment })
        );
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [isOpenModal]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {screen == "main" && (
        <>
          <Title className="text-center font-bold">Bienvenido</Title>
          <Text className="text-center text-sm">
            💡 Utiliza <Text keyboard>ctrl</Text>+<Text keyboard>k</Text> para
            abrir el menú de herramientas disponibles
          </Text>
          <Image src={main} width={320} preview={false} />
        </>
      )}

      {screen == "password-manager" && <PasswordManager />}

      <Modal
        footer={
          <>
            <div className="flex gap-2 items-center">
              <div className="rounded bg-gray-50 border border-b-2 border-r-2 p-1 flex justify-center items-center">
                <ArrowUpOutlined className="text-[12px]" />
              </div>
              <div className="rounded bg-gray-50 border border-b-2 border-r-2 p-1 flex justify-center items-center">
                <ArrowDownOutlined className="text-[12px]" />
              </div>
              <div className="rounded bg-gray-50 border border-b-2 border-r-2 p-1 flex justify-center items-center">
                <EnterOutlined className="text-[12px]" />
              </div>
              <Text className="text-xs">
                (Utiliza las flechas para moverte y presiona enter para
                seleccionar)
              </Text>
            </div>
          </>
        }
        onCancel={() => setIsOpenModal(false)}
        className="!top-5"
        closable={false}
        open={isOpenModal}
      >
        <div className="w-full h-full min-h-[100px]">
          <div className="w-full flex flex-col gap-2 items-center">
            <Input
              placeholder="Busca herramientas..."
              size="large"
              prefix={<SearchOutlined />}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              bordered={false}
            />
            <Tools filter={search} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Main;
