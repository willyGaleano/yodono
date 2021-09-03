import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import IconApp from "../../../components/common/svg/IconApp";
import IconLogin from "../../../components/common/svg/IconLogin";
import Text from "antd/lib/typography/Text";

const LoginPage = () => {
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
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Ingresar
              </Button>
              O <Link to="/register">¡Registrate ahora!</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};

export default LoginPage;
