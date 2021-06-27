import axios from "axios"
import { Services } from "../../services/crud.services"

export function getLocataires() {
    return axios.get(Services.USER_URL + "/locataires")
}

export function getTenantById(id) {
    return axios.get(Services.USER_URL + "/locataires/" + id)
}

export function updateTenantStatus(id, data) {
    return axios.put(Services.USER_URL + `/locataires/${id}`, data)
}

export function getUsers() {
    return axios.get(Services.USER_URL + "/users")
}
