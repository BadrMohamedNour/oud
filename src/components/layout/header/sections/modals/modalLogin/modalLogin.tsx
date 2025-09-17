"use client";

import ButtonS1 from "@/components/tools/buttons/buttonS1";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./forms/form";
import ModalForgetPassword from "../modalForgetPassword/modalForgetPassword";
import { setIsModalVisibleLogin } from "@/store/slices/auth/loginSlice";
import { setIsModalVisibleForget } from "@/store/slices/auth/forgetPasswordSlice";
import type { RootState } from "@/store/store";
import { FC } from "react";

const ModalLogin: FC = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Header");
  const { isModalVisibleLogin } = useSelector(
    (state: RootState) => state.login
  );

  const handleOpenModal = () => {
    dispatch(setIsModalVisibleLogin(true));
    dispatch(setIsModalVisibleForget(false));
  };

  const handleCloseModal = () => {
    dispatch(setIsModalVisibleLogin(false));
  };

  return (
    <>
      <ButtonS1
        styles="loginBtn"
        type="btn"
        text={t("Login")}
        onClick={handleOpenModal}
      />
      <Modal
        title={null}
        footer={null}
        centered
        className="modalLogin"
        open={isModalVisibleLogin}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        width={400}
      >
        <div className="content">
          <div className="head">
            <h2>{t("Welcome Back")}</h2>
            <p>{t("Login to your account to continue")}</p>
          </div>
          <LoginForm />
          <div className="footer">
            <ModalForgetPassword />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogin;
