import React, { useState } from "react";


import TrackingPage from "../pages/PrivatePages/VehicleSurveillance/TrackingPage";
import ManagePage from "../pages/PrivatePages/VehicleManage/ManagePage";
import PannesPage from "../pages/PrivatePages/PannesPage/PannesPage";
import SignalsPage from "../pages/PrivatePages/SignalsPage/SignalsPage";
import MaintenancePage from "../pages/PrivatePages/Maintenance/pages/dashboard/dashboard"

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CrudService } from '../../services'
import { actions } from '../../modules'

import Login from "../pages/AuthPages/login/Login";
import { TheLayout as DecideurLayout } from '../containers/decideur'
import { TheLayout as AccountLayout } from '../containers/adminCompte'
import Page404 from "../pages/AuthPages/page404/Page404";
import Page500 from "../pages/AuthPages/page500/Page500";
import SurveillanceSidebar from './SurveillanceSidebar'

import { Layout} from 'antd';
import 'antd/dist/antd.css';


import TopBar from '../pages/PrivatePages/common/Topbar/Topbar';
import SideBar from '../pages/PrivatePages/common/Sidebar/Sidebar';

const { Content} = Layout;

var margin = true;
function changeStyle() { 
    const layout = document.getElementById("surv_cont");
    if (margin) {
        layout.classList.remove("marginleft");
        layout.classList.add("nomarginleft");
    } else {
        layout.classList.add("marginleft");
        layout.classList.remove("nomarginleft");
    }
    margin = !margin;
}

export const Routes = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    /*** To ensure authentication the token must be verified before access to the private routes */
    const { isAuthorized, user, authToken } = useSelector(
        ({ auth }) => ({
                isAuthorized: auth.authToken && auth.user !== null && typeof auth.user === "object",
                authToken: auth.authToken,
                user: auth.user,
            })
    );
    if (isAuthorized) {
        CrudService.setAuthHeader(authToken)
    } else {
        /***** Check the current token if va
         * lid and get the athentified user ****/
        if (authToken && !user && loading) {
            setLoading(false)
            dispatch(actions.requestUser("Loading"))
        }
    }

    return (
        <Switch>
            <Route path="/404" component={Page404} />
            <Route path="/500" component={Page500} />
            {
            isAuthorized ? <>
                {/* Write all routes need an authentified user */}
                {user.userType === "decision_maker" && <Route path="/" component={DecideurLayout} />}
                {user.userType === "agent_admin" && <Route path="/" component={MaintenancePage} />}
                {user.userType === "account_admin" && <Route path="/" component={AccountLayout} />}
                {
                   user.userType === "technical_admin" &&
                   <Layout>
                    <SideBar items={SurveillanceSidebar} changeStyle={changeStyle}></SideBar>
                    <Layout id="surv_cont" className="marginleft">
                        <Content style={{backgroundColor:'white'}}>
                        <TopBar user={user}></TopBar>
                                    <Switch>
                                        <Route exact path="/tracking/:vehicleId/:rentalId" component={TrackingPage} />
                                        <Route exact path="/pannes" component={PannesPage} />
                                        <Route exact path="/enlevements" component={SignalsPage} />
                                        <Route path="/"  component={ ManagePage }  />         
                                    </Switch>
                        </Content>
                    </Layout>
                </Layout>
                   
                }
            </> : <>
                {/* Write all routes for the authentification */}
                <Route path="/login" component={Login} />
                <Redirect from="*" to="/login"  />
            </>
        }</Switch>
    )
}