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

export function getDecideurs(){
    return axios.get(Services.USER_URL+"/decideurs")
}
export function getTechniqueAdmins(){
    return axios.get(Services.USER_URL+"/TechniqueAdmins")
}
export function updateAdmin(id,data){
    return axios.put(Services.USER_URL +`/users/${id}`, data)
}
export function deleteUser(id){
    return axios.delete(Services.USER_URL + `/users/${id}`)
}
export  function postUser(data){
    return axios.post(Services.USER_URL+"/users" ,data)

}
