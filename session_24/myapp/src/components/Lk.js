import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./lk.css";
import Login from "./Login";
const { Header, Content, Footer } = Layout;
const Lk = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                /> */}
        <ul>
          <li id="kl">About us</li>
          <li className="ll">Home</li>
        </ul>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Login />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          bottom: "0px",
          position: "absolute",
          //   maxWidth:'300px',
          width: "100%",
          height: "10%",
          background: "black",
          padding: "0px",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Lk;
