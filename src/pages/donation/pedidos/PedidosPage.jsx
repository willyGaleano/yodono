import { List, Avatar, Space, Row, Col, Tag, Popconfirm, message } from "antd";
import { RightSquareTwoTone, StarTwoTone } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import FilterApp from "../../home/FilterApp";

const PedidosPage = () => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `Producto ${i + 1}`,
      description: "Estado",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const text = "¿Recoger el producto?";

  function confirm() {
    message.success("Clicked on Yes.");
  }
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
                actions={[
                  <Popconfirm
                    icon={<StarTwoTone twoToneColor="#fadb14" />}
                    placement="top"
                    title={text}
                    onConfirm={confirm}
                    okText="Sí"
                    cancelText="No"
                  >
                    <StarTwoTone
                      style={{ fontSize: 25 }}
                      twoToneColor="#fadb14"
                    />
                  </Popconfirm>,
                ]}
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
                  description={<Tag color="red">{item.description}</Tag>}
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

export default PedidosPage;
