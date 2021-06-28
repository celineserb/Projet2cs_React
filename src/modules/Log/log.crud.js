import axios from "axios"
import { Services } from "../../services/crud.services"

export function getAllLogs() {
    return axios.get(Services.LOG_URL + "/log")
}

export function getLogById(id) {
    return axios.get(Services.LOG_URL + "/log/" + id)
}