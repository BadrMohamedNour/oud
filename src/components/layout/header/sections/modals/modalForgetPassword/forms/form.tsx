import { Form, FormProps, Input } from "antd";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { loginThunk } from "../../../../../../../store/slices/auth/loginSlice";
import { AppDispatch, RootState } from "@/store/store";

interface FieldType {
  email: string;
}

const ForgetPasswordForm: React.FC = () => {
  const t = useTranslations("Forms");

  const { apiErrors, loading } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch<AppDispatch>();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // dispatch(loginThunk(values));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form<FieldType>
      name="login"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item<FieldType>
        name="email"
        rules={[
          {
            required: true,
            message: t("required"),
          },
          { type: "email", message: t("") },
        ]}
        validateStatus={apiErrors?.errors?.email ? "error" : undefined}
        help={apiErrors?.errors?.email}
      >
        <Input className="input" placeholder={t("Email")} />
      </Form.Item>

      <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
    </Form>
  );
};

export default ForgetPasswordForm;
