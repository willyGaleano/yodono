import { List, Avatar, Space, Row, Col, Popconfirm, message } from "antd";
import {
  RightSquareTwoTone,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import FilterApp from "../../home/FilterApp";

const SolicitudesPage = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `Producto ${i + 1}`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }
  const textConfirm = "¿Donar producto?";

  function confirm() {
    message.success("Clicked on Yes.");
  }
  const textReject = "¿No entregar producto?";

  function reject() {
    message.success("Clicked on Yes.");
  }

  const acciones = (item) => {
    return [
      <Popconfirm
        icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
        placement="top"
        title={textConfirm}
        onConfirm={confirm}
        okText="Sí"
        cancelText="Cerrar"
      >
        <CheckCircleTwoTone style={{ fontSize: 25 }} twoToneColor="#52c41a" />
      </Popconfirm>,
      <Popconfirm
        icon={<CloseCircleTwoTone twoToneColor="#eb2f96" />}
        placement="top"
        title={textReject}
        onConfirm={reject}
        okText="Sí"
        cancelText="Cerrar"
      >
        <CloseCircleTwoTone style={{ fontSize: 25 }} twoToneColor="#eb2f96" />
      </Popconfirm>,
    ];
  };

  return (
    <>
      <Row align="middle" justify="center" style={{ marginBottom: 15 }}>
        <Col xxl={6}>
          <FilterApp />
        </Col>
      </Row>
      <Row align="middle" justify="center" style={{ marginBottom: 15 }}>
        <Col>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={acciones(item)}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default SolicitudesPage;
