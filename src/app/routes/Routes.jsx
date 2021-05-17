import React, { useState } from "react";

import TrackingPage from "../pages/PrivatePages/VehicleSurveillance/TrackingPage";
import ManagePage from "../pages/PrivatePages/VehicleManage/ManagePage";

import {
    BrowserRouter,
    Route,
    Switch,
    //Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CrudService } from '../../services'
import { actions } from '../../modules'



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
    <BrowserRouter>
        <Switch>
            <Route exact path="/tracking_info/:vehicleId/:rentalId" component={TrackingPage} />
            <Route path="/"  component={ ManagePage }  />
        </Switch>
    </BrowserRouter>
    )
}
