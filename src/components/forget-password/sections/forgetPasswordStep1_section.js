import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ForgetPasswordStep1_form } from "../forms/forgetPasswordStep1_form";

export const ForgetPasswordStep1_section = () => {
  const { t } = useTranslations("Common");

  return (
    <div className="modalS1_content">
      <Row>
        <Col xs={24} md={8}>
          <div className="modalS1_Des">
            <div>
              <Image
                alt="register"
                src="/images/forget-password/forgetOne.png"
                width={"168"}
                height={"220"}
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
                  "In order to be able to reset the password, please type the email registered with us on the site, a message will be sent to Your email with the reset code."
                )}
              </p>
            </div>
            <div className="modalS1_content2">
              <ForgetPasswordStep1_form />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
