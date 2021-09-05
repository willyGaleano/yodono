import {
  Col,
  Row,
  Card,
  Popconfirm,
  Pagination,
  Image,
  Badge,
  Spin,
} from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import FilterApp from "./FilterApp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductosHome } from "../../redux/actions/appActions";
import { cambiarEstadoProducto } from "../../redux/actions/pedidosActions";

const { Meta } = Card;

const HomePage = () => {
  const text = "¿Desea solicitar este producto?";
  const dispatch = useDispatch();
  const { productosHome, loading } = useSelector((state) => state.app);
  const [request, setRequest] = useState({
    userId: "8eaad23c-cb52-4832-8d8c-1abd1f6b07ec",
    estadoNomb: "Creado",
    pageNumber: 1,
    pageSize: 6,
  });

  useEffect(() => {
    dispatch(getProductosHome(request));
  }, [dispatch, request]);

  const onChangePaginator = (pageNumber, pageSize) => {
    console.log(pageNumber);
    setRequest((prevState) => ({
      ...prevState,
      pageNumber,
      pageSize,
    }));
  };

  function confirm(item) {
    const body = {
      userSolicitanteId: "8eaad23c-cb52-4832-8d8c-1abd1f6b07ec",
      productoId: item.producId,
      estadoNomb: "Solicitado",
    };
    console.log(item);
    dispatch(
      cambiarEstadoProducto(body, request, "Producto solicitado con éxito")
    );
  }

  return (
    <>
      <Row align="middle" justify="center" style={{ marginBottom: 15 }}>
        <Col xxl={6}>
          <FilterApp />
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle" justify="center">
        {productosHome.data.map((item) => (
          <Col
            key={item.producId}
            xxl={6}
            xl={7}
            lg={10}
            md={12}
            sm={12}
            xs={24}
          >
            <Spin spinning={loading}>
              <Badge.Ribbon
                text={item.tipo.tipoNomb}
                color={item.tipo.tipoColor}
              >
                <Card
                  hoverable
                  cover={
                    <Image
                      style={{ height: 350 }}
                      alt={item.producNomb}
                      src={item.producImageUrl}
                    />
                  }
                  actions={[
                    <Popconfirm
                      icon={<HeartTwoTone twoToneColor="#7cb305" />}
                      placement="top"
                      title={text}
                      onConfirm={() => confirm(item)}
                      okText="Sí"
                      cancelText="No"
                    >
                      <HeartTwoTone twoToneColor="#7cb305" />
                    </Popconfirm>,
                  ]}
                >
                  <Meta
                    title={item.producNomb}
                    description={item.producDescrip}
                  />
                </Card>
              </Badge.Ribbon>
            </Spin>
          </Col>
        ))}
      </Row>
      <Row align="middle" justify="center" style={{ marginTop: "15px" }}>
        <Col>
          <Pagination
            onChange={onChangePaginator}
            pageSize={productosHome.pageSize}
            curren={productosHome.pageNumber}
            total={productosHome.countTotal}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
