import React, { useState } from "react";
import App from "../pages/PrivatePages/VehicleSurveillance/index";
import {
    Route,
    Switch,
    //Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CrudService } from '../../services'
import { actions } from '../../modules'
import App from '../../App'

export const Routes = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    /*** To ensure authentication the token must be verified before access to the private routes */
    const { isAuthorized, user, authToken } = useSelector(
        ({ auth }) => ({
            isAuthorized: auth.authToken && auth.user && typeof auth.user === "object",
            authToken: auth.authToken,
            user: auth.user
        })
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
        <Switch>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    )
}