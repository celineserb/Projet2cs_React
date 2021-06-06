import { CrudService, Services } from "../../services";
import { fetchPaths } from "./stats.contants";

export function getVehicleUsagePerYear(id) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_YEAR(id))
}

export function getVehicleUsagePerMonth(id) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_MONTH(id))
}

export function getVehicleUsagePerDay(id) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.VEHICULE_DAY(id))
}

export function getBorneUsagePerYear(id, year) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.BORNE_YEAR(id, year))
}
export function getBorneUsagePerMonth(id, year, month) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.BORNE_MONTH(id, year, month))
}
export function getBorneUsagePerDay(id, year, month, day) {
    return CrudService.Get(Services.STAT_URL, fetchPaths.BORNE_DAY(id, year, month, day))
}
