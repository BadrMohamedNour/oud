import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import {
  loginThunk,
  setIsModalVisibleLogin,
} from "../../../../../../../store/slices/auth/loginSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  identifier: string;
  password: string;
}

const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const t = useTranslations("Forms");
  const dispatch = useDispatch<AppDispatch>();
  const { apiErrors, loading } = useSelector((state: RootState) => state.login);

  const handleSubmit = (values: LoginFormValues) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then((response) => {
        // Set cookies with consistent configuration
        const cookieOptions = {
          domain: COOKIE_DOMAIN,
          path: "/",
          expires: new Date(Date.now() + ONE_MONTH_MS),
          secure: true,
          sameSite: "strict" as const,
        };

        Cookies.set("MToken", response.data.access_token, cookieOptions);
        Cookies.set(
          "MUser",
          JSON.stringify(response.data.customer),
          cookieOptions
        );
        Cookies.set("MCartToken", response.data.cart_token, cookieOptions);

        dispatch(setIsModalVisibleLogin(false));
        router.refresh();
      });
  };
  return (
    <Form<LoginFormValues>
      form={form}
      name="login"
      layout="vertical"
      onFinish={handleSubmit}
      autoComplete="off"
      className="space-y-4"
    >
      <Form.Item<LoginFormValues>
        name="identifier"
        rules={[
          { required: true, message: t("required") },
          {
            pattern: /^966\d{8}$/,
            message: "Mobile number must be 10 digits long and start with 966",
          },
        ]}
        validateStatus={apiErrors?.errors?.email ? "error" : undefined}
        help={apiErrors?.errors?.email}
      >
        <Input className="input" placeholder={t("Identifier")} />
      </Form.Item>

      <Form.Item<LoginFormValues>
        name="password"
        rules={[{ required: true, message: t("required") }]}
      >
        <Input.Password className="input" placeholder={t("Password")} />
      </Form.Item>

      <Form.Item>
        <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
