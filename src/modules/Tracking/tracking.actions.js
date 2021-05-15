import * as trackingRequests from './tracking.crud'
import {trackingSlice} from './tracking.reducer'

const {actions} = trackingSlice

export const fetchVehicleState = QueryParams =>{
    return trackingRequests
        .fetchVehicleState(QueryParams)
}
export const fetchRentalInfo = QueryParams=> dispatch =>{
    return trackingRequests
        .fetchRentalInfo(QueryParams)
        .then(res=>{
            if(res){
                 dispatch(actions.rentalInfoFetched({rentalInfo:{}}))
            }else{
                dispatch(actions.catchError({error:"Rental Informations not received"}))
            }           
        })
        .catch(err=>{
                //
        })
}
