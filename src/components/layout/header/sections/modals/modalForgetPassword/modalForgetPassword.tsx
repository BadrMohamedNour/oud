import ButtonS1 from "@/components/tools/buttons/buttonS1";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LoginForm from "./forms/form";

const ModalForgetPassword = () => {
  const t = useTranslations("Header");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ButtonS1
        styles="loginBtn"
        type="btn"
        text={t("Forgot your password?")}
        onClick={handleOpenModal}
      />
      <Modal
        title={null}
        footer={null}
        centered
        className="modalLogin"
        open={isModalOpen}
        onCancel={handleCloseModal}
        width={400}
      >
        <div className="content">
          <div className="head">
            <h2>{t("Reset password")}</h2>
            <p>{t("Reset description")}</p>
          </div>
          <LoginForm />
        </div>
      </Modal>
    </>
  );
};

export default ModalForgetPassword;
