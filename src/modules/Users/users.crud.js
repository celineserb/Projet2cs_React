import axios from "axios"
import { Services } from "../../services/crud.services"

export function getLocataires() {
    return axios.get(Services.USER_URL + "/locataires")
}

export function getTenantById(id) {
    return axios.get(Services.USER_URL + "/locataires/" + id)
}

