import React, { useState } from "react";


import TrackingPage from "../pages/PrivatePages/VehicleSurveillance/TrackingPage";
import ManagePage from "../pages/PrivatePages/VehicleManage/ManagePage";
import PannesPage from "../pages/PrivatePages/PannesPage/PannesPage";
import SignalsPage from "../pages/PrivatePages/SignalsPage/SignalsPage";

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CrudService } from '../../services'
import { actions } from '../../modules'
<<<<<<< HEAD
=======

import Login from "../pages/AuthPages/login/Login";
import { TheLayout } from "../containers";
import Page404 from "../pages/AuthPages/page404/Page404";
import Page500 from "../pages/AuthPages/page500/Page500";


import { Layout} from 'antd';
import 'antd/dist/antd.css';


import TopBar from '../pages/PrivatePages/common/Topbar/Topbar';
import SideBar from '../pages/PrivatePages/common/Sidebar/Sidebar';

const { Content} = Layout;
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
export const Routes = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    /*** To ensure authentication the token must be verified before access to the private routes */
    const { isAuthorized, user, authToken } = useSelector(
        ({ auth }) => ({
<<<<<<< HEAD
            isAuthorized: auth.authToken && auth.user && typeof auth.user === "object",
            authToken: auth.authToken,
            user: auth.user
        })
=======
                isAuthorized: auth.authToken && auth.user && typeof auth.user === "object",
                authToken: auth.authToken,
                user: auth.user,
            })
>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
    );
    if (isAuthorized) {
        CrudService.setAuthHeader(isAuthorized)
    } else {
        /***** Check the current token if valid and get the athentified user ****/
        if (authToken && !user && loading) {
            setLoading(false)
            dispatch(actions.requestUser("Loading"))
        }
    }

    return (
        <Switch>{
            isAuthorized ? <>
                {/* Write all routes need an authentified user */}
<<<<<<< HEAD
                <Route path="/" component={'auth'} />
                <Redirect from="*" to="/error" />
            </> : <>
                {/* Write all routes for the authentification */}
                <Route path="/" component={'no-auth'} />
                <Redirect from="*" to="/error" />
=======
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

>>>>>>> 29399402f9cabe37454440b81627148b441f7e3e
            </>
        }</Switch>
    )
}
