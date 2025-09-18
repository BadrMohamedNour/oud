"use client";

import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RequestOtp from "./forms/requstOtpForm";
import SendOtp from "./forms/sendOtpForm";
import { setIsModalVisibleMagicLink } from "@/store/slices/auth/loginSlice";
import type { RootState } from "@/store/store";

const ModalMagicLinkLogin: React.FC = () => {
  const dispatch = useDispatch();
  const { isModalVisibleMagicLink, loginStep } = useSelector(
    (state: RootState) => state.login
  );

  const handleCloseModal = () => {
    dispatch(setIsModalVisibleMagicLink({ status: false }));
  };

  return (
    <Modal
      title={null}
      footer={null}
      centered
      className="modalLogin"
      open={isModalVisibleMagicLink}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      width={400}
    >
      <div className="content">
        {loginStep === 2 ? <RequestOtp /> : <SendOtp />}
      </div>
    </Modal>
  );
};

export default ModalMagicLinkLogin;
