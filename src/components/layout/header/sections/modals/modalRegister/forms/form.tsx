import { ConfigProvider, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import PhoneInput, { locale } from "antd-phone-input";
import { AppDispatch, RootState } from "@/store/store";
import { registerThunk } from "@/store/slices/auth/registerSlice";

interface RegisterFormValues {
  name: string;
  email: string;
  telephone: { areaCode: string; phoneNumber: string };
  password: string;
}

const RegisterForm: React.FC<{ handleCloseModal: () => void }> = ({
  handleCloseModal,
}) => {
  const lang = Cookies.get("NEXT_LOCALE") || "ar";
  const [form] = Form.useForm();
  const t = useTranslations("Forms");
  const dispatch = useDispatch<AppDispatch>();
  const { apiErrors, loading } = useSelector(
    (state: RootState) => state.register
  );

  const handleSubmit = (values: RegisterFormValues) => {
    dispatch(
      registerThunk({
        ...values,
        telephone: `+${values.telephone.areaCode}${values.telephone.phoneNumber}`,
      })
    )
      .unwrap()
      .then(({ message: msg }) => {
        form.resetFields();
        handleCloseModal();
        message.success(msg);
      })
      .catch((error) => {
        console.log("rejected", error);
      });
  };
  return (
    <ConfigProvider locale={locale(lang === "ar" ? "arEG" : "enGB")}>
      <Form<RegisterFormValues>
        form={form}
        name="register"
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
        className="space-y-4"
      >
        <Form.Item<RegisterFormValues>
          name="name"
          rules={[{ required: true, message: t("required") }]}
          validateStatus={apiErrors?.errors?.name ? "error" : undefined}
          help={apiErrors?.errors?.name}
        >
          <Input className="input" placeholder={t("Name")} />
        </Form.Item>

        <Form.Item<RegisterFormValues>
          name="email"
          rules={[
            { required: true, message: t("required") },
            { type: "email", message: t("invalid email") },
          ]}
          validateStatus={apiErrors?.errors?.email ? "error" : undefined}
          help={apiErrors?.errors?.email}
        >
          <Input className="input" placeholder={t("email")} />
        </Form.Item>

        <Form.Item<RegisterFormValues>
          name="telephone"
          rules={[{ required: true, message: t("required") }]}
          validateStatus={apiErrors?.errors?.telephone ? "error" : undefined}
          help={apiErrors?.errors?.telephone}
        >
          <PhoneInput
            enableSearch
            className="phone-input"
            disableParentheses
            preferredCountries={["sa", "eg", "kw", "bh", "om", "qa"]}
          />
        </Form.Item>

        <Form.Item<RegisterFormValues>
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

export default RegisterForm;
