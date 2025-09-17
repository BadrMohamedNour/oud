import ButtonS1 from "@/components/tools/buttons/buttonS1";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./forms/form";
import { setIsModalVisibleForget } from "@/store/slices/auth/forgetPasswordSlice";
import { setIsModalVisibleLogin } from "@/store/slices/auth/loginSlice";
import type { RootState } from "@/store/store";

const ModalForgetPassword: FC = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Header");
  const { isModalVisibleForget } = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const handleCloseModal = () => {
    dispatch(setIsModalVisibleForget(false));
  };

  const handleForgetPasswordBtn = () => {
    dispatch(setIsModalVisibleLogin(false));
    dispatch(setIsModalVisibleForget(true));
  };

  return (
    <>
      <button
        className="loginBtn"
        type="button"
        onClick={handleForgetPasswordBtn}
      >
        {t("Forgot your password?")}
      </button>
      <Modal
        title={null}
        footer={null}
        centered
        className="modalLogin"
        open={isModalVisibleForget}
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
