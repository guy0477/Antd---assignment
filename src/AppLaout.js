import React, { useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { withRouter } from 'react-router';
import Login from './Login'

import { PieChartOutlined , DesktopOutlined, UserOutlined ,  FileOutlined} from "@ant-design/icons"

import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


function AppLaout(){
  
  const [collapsed , setCollapsed] = useState(false)
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  }
  

  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <div className="App-logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
             
            <Menu.Item key="1">
            <PieChartOutlined />
              <span>Option 1</span>
            </Menu.Item>
            
            <Menu.Item key="2">
            <DesktopOutlined /> 
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><UserOutlined /><span>User</span></span>}
            >
              <Menu.Item key="3">Login</Menu.Item>
              <Menu.Item key="4">Sign-up</Menu.Item>
              
            </SubMenu>
           
            <Menu.Item key="9">
            <FileOutlined />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Login</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 50, background: '#fff', minHeight: 360 }}>
              <Login />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2021 Created by Ant UED
         
          </Footer>
        </Layout>
      </Layout>
    );
  
}

export default withRouter(AppLaout);