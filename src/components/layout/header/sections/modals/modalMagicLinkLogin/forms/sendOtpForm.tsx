import { Form } from "antd";
import OtpInput from "react18-input-otp";
// import Timer from "otp-timer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { AppDispatch, RootState } from "@/store/store";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import { useRouter } from "next/navigation";
import { sendOtpThunk } from "@/store/slices/auth/loginSlice";

const SendOtp = () => {
  const [form] = Form.useForm();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations("Header");
  const { loading } = useSelector((state: RootState) => state.login);
  const router = useRouter();

  const handleChange = (enteredOtp: string) => {
    form.setFieldsValue({ ["otp"]: enteredOtp });
    setOtp(enteredOtp);
  };

  const sendOtpForm = () => {
    dispatch(sendOtpThunk({ otp: otp }))
      .unwrap()
      .then((res) => {
        Cookies.set("MToken", res.data.token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 6,
        });
        Cookies.set("MCartToken", res.data.cart_token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 6,
        });
        router.refresh();
      });
  };

  const resendOtpCode = () => {
    // dispatch(reSendOtpThunk(registerForm?.userId));
  };

  useEffect(() => {
    // return () => dispatch(setErrorMsg(""));
  }, [dispatch]);

  return (
    <>
      <div className="head">
        <h2 className="mainTitle">{t("Verification code")}</h2>
        <p>{t("Enter 4 digits number that you received")}</p>
      </div>
      <Form
        name="basic"
        layout="vertical"
        onFinish={sendOtpForm}
        form={form}
        className="otpForm"
      >
        <div className="input">
          <Form.Item
            name="otp"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <OtpInput
              className="otpInput"
              value={otp}
              onChange={handleChange}
              numInputs={4}
              separator={<span> </span>}
              isInputNum
            />
          </Form.Item>
        </div>
        <div className="resendOtpCode">
          {/* // <Timer
          //   seconds={0}
          //   minutes={1}
          //   resend={resendOtpCode}
          //   text={t("Why it didn't arrive!! resend")}
          //   ButtonText={t("Send again")}
          // /> */}
        </div>
        {/* {errorMsg && <p className="errorMsg">{errorMsg}</p>}
         */}
        <Form.Item>
          <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
        </Form.Item>
      </Form>
    </>
  );
};

export default SendOtp;
