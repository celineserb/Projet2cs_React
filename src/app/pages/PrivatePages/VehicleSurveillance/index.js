import React from 'react'

import {Row, Col, Layout} from 'antd';
import 'antd/dist/antd.css';

import  SideBar from './Sidebar/SideMenu';
import Mappe from './Map/Map.js'
import TenantInfo from './Tracking/TenantInfo'
import VehicleState from './Tracking/VehicleState'

import SideMenu from './Sidebar/SideMenu'
import SuiviPage from './SuiviPage'

const { Header, Content, Footer, Sider} = Layout;
function MainPage() {
    return ( 
        <Layout>
            <SideMenu></SideMenu>
            <SuiviPage></SuiviPage>
        </Layout>
    );
}

export default MainPage