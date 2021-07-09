import axios from "axios";
import { Services } from "../../services/crud.services";

export function getVehicules() {
  return axios.get(Services.VEHICLE_URL + "/vehicules");
}

export function getVehicule(id) {
  return axios.get(Services.VEHICLE_URL + `/vehicules/${id}`);
}
