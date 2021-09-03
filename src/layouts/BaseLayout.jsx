import { Layout } from "antd";
import ContentLayout from "./ContentLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import "./base.css";

const BaseLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderLayout />
      <ContentLayout>{children}</ContentLayout>
      <FooterLayout />
    </Layout>
  );
};

export default BaseLayout;
