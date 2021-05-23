import React, { useState } from "react";
import {
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
export const Routes = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    /*** To ensure authentication the token must be verified before access to the private routes */
    const { isAuthorized, user, authToken, id } = useSelector(
        ({ auth }) => ({
                isAuthorized: auth.authToken && auth.id !== 0 && auth.user && typeof auth.user === "object",
                authToken: auth.authToken,
                user: auth.user,
                id: auth.id
            })
    );
    if (isAuthorized) {
        CrudService.setAuthHeader(authToken)
    } else {
        /***** Check the current token if valid and get the athentified user ****/
        if (authToken && id !== 0 && !user && loading) {
            setLoading(false)
            dispatch(actions.requestUser("Laoding"))
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
                {user.userType === "technical_admin" && <Route path="/" component={TheLayout} />}
                {user.userType === "Tenant" && <Route path="/" component={TheLayout} />}
                {user.userType === "agent" && <Route path="/" component={TheLayout} />}
            </> : <>
                {/* Write all routes for the authentification */}
                <Route path="/login" component={Login} />
                <Redirect from="*" to="/login" />
            </>
        }</Switch>
    )
}