import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Input, Select, Form, Row, Col, Radio, Steps, Upload, Button } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
const Option = Select.Option;
const Step = Steps.Step;

class App extends Component {
  render() {
    
    /* Hardcode some styles */
    const rowStyle = {
      lineHeight: '20px',
      paddingTop: 15
    };
    const pStyle = {
      fontWeight: 'bold',
      paddingBottom: 5
    };
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const slStyle = {
      paddingBottom: 5
    };
    const btnPanel = {
      marginTop: 50
    };

    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <img src="img/cbrs.jpg" alt="" width="120" height="31" />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Icon type="home" />Dashboard
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="appstore" />Applications
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="calendar" />All products
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Applications</Breadcrumb.Item>
              <Breadcrumb.Item>Step 1</Breadcrumb.Item>
              <Breadcrumb.Item>Step 2</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <h1>Application Options</h1>
              <Steps current={1} style={rowStyle}>
                <Step title="Finished" description="Find Bilbo Baggins" />
                <Step title="In Progress" description="Add some Options" />
                <Step title="Last step" description="Enslave the universe" />
              </Steps>
              <Form layout="inline">
                <Row gutter={32} style={rowStyle}>
                  <Col span={12}>
                    <p style={pStyle}>Choose a Product Options</p>
                    <Select defaultValue="opt1">
                      <Option value="opt1">I am certifying a product for my company</Option>
                      <Option value="opt2">I am certifying a product NOT for my company</Option>
                    </Select>
                  </Col>
                  <Col span={12}>
                    <p style={pStyle}>Additional Company Contact <i>(optional)</i></p>
                    <Input placeholder="Email address" />
                  </Col>
                </Row>
                <Row style={rowStyle}>
                  <Col>
                    <p style={pStyle}>Please Select the Certification Type <a href="#" style={{ paddingLeft: 10 }}>Certification Policies <Icon type="question" /></a></p>
                    <Radio style={radioStyle} value={1} checked>
                      <b>New Product Sertification</b> - choose this option if you want to certify a brand new product. You will need to send your product to an authorized test lab for testing.
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                      <b>New Derivative Product Certification</b> - choose this option if you want to certify a product based on an existing certified product source.
                    </Radio>
                  </Col>
                </Row>
                <Row style={slStyle}>
                  <Col span={3}>
                    Source Company:
                  </Col>
                  <Col span={12}>
                    <Select defaultValue="opt1">
                      <Option value="opt1">Wi-Fi Allicance</Option>
                      <Option value="opt2">PTSRB</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style={slStyle}>
                  <Col span={3}>
                    Target Company:
                  </Col>
                  <Col span={12}>
                    <Select defaultValue="opt1">
                      <Option value="opt1">PTSRB</Option>
                      <Option value="opt2">Wi-Fi Allicance</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style={slStyle}>
                  <Col span={3}>
                    Product:
                  </Col>
                  <Col span={12}>
                    <Select defaultValue="opt1">
                      <Option value="opt1">WFA70817</Option>
                      <Option value="opt2">XYZ-404</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Radio style={radioStyle} value={3}>
                      <b>Manage Existing Product Certifications</b> - choose this option if you would like to make changes to an existing certified product. You may need to send your product to an authorized test lab for testing.
                    </Radio>
                  </Col>
                </Row>
                <Row style={rowStyle}>
                  <Col span={2}>
                    <b>Attach files:</b>
                  </Col>
                  <Col>
                    <Upload name="file">
                      <Button>
                        <Icon type="upload" /> Click to Upload
                      </Button>
                    </Upload>
                  </Col>
                </Row>
                <Row style={btnPanel}>
                  <Col span={2}>
                    <Button type="danger">Cancel Application</Button>
                  </Col>
                  <Col span={20}>&nbsp;</Col>
                  <Col span={2}>
                    <Button type="primary">Continue<Icon type="right" /></Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            CBRS Database ©2017 Created by Hurd I/T Communications
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
