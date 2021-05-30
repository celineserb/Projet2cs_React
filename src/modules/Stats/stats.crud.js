import { CrudService, Services } from "../../services";
import { fetchPaths } from "./stats.contants";

export function getVehicleUsage(id) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICLE(id))
}

export function getVehicleUsagePerYear(id, year) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_YEAR(id, year))
}

export function getVehicleUsagePerMonth(id, year, month) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_MONTH(id, year, month))
}

export function getVehicleUsagePerDay(id, year, month, day) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_DAY(id, year, month, day))
}