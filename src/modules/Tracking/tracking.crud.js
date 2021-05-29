import {CrudService} from '../../services'
import {trackingUrls} from './tracking.constants'
import { Services } from '../../services/crud.services'

export const fetchVehicleState = (queryParams)=>{
    return CrudService.Get(Services.TRACKING_URL, trackingUrls.FETCH_VEHICLE_STATE,queryParams)
}

export const fetchRentalInfo= (queryParams)=>{
    return CrudService.Get(Services.TRACKING_URL, trackingUrls.FETCH_RENTAL_INFO,queryParams)
}

