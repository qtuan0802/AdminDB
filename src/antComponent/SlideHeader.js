import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import Picture from "../Services/picture";
import Video from "../Services/video";
import {
  Link,
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingFilled,
  PictureFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SlideHeader extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <StyledLayout>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Logo>
            <H1>Push Logo Here</H1>
          </Logo>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<SettingFilled />}
              title="Item Management"
            >
              <Menu.Item key="10" icon={<PictureFilled />}>
                <NavLink to="/picture" exact>
                  Picture
                </NavLink>
              </Menu.Item>

              <Menu.Item key="11" icon={<VideoCameraOutlined />}>
                <NavLink to="/video" exact>
                  Video
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <StyledHeader />
          <StyledContent>
            <StyledBreadcrumb>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </StyledBreadcrumb>
            <StyledBreadcrumbContent>
              <Route path="/picture" component={Picture} />
              <Route path="/video" component={Video} />
            </StyledBreadcrumbContent>
          </StyledContent>
          <StyledFooter> Copy Right ©2021 </StyledFooter>
        </Layout>
      </StyledLayout>
    );
  }
}

/*--------------- Styled CSS --------------*/
const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;
const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
`;
const StyledContent = styled(Content)`
  margin: 0 16px;
`;
const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;
const StyledBreadcrumbContent = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 360px;
`;
const StyledFooter = styled(Footer)`
  text-align: center;
`;
const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;
const H1 = styled.h1`
  color: #fff;
  text-align: center;
`;
