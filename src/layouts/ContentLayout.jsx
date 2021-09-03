import { Layout } from "antd";

const { Content } = Layout;

const ContentLayout = ({ children }) => {
  return (
    <Content
      className="site-layout"
      style={{ padding: "10px 50px", marginTop: 64 }}
    >
      <div className="site-layout-background" style={{ padding: 24 }}>
        {children}
      </div>
    </Content>
  );
};

export default ContentLayout;
