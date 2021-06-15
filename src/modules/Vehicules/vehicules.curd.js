import axios from "axios";
import { func } from "prop-types";
import { Services } from "../../services/crud.services";

export function getVehicules() {
  return axios.get(Services.CAR_URL + "/vehicules");
}

export function getVehicule(id) {
  return axios.get(Services.CAR_URL + `/vehicules/${id}`);
}
