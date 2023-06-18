import React from "react";
import {
  Layout,
  Breadcrumb,
  theme,
  Menu,
  Avatar,
  Card,
  Col,
  Input,
  Row,
  Space,
  Button,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
//import "antd/dist/reset.css";

const { Header, Content, Sider, Footer } = Layout;

const nullCall = (v: string) => null;

export default function App() {
  const [keyValue, setKeyValue] = React.useState("1");
  const [inputValue, setInputValue] = React.useState(
    "Alice, Bob, Anonymous User"
  );
  const editedImage = React.useRef(null);
  const originalImage = React.useRef(null);
  const inputCall = (e: React.ChangeEvent) => setInputValue(e.target.value);
  const editCall = () => setKeyValue(inputValue);
  const blurCall = (e: React.MouseEvent) => {
    console.log(
      "%cblur button clicked.%o",
      "padding: .15rem .25rem; border: .1rem dashed",
      e.currentTarget
    );
    //console.log(editedImage.current.parentNode.parentNode);
    /** You must treat React elements and their props as immutable and never change their contents after creation. */
    let imgCrossBypass = document.createElement("img");
    imgCrossBypass.src = originalImage.current.src; /** TODO a second load */
    imgCrossBypass.crossOrigin = "Anonymous";
    /** https://stackoverflow.com/questions/71750699/creating-a-blurred-image-in-javascrpt */
    imgCrossBypass.onload = () => {
      let canvasTemp = document.createElement("canvas");
      canvasTemp.height = imgCrossBypass.naturalHeight;
      canvasTemp.width = imgCrossBypass.naturalWidth;
      const ctx = canvasTemp.getContext("2d");
      ctx.filter = "blur(20px)";
      ctx.drawImage(
        //originalImage.current,
        imgCrossBypass,
        0,
        0,
        imgCrossBypass.naturalWidth,
        imgCrossBypass.naturalHeight,
      );
      canvasTemp.toBlob((blob) => {
        editedImage.current.src =
          URL.createObjectURL(blob); /** Not recommended - direct write.*/
        console.log(
          "%cblur button event callback. %o%o",
          "padding: .15rem .25rem; border: .1rem dashed",
          imgCrossBypass.sizes,
          editedImage
        );
      });
    };
  };
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
          <Row>
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
          </Row>
          <Row gutter={16} type="flex">
            <Col className="gutter-row" span={18}>
              <Space>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="original"
                      ref={originalImage}
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      style={{ height: "", width: "20vw" }}
                    />
                  }
                  style={{ flex: "1" }}
                ></Card>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="edited"
                      ref={editedImage}
                      /** https://png-pixel.com/ */
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAAF7CAQAAAApyMWyAAACqklEQVR42u3SQREAAAzCMFA+61PBL5HQa3OBkdoLe2EvsBf2wl5gL+yFvcBe2At7gb2wF/YCe2Ev7GUv7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXtgL7IW9sJcI2At7gb2wF/YCe2Ev7AX2wl7YC+yFvbAX2At7YS+wF/YCe2Ev7AX2wl7YC+yFvbAX2At7YS+wF/bCXmAv7AX2wl7YC+yFvbAX2At7YS+wF/bCXmAv7IW9wF7YC+yFvbAX2At7YS+wF/bCXmAv7IW9wF7YC3uBvbAX2At7YS+wF/bCXmAv7IW9wF7YC3uBvbAX9gJ7YS+wF/bCXmAv7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXmAv7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXtgL7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXtgL7IW9sBfYC3uBvbAX9gJ7YS/sBfbCXtgL7IW9sBfYC3thL7AX9gJ7YS/sBfbCXtgL7IW9sBfYC3thL7AX9sJeYC/sBfbCXtgL7IW9sBfYC3thL7AX9sJeYC/shb3AXtgL7IW9sBfYC3thL7AX9sJeYC/shb3AXtgLe4G9sBfYC3thL7AX9sJeYC/shb3AXtgLe4G9sBf2AnthL+xlL+yFvcBe2At7gb2wF/YCe2Ev7AX2wl7YC+yFvbCXvbAX9gJ7YS/sBfbCXtgL7IW9sBfYC3thL7AX9sJeImAv7AX2wl7YC+yFvbAX2At7YS+wF/bCXmAv7IW9wF7YC+yFvbAX2At7YS+wF/bCXmAv7IW9wF7YC3uBvbAX2At7YS+wF/bCXmAv7IW9wF7YC3uBvbAX9gJ7YS+wF/bCXmAv7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXmAv7IW9wF7YC3uBvbAX9gJ7YS/sBfbCXtgLBh7RC72BoRQYDgAAAABJRU5ErkJggg=="
                      style={{ height: "", width: "20vw" }}
                    />
                  }
                  style={{ flex: "1" }}
                  //loading
                ></Card>
              </Space>
            </Col>
            <Col className="gutter-row" span={6}>
              <Space.Compact direction="vertical">
                <Button type="dashed" onClick={blurCall}>
                  Blur
                </Button>
                <Button type="dashed">Let</Button>
              </Space.Compact>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}
