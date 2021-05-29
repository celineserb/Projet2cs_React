import { CrudService } from '../../services'
import { mapUrls } from './vehiclePosition.constants'
import { Services } from '../../services/crud.services'

export const fetchVehiclePosition = (queryParams) => {
    return CrudService.Get(Services.GEOLOC_URL, mapUrls.FETCH_VEHICLE_POSITION, queryParams)
}

export const fetchVehicleLatestPosition = (queryParams) => {
    return CrudService.Get(Services.GEOLOC_URL, mapUrls.FETCH_VEHICLE_LATEST_POSITION, queryParams)
}