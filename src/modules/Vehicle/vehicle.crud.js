import { CrudService, Services } from "../../services/crud.services";
import { fetchPaths } from './vehicle.constants'

export function getVehicles(params) {
    return CrudService.Get(Services.VEHICLE_URL, fetchPaths.VEHICLE_PATH, params);
}

export function getBornes(params) {
    return CrudService.Get(Services.VEHICLE_URL, fetchPaths.BORNE_PATH, params);
}