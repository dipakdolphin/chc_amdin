import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,PoweroffOutlined } from "@ant-design/icons";
import React from 'react';
import "../App.css"
const { Header, Content, Footer } = Layout;

const { SubMenu } = Menu;


const Layouts = (props) => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" >
     
        <p style={{ color: '#FFFFFF', margin: "-16px 16px 0", fontWeight: 'bold', fontSize: 13 }}>
          
        <Link to ='/home'><HomeOutlined /> CHC Admin </Link></p>
          
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ marginLeft: 'auto' }}
        defaultSelectedKeys={['2']}>
        <SubMenu key="sub1" title="Digital Work Setup">
          <Menu.Item key="1.2">
            <Link to="/workplan">
              Work Plan
            </Link>
          </Menu.Item>
          
        </SubMenu>
                 <SubMenu key="sub2" title="Machine Setup">
          <Menu.Item key="1.1">
            <Link to="/staffinfo">Staff Infromartion</Link>
          </Menu.Item>
          <Menu.Item key="1.2">
            <Link to="/stafftransections">
              Staff Transection
            </Link>
          </Menu.Item>
          <Menu.Item key="1.3">
            <Link to="/staffsalarysheet" >
              Staff Salary Sheet</Link> </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Media Setup">
          <Menu.Item key="1.1">
            <Link to="/staffinfo">Staff Infromartion</Link>
          </Menu.Item>
          <Menu.Item key="1.2">
            <Link to="/stafftransections">
              Staff Transection
            </Link>
          </Menu.Item>
          <Menu.Item key="1.3">
            <Link to="/staffsalarysheet" >
              Staff Salary Sheet</Link> </Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="General Setup">
          <Menu.Item key="1.1">
            <Link to="/staffinfo">Staff Infromartion</Link>
          </Menu.Item>
          <Menu.Item key="1.2">
            <Link to="/stafftransections">
              Staff Transection
            </Link>
          </Menu.Item>
          <Menu.Item key="1.3">
            <Link to="/staffsalarysheet" >
              Staff Salary Sheet</Link> </Menu.Item>
        </SubMenu>
        <SubMenu  key="sub5"  title="Administrator" style={{position:'revert'}} >
          <Menu.Item key="1.1">
            <Link to="/staffinfo">Log Out</Link>
          </Menu.Item>
          
        </SubMenu>



      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >

      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        {props.children}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Jeevan Bikas Samaj-MBNC © {new Date().getFullYear()} Created by JBS Technology Pvt. Ltd.
    </Footer>
  </Layout>
);

export default Layouts;