import { ConfigProvider, Form, Input, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import PhoneInput, { locale } from "antd-phone-input";
import {
  clearApiErrors,
  loginThunk,
  setIsModalVisibleLogin,
} from "../../../../../../../store/slices/auth/loginSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginFormValues {
  email?: string;
  identifier?: {
    areaCode: number;
    phoneNumber: number;
  };
  password: string;
}

const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

const LoginForm: React.FC = () => {
  const lang = Cookies.get("NEXT_LOCALE") || "ar";
  const router = useRouter();
  const [form] = Form.useForm();
  const t = useTranslations("Forms");
  const dispatch = useDispatch<AppDispatch>();
  const { apiErrors, loading } = useSelector((state: RootState) => state.login);

  // State to track active tab
  const [activeTab, setActiveTab] = useState("1");

  const items = [
    {
      label: t("email"),
      key: "1",
      children: (
        <Form.Item<LoginFormValues>
          name="email"
          rules={[
            { required: true, message: t("required") },
            {
              type: "email",
              message: t("invalid email"),
            },
          ]}
          validateStatus={apiErrors?.errors?.message ? "error" : undefined}
          help={
            apiErrors?.errors?.message ? apiErrors?.errors?.message : undefined
          }
        >
          <Input className="input" placeholder={t("email")} />
        </Form.Item>
      ),
    },
    {
      label: t("phone"),
      key: "2",
      children: (
        <Form.Item<LoginFormValues>
          name="identifier"
          rules={[{ required: true, message: t("required") }]}
          validateStatus={apiErrors?.errors?.message ? "error" : undefined}
          help={
            apiErrors?.errors?.message ? apiErrors?.errors?.message : undefined
          }
        >
          <PhoneInput
            enableSearch
            className="phone-input"
            disableParentheses
            preferredCountries={["sa", "eg", "kw", "bh", "om", "qa"]}
          />
        </Form.Item>
      ),
    },
  ];

  const handleSubmit = async (values: LoginFormValues) => {
    let identifierValue: string;

    // Determine identifier based on active tab
    if (activeTab === "1") {
      identifierValue = values.email!;
    } else {
      identifierValue = `+${values.identifier!.areaCode}${
        values.identifier!.phoneNumber
      }`;
    }

    dispatch(
      loginThunk({
        identifier: identifierValue,
        password: values.password,
      })
    )
      .unwrap()
      .then((response) => {
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
        form.resetFields();
        dispatch(setIsModalVisibleLogin(false));
        router.refresh();
      })
      .catch((error) => {
        // Handle errors if needed
        console.log("Login failed:", error);
      });
  };

  const changeTabHandler = (key: string) => {
    setActiveTab(key);
    dispatch(clearApiErrors());
    form.resetFields();
  };

  return (
    <ConfigProvider locale={locale(lang === "ar" ? "arEG" : "enGB")}>
      <Form<LoginFormValues>
        form={form}
        name="login"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        className="space-y-4"
      >
        <Tabs
          defaultActiveKey="1"
          centered
          items={items}
          onChange={changeTabHandler}
          destroyOnHidden
        />

        <Form.Item<LoginFormValues>
          name="password"
          rules={[{ required: true, message: t("required") }]}
          validateStatus={apiErrors?.errors?.password ? "error" : undefined}
          help={apiErrors?.errors?.password}
        >
          <Input.Password className="input" placeholder={t("Password")} />
        </Form.Item>

        <Form.Item>
          <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
