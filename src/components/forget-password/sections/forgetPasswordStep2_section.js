// import LoadingPageS1 from "@components/tools/loading/loadingPageS1";
import {
  checkToken,
  setCurrent,
  setIsModalVisibleForget,
} from "@/store/slices/auth/forgetPasswordSlice";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPasswordStep2_form } from "../forms/forgetPasswordStep2_form";

export const ForgetPasswordStep2_section = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslations("Common");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(checkToken({ token: router.query.token }))
      .unwrap()
      .then((res) => {
        setLoading(false);
      })
      .catch(() => {
        dispatch(setIsModalVisibleForget(false));
        dispatch(setCurrent(1));
      });
  }, [router.query.token, dispatch]);

  return (
    <>
      {loading === true ? (
        "loding"
      ) : (
        <div className="modalS1_content">
          <Row>
            <Col xs={24} md={8}>
              <div className="modalS1_Des">
                <div>
                  <Image
                    alt="forget password"
                    src="/images/forget-password/forgetTwo.png"
                    width={"168"}
                    height={"270"}
                  />
                </div>
              </div>
            </Col>

            <Col xs={24} md={16}>
              <div className="modalS1_form">
                <div className="modalS1_header modalS1_content2">
                  <h2>{t("Password Reset")}</h2>
                  <p>
                    {t(
                      "Please write a strong password..not less than 8 characters consisting of letters, numbers and symbols"
                    )}
                  </p>
                </div>
                <div className="modalS1_content2">
                  <ForgetPasswordStep2_form />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
