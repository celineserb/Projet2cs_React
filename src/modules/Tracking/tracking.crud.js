import {CrudService} from '../../services'
import {trackingUrls} from './tracking.constants'

export const fetchVehicleState = (queryParams)=>{
    return CrudService.Get(trackingUrls.FETCH_VEHICLE_STATE,queryParams)
}

export const fetchRentalInfo= (queryParams)=>{
    return CrudService.Get(trackingUrls.FETCH_RENTAL_INFO,queryParams)
}

