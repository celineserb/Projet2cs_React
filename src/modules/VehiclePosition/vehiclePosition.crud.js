import { CrudService } from '../../services'
import { mapUrls } from './vehiclePosition.constants'

export const fetchVehiclePosition = (queryParams) => {
    return CrudService.Get(mapUrls.FETCH_VEHICLE_POSITION, queryParams)
}

export const fetchVehicleLatestPosition = (queryParams) => {
    return CrudService.Get(mapUrls.FETCH_VEHICLE_LATEST_POSITION, queryParams)
}