import React, { Component } from 'react'
import { Layout,  Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

import VehicleState from './Tracking/VehicleState';
import TenantInfo from './Tracking/TenantInfo';
import Mappe from './Map/Map';

const { Header, Content, Footer, Sider} = Layout;

class SuiviPage extends Component {

    render() { 
        return (  
            <Layout>
            <Header  style={{ backgroundColor:'white' }} />
            <Content >
            <div className="site-layout-background" style={{ paddingLeft:24, minHeight: 500 }}>
                <Mappe></Mappe>
            </div>
              <div className="site-layout-background" style={{ minHeight: 240 }}>
                <Row>
                    <Col  xl={10}  lg={10} md={8} sm={24} xs={24}>
                     <TenantInfo></TenantInfo>
                    </Col>  
                    <Col xl={14} lg={14} md={16} sm={24} xs={24}>
                      <VehicleState></VehicleState>
                    </Col>
                </Row>
                
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright ©2021</Footer>
          </Layout>
        );
    }
}
 
export default SuiviPage;