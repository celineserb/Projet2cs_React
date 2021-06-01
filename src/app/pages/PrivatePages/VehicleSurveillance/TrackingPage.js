import React, { Component } from 'react'
import { Layout,  Row, Col} from 'antd';
import 'antd/dist/antd.css';

import VehicleState from './VehicleState';
import TenantInfo from './TenantInfo';
import Mappe from './Map';


class   TrackingPage extends Component {

    render() { 
      return (  
            <Layout>
              <div className="site-layout-background" style={{ paddingTop: 30, paddingLeft:40, paddingBottom: 30, minHeight: 500 }}>
                  <Mappe></Mappe>
              </div>
                <div className="site-layout-background" style={{ minHeight: 240 }}>
                  <Row>
                      <Col  xl={10}  lg={10} md={8} sm={24} xs={24}>
                      <TenantInfo></TenantInfo>
                      </Col>  
                      <Col xl={14} lg={14} md={16} sm={24} xs={24}>
                        <VehicleState></VehicleState>
                        <br></br>
                      </Col>
                  </Row>
                  
                </div>
            </Layout>
        );
    }
}
 
export default   TrackingPage;