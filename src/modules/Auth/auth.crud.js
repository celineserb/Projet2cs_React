import axios from "axios";
import { authUrls } from "./auth.constants";
export function login(email, password) {
  return axios.post(authUrls.LOGIN_URL + "/signin", { email, password });
}
export function getUserById(id) {
  return axios.get(authUrls.USER_URL + "/users/" + id);
}

export function getIdByToken(token) {
  return JSON.parse(atob(token.split(".")[1]))
}
export function deleteAuth(id){
  return axios.delete( authUrls.LOGIN_URL+"/"+id)
}
export function postAccount(data){
    
    return axios.post(authUrls.LOGIN_URL+"/signup",data)
}