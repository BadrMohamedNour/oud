import { Form } from "antd";
import OtpInput from "react18-input-otp";
import Timer from "otp-timer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/store/store";
import ButtonsS2 from "@/components/tools/buttons/buttonS1";
import {
  requestOtpThunk,
  sendOtpThunk,
  setIsModalVisibleMagicLink,
} from "@/store/slices/auth/loginSlice";

interface OtpFormValues {
  otp: string;
}

const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

const SendOtp: React.FC = () => {
  const [form] = Form.useForm<OtpFormValues>();
  const [otp, setOtp] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations("Header");
  const { loading, MagicLinkType, recipient, countryCode, apiErrors } =
    useSelector((state: RootState) => state.login);
  const router = useRouter();

  const handleChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
    form.setFieldsValue({ otp: enteredOtp } as OtpFormValues);
  };

  const handleSubmit = () => {
    dispatch(sendOtpThunk({ otp }))
      .unwrap()
      .then((response) => {
        console.log(response.data);
        const cookieOptions = {
          domain: COOKIE_DOMAIN,
          path: "/",
          expires: new Date(Date.now() + ONE_MONTH_MS),
          secure: true,
          sameSite: "strict" as const,
        };
        Cookies.set("MToken", response.data.token, cookieOptions);
        Cookies.set("cart_token", response.data.cart_token, cookieOptions);
        dispatch(setIsModalVisibleMagicLink({ status: false }));
        router.refresh();
      })
      .catch((error) => {
        console.log("Error during OTP submission:", error);
      });
  };

  const handleResend = () => {
    dispatch(
      requestOtpThunk({
        type: MagicLinkType === "phone" ? "sms" : MagicLinkType,
        recipient,
        country_code: countryCode,
      })
    );
  };

  return (
    <div>
      <div className="head">
        <h2>{t("Verification code")}</h2>
        <p>{t("Enter 4 digits number that you received")}</p>
      </div>

      <Form<OtpFormValues>
        form={form}
        name="send-otp-form"
        layout="vertical"
        onFinish={handleSubmit}
        className="otp-form"
      >
        <Form.Item
          name="otp"
          rules={[{ required: true, message: t("Please enter the OTP") }]}
          help={apiErrors?.errors?.otp}
        >
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            isInputNum
            containerStyle="otp-input"
          />
        </Form.Item>

        <div className="resend-otp">
          <Timer
            seconds={0}
            minutes={1}
            resend={handleResend}
            text={t("Why it didn't arrive!! resend")}
            ButtonText={t("Resend")}
          />
        </div>

        <Form.Item>
          <ButtonsS2 text={t("Send")} type="submit" loading={loading} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SendOtp;
