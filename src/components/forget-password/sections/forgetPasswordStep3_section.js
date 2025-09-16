import ButtonsS1 from "@/components/tools/buttons/buttonS1";
import { setIsModalVisibleForget } from "@/store/slices/auth/forgetPasswordSlice";
import { setIsModalVisibleLogin } from "@/store/slices/auth/loginSlice";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const ForgetPasswordStep3_section = () => {
  const { t } = useTranslations("Common");
  const dispatch = useDispatch();

  const handelClickLoginBtn = () => {
    dispatch(setIsModalVisibleForget(false));
    dispatch(setIsModalVisibleLogin(true));
  };

  return (
    <div className="modalS1_content forgetPasswordStep3">
      <div className="modalS1_form">
        <div className="modalS1_header modalS1_content2">
          <div>
            <Image
              src="/images/forget-password/forgetThree.png"
              width={200}
              height={240}
              alt="Forgot Password"
            />
          </div>
          <h2>{t("Password set successfully")}</h2>
          <p>{t("Please come back to log in.")}</p>
          <ButtonsS1 text={t("Login")} onClick={handelClickLoginBtn} />
        </div>
      </div>
    </div>
  );
};
