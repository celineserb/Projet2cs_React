import React, { Component } from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import PannesComponent from './PannesComponent';

const { Content} = Layout;

class PannesPage extends Component {

    render() { 
        return (  
          <Layout>
              <Content >
          
                  <PannesComponent></PannesComponent>
          
              </Content>
          </Layout>
            
        );
    }
}
 
export default   PannesPage;