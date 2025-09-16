import { setIsModalVisibleForget } from "@/store/slices/auth/forgetPasswordSlice";
import { setIsModalVisibleLogin } from "@/store/slices/auth/loginSlice";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPasswordStep1_section } from "./sections/forgetPasswordStep1_section";
import { ForgetPasswordStep2_section } from "./sections/forgetPasswordStep2_section";
import { ForgetPasswordStep3_section } from "./sections/forgetPasswordStep3_section";

export const ForgetPassword = () => {
  const t = useTranslations("Common");
  const { isModalVisibleForget, current } = useSelector(
    ({ forgetPassword }) => forgetPassword
  );
  const dispatch = useDispatch();

  // const showModal = () => {
  //   dispatch(setIsModalVisibleLogin(false))
  //   dispatch(setIsModalVisibleForget(true))
  // }

  const handleCancel = () => {
    dispatch(setIsModalVisibleForget(false));
  };

  return (
    <section>
      <Modal
        title={false}
        footer={false}
        className="modalRegister forgetPassword"
        visible={isModalVisibleForget}
        onCancel={handleCancel}
      >
        {current === 1 ? (
          <ForgetPasswordStep1_section />
        ) : current === 2 ? (
          <ForgetPasswordStep2_section />
        ) : (
          <ForgetPasswordStep3_section />
        )}
      </Modal>
    </section>
  );
};
