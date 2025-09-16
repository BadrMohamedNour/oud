import ButtonsS1 from "@/components/tools/buttons/buttonS1";
import InputS1 from "@/components/tools/inputs/inputS1";
import {
  sendEmailCheck,
  setValuesStep1,
} from "@/store/slices/auth/forgetPasswordSlice";
import { Form, Input } from "antd";
import { useTranslations } from "next-intl";
import { MdAlternateEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const ForgetPasswordStep1_form = () => {
  const { t } = useTranslations("Common");
  const { apiErrorsStep1, checkEmailMessage, loading } = useSelector(
    ({ forgetPassword }) => forgetPassword
  );
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(sendEmailCheck({ email: values.userEmail }));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(checkEmailMessage);

  return (
    <div className="stepOneForm">
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {checkEmailMessage ? (
          <div className="hintMessage">
            {t("A message has been sent to the e-mail.")}
          </div>
        ) : (
          <>
            <InputS1>
              <Form.Item
                name="userEmail"
                className="email"
                rules={[
                  {
                    required: true,
                    message: t("Enter the email address"),
                  },
                ]}
                validateStatus={apiErrorsStep1?.errors?.email && "error"}
                help={apiErrorsStep1?.errors?.email}
              >
                <Input
                  type="email"
                  placeholder={t("E-mail address")}
                  prefix={<MdAlternateEmail />}
                />
              </Form.Item>
            </InputS1>

            <Form.Item>
              <ButtonsS1
                text={t("send the code")}
                type="submit"
                className="forgetPasswordBtn"
                loading={loading}
              />
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
};
