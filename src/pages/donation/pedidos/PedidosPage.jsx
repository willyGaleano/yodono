import { List, Row, Col, Tag, Popconfirm, message } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import FilterApp from "../../home/FilterApp";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductosPedido } from "../../../redux/actions/pedidosActions";

const PedidosPage = () => {
  const text = "¿Recoger el producto?";
  const dispatch = useDispatch();
  const { productosPedidos } = useSelector((state) => state.pedido);
  const [request, setRequest] = useState({
    userId: "ad36eb86-7b1e-4ace-b6e1-0caeb7d2b35a",
    estadoNomb: "Creado",
    pageNumber: 1,
    pageSize: 6,
  });

  useEffect(() => {
    dispatch(getProductosPedido(request));
  }, [dispatch, request]);

  const onChangePaginator = (pageNumber) => {
    console.log(pageNumber);
    setRequest((prevState) => ({
      ...prevState,
      pageNumber,
    }));
  };

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
              onChange: (page) => onChangePaginator(page),
              pageSize: productosPedidos.pageSize,
              total: productosPedidos.countTotal,
              current: productosPedidos.pageNumber,
            }}
            dataSource={productosPedidos.data}
            renderItem={(item) => (
              <List.Item
                key={item.pedidoId}
                actions={[
                  item.producto.estado.estadoNomb !== "Solicitado" ? (
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
                    </Popconfirm>
                  ) : (
                    <></>
                  ),
                ]}
                extra={
                  <img
                    width={272}
                    alt={item.producto.producNomb}
                    src={item.producto.producImageUrl}
                  />
                }
              >
                <List.Item.Meta
                  title={<span>{item.producto.producNomb}</span>}
                  description={
                    <Tag color="red">{item.producto.estado.estadoNomb}</Tag>
                  }
                />
                {item.producto.producDescrip}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default PedidosPage;
