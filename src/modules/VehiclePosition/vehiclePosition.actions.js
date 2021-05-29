import * as vehiclePositionRequests from './vehiclePosition.crud'

export const fetchVehiclePosition = QueryParams => {
    return vehiclePositionRequests.fetchVehiclePosition(QueryParams)
}

export const fetchVehicleLatestPosition = QueryParams => {
    return vehiclePositionRequests.fetchVehicleLatestPosition(QueryParams)
}