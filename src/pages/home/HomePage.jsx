import {
  Col,
  Row,
  Card,
  Popconfirm,
  Pagination,
  Image,
  Badge,
  message,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  CheckCircleTwoTone,
  QuestionCircleTwoTone,
  SettingOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import FilterApp from "./FilterApp";

const { Meta } = Card;

const HomePage = () => {
  const text = "¿Desea solicitar este producto?";

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
      <Row gutter={[16, 16]} align="middle" justify="center">
        {["1", "2", "3", "4", "5", "6"].map((item) => (
          <Col key={item} xxl={6} xl={7} lg={10} md={12} sm={12} xs={24}>
            <Badge.Ribbon text="Verduras" color="#7cb305">
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <Popconfirm
                    icon={<HeartTwoTone twoToneColor="#7cb305" />}
                    placement="top"
                    title={text}
                    onConfirm={confirm}
                    okText="Sí"
                    cancelText="No"
                  >
                    <HeartTwoTone twoToneColor="#7cb305" />
                  </Popconfirm>,
                ]}
              >
                <Meta
                  title="Producto X"
                  description="Descripción del producto"
                />
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
      <Row align="middle" justify="center" style={{ marginTop: "15px" }}>
        <Col>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
