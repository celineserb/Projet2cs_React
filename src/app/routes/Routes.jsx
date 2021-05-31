import React, { useState } from "react";


import TrackingPage from "../pages/PrivatePages/VehicleSurveillance/TrackingPage";
import ManagePage from "../pages/PrivatePages/VehicleManage/ManagePage";
import PannesPage from "../pages/PrivatePages/PannesPage/PannesPage";
import SignalsPage from "../pages/PrivatePages/SignalsPage/SignalsPage";

import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CrudService } from '../../services'
import { actions } from '../../modules'

import Login from "../pages/AuthPages/login/Login";
import { TheLayout } from "../containers";
import Page404 from "../pages/AuthPages/page404/Page404";
import Page500 from "../pages/AuthPages/page500/Page500";


import { Layout} from 'antd';
import 'antd/dist/antd.css';


import TopBar from '../pages/PrivatePages/common/Topbar/Topbar';
import SideBar from '../pages/PrivatePages/common/Sidebar/Sidebar';

const { Content} = Layout;
export const Routes = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    /*** To ensure authentication the token must be verified before access to the private routes */
    const { isAuthorized, user, authToken } = useSelector(
        ({ auth }) => ({
                isAuthorized: auth.authToken && auth.user && typeof auth.user === "object",
                authToken: auth.authToken,
                user: auth.user,
            })
    );
    if (isAuthorized) {
        CrudService.setAuthHeader(authToken)
    } else {
        /***** Check the current token if valid and get the athentified user ****/
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
                {user.userType === "decision_maker" && <Route path="/" component={TheLayout} />}
                {user.userType === "agent_admin" && <Route path="/" component={TheLayout} />}
                {user.userType === "account_admin" && <Route path="/" component={TheLayout} />}
                {
                   user.userType === "technical_admin" &&
                   <Layout>
                    <SideBar></SideBar>
                    <Layout>
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
                {user.userType === "tenant" && <Route path="/" component={TheLayout} />}
                {user.userType === "agent" && <Route path="/" component={TheLayout} />}
            </> : <>
                {/* Write all routes for the authentification */}
                <Route path="/login" component={Login} />
                <Redirect  from="*" to = "/login" ></Redirect>

            </>
        }</Switch>
    )
}
