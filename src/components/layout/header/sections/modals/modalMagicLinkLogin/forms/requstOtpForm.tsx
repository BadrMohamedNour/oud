import { ConfigProvider, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import PhoneInput, { locale } from "antd-phone-input";
import Cookies from "js-cookie";
import {
  requestOtpThunk,
  setLoginStep,
  setRecipient,
} from "@/store/slices/auth/loginSlice";
import { AppDispatch, RootState } from "@/store/store";

interface LoginFormValues {
  recipient: {
    areaCode: string;
    phoneNumber: string;
    countryCode: number;
  };
}

const RequestOtp: React.FC = () => {
  const lang = Cookies.get("NEXT_LOCALE") || "ar";
  const [form] = Form.useForm<LoginFormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const th = useTranslations("Header");
  const t = useTranslations("Forms");
  const { apiErrors, loading, MagicLinkType } = useSelector(
    (state: RootState) => state.login
  );

  const handleSubmit = async ({
    recipient: { areaCode, phoneNumber, countryCode },
  }: LoginFormValues) => {
    try {
      await dispatch(
        requestOtpThunk({
          type: MagicLinkType === "phone" ? "sms" : MagicLinkType,
          recipient: areaCode.concat(phoneNumber),
          country_code: `+${countryCode.toString()}`,
        })
      ).unwrap();
      dispatch(
        setRecipient({
          recipient: areaCode.concat(phoneNumber),
          countryCode: `+${countryCode.toString()}`,
        })
      );
      dispatch(setLoginStep(2));
    } catch (error) {
      console.log("Request OTP failed:", error);
    }
  };

  return (
    <div>
      <div className="head">
        <h2>{th("Welcome Back")}</h2>
        <p>{th("Login with code")}</p>
      </div>
      <ConfigProvider locale={locale(lang === "ar" ? "arEG" : "enGB")}>
        <Form<LoginFormValues>
          form={form}
          name="request-otp-form"
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          className="space-y-4"
        >
          <Form.Item<LoginFormValues>
            name="recipient"
            rules={[{ required: true, message: t("required") }]}
            validateStatus={apiErrors?.errors?.email ? "error" : undefined}
            help={apiErrors?.errors?.email}
          >
            {MagicLinkType === "email" ? (
              <Input
                className="input"
                placeholder={t("email")}
                disabled={loading}
              />
            ) : (
              <PhoneInput
                enableSearch
                className="phone-input"
                preferredCountries={["sa", "eg", "kw", "bh", "om", "qa"]}
                disableParentheses
              />
            )}
          </Form.Item>

          <Form.Item>
            <ButtonsS2 text={th("Send")} type="submit" loading={loading} />
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default RequestOtp;
