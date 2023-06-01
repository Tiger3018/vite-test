import React from "react";
import {
  Layout,
  Breadcrumb,
  theme,
  Menu,
  Avatar,
  Input,
  Space,
  Button,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
//import "antd/dist/reset.css";

const { Header, Content, Sider, Footer } = Layout;

const nullCall = (v: string) => null;

export default function App() {
  const [keyValue, setKeyValue] = React.useState(
    "1"
  );
  const [inputValue, setInputValue] = React.useState(
    "Alice, Bob, Anonymous User"
  );
  const inputCall = (e: React.ChangeEvent) => setInputValue(e.target.value);
  const editCall = () => (setKeyValue(inputValue));
  return (
    <>
      <Layout>
        <Header>
          <Menu
            mode="inline"
            items={[
              {
                label: `App`,
                children: [{ label: "Home" }, { label: "About" }],
              },
            ]}
          ></Menu>
        </Header>
        <Content style={{ padding: "1em 3em" }}>
          <Space>
            Hello 你好
            <Space.Compact style={{}}>
              <Avatar.Group maxCount={2} size="large">
                <Avatar
                  shape="square"
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${keyValue}`}
                />
                <Avatar style={{ backgroundColor: "#e5e5e5" }} size="large">
                  AU
                </Avatar>
                <Avatar size="large">UA</Avatar>
              </Avatar.Group>
              <Space.Compact>
                <Input value={inputValue} onChange={inputCall} />
                <Button type="primary" onClick={editCall}>
                  Submit
                </Button>
              </Space.Compact>
            </Space.Compact>
            ! Weclome back.
          </Space>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}
