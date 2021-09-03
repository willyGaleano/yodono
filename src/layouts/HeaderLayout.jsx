import { Col, Layout, Menu, Popover, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import { Link } from "react-router-dom";
import IconApp from "../components/common/svg/IconApp";
import IconUser from "../components/common/svg/IconUser";
import { RightSquareTwoTone } from "@ant-design/icons";

const { Header } = Layout;

const HeaderLayout = () => {
  const content = (
    <Space direction="vertical">
      <Link to="/usuarios">
        <Space>
          <RightSquareTwoTone /> Admin
        </Space>
      </Link>
      <Link to="/login">
        <Space>
          <RightSquareTwoTone /> Salir
        </Space>
      </Link>
    </Space>
  );

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Row align="middle" justify="start" gutter={16}>
        <Col xxl={2}>
          <Link to="/">
            <IconApp />
          </Link>
        </Col>
        <Col xxl={20}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to="/mis-solicitudes">Mis solicitudes</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="mis-pedidos">Mis pedidos</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/usuarios">Admin</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xxl={2}>
          <Popover content={content} title="Williams Galeano" trigger="hover">
            <Space>
              <IconUser />
              <Text strong style={{ color: "white" }}>
                Willy
              </Text>
            </Space>
          </Popover>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderLayout;
