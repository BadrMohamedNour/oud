"use client";

import { Button, Modal } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";

// Components
import RegisterForm from "./forms/form";

const ModalRegister: React.FC = () => {
  const [isModalVisibleRegister, setIsModalVisibleRegister] = useState(false);
  const t = useTranslations("Header");

  const handleOpenModal = () => {
    setIsModalVisibleRegister(true);
  };

  const handleCloseModal = () => {
    setIsModalVisibleRegister(false);
  };

  return (
    <>
      <Button
        className="loginBtn"
        onClick={handleOpenModal}
        aria-label="Open login modal"
      >
        {t("Register")}
      </Button>

      <Modal
        title={null}
        footer={null}
        centered
        className="modalLogin"
        open={isModalVisibleRegister}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        width={400}
      >
        <div className="content">
          <header className="head">
            <h2>{t("Create a new account")}</h2>
            <p>{t("Create a new account and enjoy all Features")}</p>
          </header>

          <RegisterForm handleCloseModal={handleCloseModal} />
        </div>
      </Modal>
    </>
  );
};

export default ModalRegister;
