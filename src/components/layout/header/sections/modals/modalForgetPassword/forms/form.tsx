import { Form, FormProps, Input } from "antd";
import ButtonsS2 from "@/components/tools/buttons/buttonS2";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { AppDispatch, RootState } from "@/store/store";
import { forgetPasswordThunk } from "@/store/slices/auth/forgetPasswordSlice";

interface FieldType {
  email: string;
}

const ForgetPasswordForm: React.FC = () => {
  const t = useTranslations("Forms");

  const { apiErrors, loading } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch<AppDispatch>();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    dispatch(forgetPasswordThunk(values));
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form<FieldType>
      name="forget-password"
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
          { type: "email", message: t("invalid email") },
        ]}
        validateStatus={apiErrors?.errors?.email ? "error" : undefined}
        help={apiErrors?.errors?.email}
      >
        <Input className="input" placeholder={t("email")} />
      </Form.Item>

      <ButtonsS2 text={t("Login")} type="submit" loading={loading} />
    </Form>
  );
};

export default ForgetPasswordForm;
