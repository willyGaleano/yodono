import React, { useState } from "react";
import { Form, Input, Row, Col, Button, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import IconLogin from "../../../components/common/svg/IconLogin";
import { Link } from "react-router-dom";

const formItemLayout = {
  layout: "vertical",
  /*
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },*/
};
const tailFormItemLayout = {
  /*
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },*/
};

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Content
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Row
        align="middle"
        justify="center"
        style={{ marginBottom: 15, padding: "0 15px" }}
      >
        <Col>
          <Space direction="vertical">
            <Text
              strong
              style={{
                textAlign: "center",
                fontSize: 25,
                fontFamily: "sans-serif",
                color: "teal",
              }}
            >
              Yo Dono
            </Text>
            <IconLogin />
          </Space>
        </Col>
        <Col span={24}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{}}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              O <Link to="/login">Volver al login</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};

export default RegisterPage;
