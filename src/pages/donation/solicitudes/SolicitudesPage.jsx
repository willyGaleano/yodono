import { List, Row, Col, Popconfirm, message } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import FilterApp from "../../home/FilterApp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductosSolicitud } from "../../../redux/actions/pedidosActions";
//willy : 8eaad23c-cb52-4832-8d8c-1abd1f6b07ec
//bryan: ad36eb86-7b1e-4ace-b6e1-0caeb7d2b35a
const SolicitudesPage = () => {
  const textConfirm = "¿Donar producto?";
  const dispatch = useDispatch();
  const { productosSolicitud } = useSelector((state) => state.pedido);
  const [request, setRequest] = useState({
    userId: "ad36eb86-7b1e-4ace-b6e1-0caeb7d2b35a",
    estadoNomb: "Solicitado",
    pageNumber: 1,
    pageSize: 6,
  });

  useEffect(() => {
    dispatch(getProductosSolicitud(request));
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
              onChange: (page) => onChangePaginator(page),
              pageSize: productosSolicitud.pageSize,
              total: productosSolicitud.countTotal,
              current: productosSolicitud.pageNumber,
            }}
            dataSource={productosSolicitud.data}
            renderItem={(item) => (
              <List.Item
                key={item.pedidoId}
                actions={acciones(item)}
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
                  description={item.producto.producDescrip}
                />
                {item.userSolicitante.userName}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default SolicitudesPage;
