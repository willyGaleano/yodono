import {
  Col,
  Row,
  List,
  Avatar,
  Modal,
  Popconfirm,
  message,
  Form,
  Input,
} from "antd";
import FilterApp from "../../home/FilterApp";
import {
  UserOutlined,
  EditTwoTone,
  CloseSquareTwoTone,
} from "@ant-design/icons";
import { useState } from "react";

const UsuariosPage = () => {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  const textReject = "¿No entregar producto?";

  function reject() {
    message.success("Clicked on Yes.");
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Nombre">
            <Input />
          </Form.Item>
          <Form.Item label="Apellidos">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Contraseña">
            <Input />
          </Form.Item>
          <Form.Item label="Repite contraseña">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Row align="middle" justify="center" style={{ marginBottom: 15 }}>
        <Col xxl={6}>
          <FilterApp />
        </Col>
      </Row>
      <Row align="middle" justify="center" style={{ marginBottom: 15 }}>
        <Col xxl={12}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <EditTwoTone
                    onClick={showModal}
                    style={{ fontSize: 25 }}
                    twoToneColor="#faad14"
                  />,
                  <Popconfirm
                    icon={<CloseSquareTwoTone twoToneColor="#eb2f96" />}
                    placement="top"
                    title={textReject}
                    onConfirm={reject}
                    okText="Sí"
                    cancelText="Cerrar"
                  >
                    <CloseSquareTwoTone
                      style={{ fontSize: 25 }}
                      twoToneColor="#eb2f96"
                    />
                  </Popconfirm>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={<a href="https://ant.design">{item?.title}</a>}
                  //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default UsuariosPage;
