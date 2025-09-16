import ButtonsS1 from "@/components/tools/buttons/buttonS1";
import InputS1 from "@/components/tools/inputs/inputS1";
import {
  resetPassword,
  setCurrent,
  setIsModalVisibleForget,
} from "@/store/slices/auth/forgetPasswordSlice";
import { Form, Input } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const ForgetPasswordStep2_form = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslations("Common");
  const router = useRouter();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setLoading(true);

    dispatch(
      resetPassword({
        token: router.query.token,
        new_password: values.new_password,
        confirm_password: values.confirm_password,
      })
    )
      .unwrap()
      .then((res) => {
        dispatch(setCurrent(3));
        setLoading(false);
      })
      .catch(() => {
        // console.log('faild')
        // setLoading(false)
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="stepOneForm">
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <InputS1>
          <Form.Item
            name="new_password"
            rules={[
              {
                required: true,
                message: t("Enter the password"),
              },
            ]}
          >
            <Input.Password
              type="email"
              placeholder={t("Enter the password")}
            />
          </Form.Item>
        </InputS1>
        <InputS1>
          <Form.Item
            name="confirm_password"
            dependencies={["new_password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: t("confirm password"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      t("The two passwords that you entered do not match!")
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={t("confirm password")} />
          </Form.Item>
        </InputS1>
        <Form.Item>
          <ButtonsS1
            text={t("Password Reset")}
            type="submit"
            className="forgetPasswordBtn"
            loading={loading}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
