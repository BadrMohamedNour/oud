import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import {
  requestOtpThunk,
  setLoginStep,
} from "../../../../../../../store/slices/auth/loginSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  recipient: string;
}

const RequestOtp: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const th = useTranslations("Header");
  const t = useTranslations("Forms");
  const dispatch = useDispatch<AppDispatch>();
  const { apiErrors, loading, MagicLinkType } = useSelector(
    (state: RootState) => state.login
  );
  const handleSubmit = (values: LoginFormValues) => {
    dispatch(
      requestOtpThunk({
        type: MagicLinkType === "phone" ? "sms" : MagicLinkType,
        recipient: values.recipient,
        country_code: "+20",
      })
    ).then(() => {
      setLoginStep(2);
    });
  };

  return (
    <>
      <div className="head">
        <h2>{th("Welcome Back")}</h2>
        <p>{th("Login with code")}</p>
      </div>
      <Form<LoginFormValues>
        form={form}
        name="login"
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
          <Input className="input" placeholder={t(MagicLinkType || "email")} />
        </Form.Item>

        <Form.Item>
          <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
        </Form.Item>
      </Form>
    </>
  );
};

export default RequestOtp;
