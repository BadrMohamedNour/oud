"use client";

import { Button, Modal } from "antd";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

// Components
import LoginForm from "./forms/form";
import ModalForgetPassword from "../modalForgetPassword/modalForgetPassword";
import ModalMagicLinkLogin from "../modalMagicLinkLogin/modalMagicLinkLogin";

// Redux actions
import {
  magicLinkThunk,
  setIsModalVisibleLogin,
  setIsModalVisibleMagicLink,
} from "@/store/slices/auth/loginSlice";
import { setIsModalVisibleForget } from "@/store/slices/auth/forgetPasswordSlice";

// Types
import type { RootState, AppDispatch } from "@/store/store";

// Icons
import phone from "../../../../../../../public/icons/phone.svg";
import mail from "../../../../../../../public/icons/mail.svg";
import whatsapp from "../../../../../../../public/icons/whatsapp.svg";

interface MagicLinkOption {
  type: "phone" | "email" | "whatsapp";
  icon: string;
  enabled: boolean;
}

const ModalLogin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations("Header");

  const { isModalVisibleLogin, magicLinks } = useSelector(
    (state: RootState) => state.login
  );

  const magicLinkOptions = useMemo<MagicLinkOption[]>(
    () => [
      {
        type: "phone",
        icon: phone,
        enabled: magicLinks?.telephone?.enabled ?? false,
      },
      {
        type: "email",
        icon: mail,
        enabled: magicLinks?.email?.enabled ?? false,
      },
      {
        type: "whatsapp",
        icon: whatsapp,
        enabled: magicLinks?.whatsapp?.enabled ?? false,
      },
    ],
    [magicLinks]
  );

  const handleOpenModal = useCallback(() => {
    dispatch(setIsModalVisibleLogin(true));
    dispatch(setIsModalVisibleForget(false));
  }, [dispatch]);

  const handleCloseModal = useCallback(() => {
    dispatch(setIsModalVisibleLogin(false));
  }, [dispatch]);

  const handleOpenMagicLinkModal = useCallback(
    (type: string) => {
      dispatch(setIsModalVisibleLogin(false));
      dispatch(setIsModalVisibleMagicLink({ status: true, type }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(magicLinkThunk());
  }, [dispatch]);

  const renderMagicLinkButton = useCallback(
    (option: MagicLinkOption) => {
      if (!option.enabled) return null;

      return (
        <li key={option.type}>
          <button
            onClick={() => handleOpenMagicLinkModal(option.type)}
            className="flexCenter"
            aria-label={`Login with ${option.type}`}
          >
            <Image
              src={option.icon}
              alt={`${option.type} icon`}
              height={24}
              width={24}
            />
          </button>
        </li>
      );
    },
    [handleOpenMagicLinkModal]
  );

  const hasEnabledMagicLinks = magicLinkOptions.some(
    (option) => option.enabled
  );

  return (
    <>
      <Button
        className="loginBtn"
        onClick={handleOpenModal}
        aria-label="Open login modal"
      >
        {t("Login")}
      </Button>

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
          <header className="head">
            <h2>{t("Welcome Back")}</h2>
            <p>{t("Login to your account to continue")}</p>
          </header>

          <LoginForm />

          <footer className="footer">
            {hasEnabledMagicLinks && (
              <div className="magicLinks">
                <small>{t("OR")}</small>
                <ul className="flexCenter" role="list">
                  {magicLinkOptions.map(renderMagicLinkButton)}
                </ul>
              </div>
            )}

            <ModalMagicLinkLogin />
            <ModalForgetPassword />
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalLogin;
