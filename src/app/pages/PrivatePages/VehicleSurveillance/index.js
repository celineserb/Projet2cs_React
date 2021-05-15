import React from 'react'

import {Row, Col, Layout} from 'antd';
import 'antd/dist/antd.css';

import SideBar from './Sidebar/SideBar'
import TrackingPage from './TrackingPage'

const { Header, Content, Footer, Sider} = Layout;
function MainPage() {
    return ( 
        <Layout>
            <SideBar></SideBar>
            <TrackingPage></TrackingPage>
        </Layout>
    );
}

export default MainPage